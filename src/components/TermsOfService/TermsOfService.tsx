import { TermsOfServiceStyles as Styles } from './TermsOfService.style';

import { TERMS_TITLE, TERMS } from './constants/termsOfService.constants';
import {
  USER_LICENSE_TITLE,
  USER_LICENSE,
} from './constants/userLicense.constants';

export const TermsOfService = () => {
  return (
    <Styles.Wrappper>
      <Styles.ContentWrapper>
        <Styles.Title>{TERMS_TITLE}</Styles.Title>
        {TERMS.map((item) => (
          <div key={item.title}>
            <Styles.SubTitle>{item.title}</Styles.SubTitle>
            {item.value.map((p) => (
              <Styles.Paragraph key={p}>{p}</Styles.Paragraph>
            ))}
          </div>
        ))}
        <Styles.UserLicenseWrapper>
          <Styles.Title>{USER_LICENSE_TITLE.title}</Styles.Title>
          <Styles.Paragraph>{USER_LICENSE_TITLE.text}</Styles.Paragraph>
          {USER_LICENSE.map((item) => (
            <div key={item.title}>
              <Styles.SubTitle>{item.title}</Styles.SubTitle>
              {item.value.map((p) => (
                <Styles.Paragraph key={p}>{p}</Styles.Paragraph>
              ))}
            </div>
          ))}
        </Styles.UserLicenseWrapper>
      </Styles.ContentWrapper>
    </Styles.Wrappper>
  );
};
