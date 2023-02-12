import PageHeaderStyle from './PageHeader.style'

interface props {
    title: string,
    text: string,
}
const PageHeader = ({title, text}:props) => {
  return (
    <PageHeaderStyle>
        <h2>{title}</h2>
        <p>{text}</p>
    </PageHeaderStyle>
  )
}

export default PageHeader