import PageHeader from '../../components/PageHeader/PageHeader'
import { PageContainer } from "../../components/pageContainer/PageContainer";
import {SummaryStyle, SummaryBox, SummaryBoxTop, SummaryBoxBottom, SummaryResult, SummaryGrayText, SummaryValue, SummaryBoxBottomItem, SummaryBoxTopPlan, SummaryFinalPrice} from './Summary,styles'

interface props {
  name?: string,
  type?: string,
  value?: number
}
export const Summary = ({ name='Arcade', type='Monthly', value=9 }:props) => {
  return(
    <PageContainer
      title='Finishing up'
      infoText='Double-check everything looks OK before confirming.'
      nextButton
      goBackButton
    >
      <SummaryStyle>
        <SummaryBox>
          <SummaryBoxTop>
            <SummaryBoxTopPlan>
              <strong>{name} ({type})</strong>
              <a href="#">Change</a>
            </SummaryBoxTopPlan>
            <SummaryValue strong>${value}/mo</SummaryValue>
          </SummaryBoxTop>
          <SummaryBoxBottom>
            <SummaryBoxBottomItem>
              <SummaryGrayText>Online service</SummaryGrayText>
              <SummaryValue strong={false}>+$1/mo</SummaryValue>
            </SummaryBoxBottomItem>
            <SummaryBoxBottomItem>
              <SummaryGrayText>Larger storage</SummaryGrayText>
              <SummaryValue strong={false}>+$2/mo</SummaryValue>
            </SummaryBoxBottomItem>
          </SummaryBoxBottom>
        </SummaryBox>
        <SummaryResult>
          <SummaryGrayText>Total (per month)</SummaryGrayText>
          <SummaryFinalPrice>+$12/mo</SummaryFinalPrice>
        </SummaryResult>
      </SummaryStyle>
    </PageContainer>
  )
}