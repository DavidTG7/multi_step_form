import {ThankContainer, ThankTitle, ThankInfo, ThankIcon} from './Thank.styles';
import icon from '../../images/icon-thank-you.svg';

export const Thank = () => {
  return(
    <ThankContainer>
      <ThankIcon icon={icon}/>
      <ThankTitle>Thank you!</ThankTitle>
      <ThankInfo>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</ThankInfo>
    </ThankContainer>
  )
};
