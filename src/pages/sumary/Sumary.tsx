import PageHeader from '../../components/PageHeader/PageHeader'
import SumaryStyle from './Sumary,styles'

interface props {
  name?: string,
  type?: string,
  value?: number
}
export const Sumary = ({ name='Arcade', type='Monthly', value=9 }:props) => {
  return(
    <SumaryStyle>
      <PageHeader title={'Finishing up'} text={'Double-check everything looks OK before confirming.'} />
      <div className='summary-box'>
        <div className='summary-box-top'>
          <div>
            <strong>{name} ({type})</strong>
            <a href="#">Change</a>
          </div>
          <strong>${value}/mo</strong>
        </div>
        <div className='summary-bottom'>
          <div>
            <p>Online service</p>
            <p>+$1/mo</p>
          </div>
          <div>
            <p>Larger storage</p>
            <p>+$2/mo</p>
          </div>
        </div>
      </div>
      <div className='summary-result'>
        <p>Total (per month)</p>
        <strong>+$12/mo</strong>
      </div>
    </SumaryStyle>
  )
}