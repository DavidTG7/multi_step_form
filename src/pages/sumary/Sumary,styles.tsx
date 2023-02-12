import style from 'styled-components'

export const SumaryStyle = style.section`
  display: grid;
  gap: 1.4rem;
  border: 1px solid black;
  padding: 1.8rem 1.4rem;
  border-radius: 10px;
  box-shadow: 1px 10px 30px 1px rgba(0,0,0,0.14);
  -webkit-box-shadow: 1px 10px 30px 1px rgba(0,0,0,0.14);
  -moz-box-shadow: 1px 10px 30px 1px rgba(0,0,0,0.14);

  .summary-box {
    background-color: var(--alabaster);
    border-radius: 10px;
    padding: 1rem;

    .summary-box-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: .8rem;
      border-bottom: 1px solid var(--light-gray);

      a{
        color: var(--cool-gray);
      }
      strong {
        display:block;
        color: var(--marine-blue);
      }
    }
    .summary-bottom {
      display: grid;
      gap: .8rem;
      padding-top: .8rem;

      div {
        display: flex;
        justify-content: space-between;
      }
      div p:first-child {
        color: var(--cool-gray);
      }
      div p:last-child {
        color: var(--marine-blue);
        font-weight: 500;
      }
    }
  }
  .summary-result {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem ;
    color: var(--cool-gray);
  }
  .summary-result strong {
    color: var(--purplish-blue);
  }

  @media (min-width: 560px) {
    max-width: 500px;
    gap: 2.5rem;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;  

  }
`
export default SumaryStyle