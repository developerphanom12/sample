import { FC } from 'react';

import { AuthImageSection } from 'components/AuthImageSection/AuthImageSection';
import { CustomSelect } from 'components/CustomSelect';
import { Button } from 'components/Button/Button';

import { PreferenceStyles as Styled } from './Preference.style';
import { usePreferenceState } from './Preference.state';
import { STRINGS } from './constants';

import { DATE_FORMATS } from 'constants/strings';

export const Preference: FC = () => {
  const {
    formatedCurrencies,
    onChangeCurrencyHandler,
    onChangeDateFormatHandler,
    onContinueButtonClickHandler,
    selectedCurrencyValue,
    selectedFormatDate,
  } = usePreferenceState();

  return (
    <Styled.MainWrapper>
      <AuthImageSection />

      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <Styled.TitleWrapper>
            <Styled.Title>{STRINGS.preferenceTitle}</Styled.Title>
            <Styled.Line />
          </Styled.TitleWrapper>
          <Styled.Form>
            <Styled.SubTitle>{STRINGS.currency}</Styled.SubTitle>
            <CustomSelect
              options={formatedCurrencies}
              onChangeValueHandler={onChangeCurrencyHandler}
              defaultOption={selectedCurrencyValue}
            />

            <Styled.SubTitle>{STRINGS.dateFormat}</Styled.SubTitle>
            <CustomSelect
              options={DATE_FORMATS}
              onChangeValueHandler={onChangeDateFormatHandler}
              defaultOption={selectedFormatDate}
            />

            <Button
              themedButton="primary"
              width="auth"
              onClick={onContinueButtonClickHandler}
            >
              {STRINGS.buttonText}
            </Button>
          </Styled.Form>
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
