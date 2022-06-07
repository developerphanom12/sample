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
    onChangeCurrencyHandler,
    onChangeDateFormatHandler,
    onContinueButtonClickHandler,
    formatedCurrencies,
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
          </Styled.TitleWrapper>
          <Styled.Form onSubmit={onContinueButtonClickHandler}>
            <Styled.SubTitle>{STRINGS.currency}</Styled.SubTitle>
            <CustomSelect
              options={formatedCurrencies}
              onChangeValueHandler={onChangeCurrencyHandler}
              value={selectedCurrencyValue}
            />

            <Styled.SubTitle>{STRINGS.dateFormat}</Styled.SubTitle>
            <CustomSelect
              options={DATE_FORMATS}
              onChangeValueHandler={onChangeDateFormatHandler}
              value={selectedFormatDate}
            />

            <Button themedButton="primary" width="auth" type="submit">
              {STRINGS.buttonText}
            </Button>
          </Styled.Form>
          <Styled.EmptyDiv />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
