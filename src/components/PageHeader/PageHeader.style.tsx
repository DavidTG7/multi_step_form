import style from 'styled-components'

export const PageHeaderStyle = style.div`
    h2 {
      color: var(--marine-blue);
      font-size: 1.7rem;
    }
    p {
      padding-top: .7rem;
      color: var(--cool-gray);
      line-height: 1.5rem;
      font-size: 18px;
    }
    @media (min-width: 560px) {
      h2 {
        font-size: 2.3rem;
      }
    }
`
export default PageHeaderStyle