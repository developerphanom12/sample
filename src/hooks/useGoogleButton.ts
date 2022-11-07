import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';

import { loginWithGoogle } from 'screens/Login/login.api';
import {
  setCurrencies,
  setGoogleSocialAccount,
  setUser,
} from 'screens/SignUp/reducer/signup.reducer';

import { apiServices } from 'services/api-service';

import { ROUTES } from 'constants/routes';

export const useGoogleButton = () => {
  const [isError, setIsError] = useState(false);
  const [, setGoogleError] = useState({});
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onResponseGoogle = async (
    response: Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>
  ) => {
    try {
      setIsGoogleLoading(true);
      const { data: googleData } = await apiServices.getGoogleUserInfo(
        response.access_token
      );
      const payload: IOAuthLogin = {
        socialAccountId: googleData.sub as string,
        email: googleData.email as string,
        fullName: googleData.name as string,
        type: 'google',
      };
      const { data } = await loginWithGoogle(payload);
      dispatch(setUser(data));
      dispatch(setCurrencies(data.currencies));
      dispatch(
        setGoogleSocialAccount({
          googleEmail: data.socialAccount.googleEmail,
          googleId: data.socialAccount.googleId,
          id: data.socialAccount.id,
        })
      );

      setIsGoogleLoading(false);
      navigate(
        !data.user.active_account || !data.user.accounts.length
          ? ROUTES.preference
          : ROUTES.home
      );
    } catch (err) {
      setIsGoogleLoading(false);
      console.log(err);
    }
  };

  const onErrorGoogle = (
    response: Pick<TokenResponse, 'error' | 'error_description' | 'error_uri'>
  ) => {
    const { error, error_description, error_uri } = response;
    setIsError(true);
    setGoogleError({
      error,
      error_description,
      error_uri,
    });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: onResponseGoogle,
    onError: onErrorGoogle,
  });

  const onGoogleButtonClickHandler = () => googleLogin();

  return {
    isError,
    isGoogleLoading,
    onGoogleButtonClickHandler,
  };
};
