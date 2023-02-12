import style from 'styled-components'

interface PlanTypeStyleProps {
    selected: boolean,
    isActive: boolean
}

export const PlanTypeStyle = style.section<PlanTypeStyleProps>`
    padding: 16px;
    background: ${(props) => props.selected? 'var(--alabaster)' : 'var(--white)'};
    border-radius: 10px;
    border: 1px solid ${(props) => props.selected? 'var(--marine-blue)' : 'var(--cool-gray)'};
    cursor: pointer;
    .plantype-description-container {
        display: flex;
        img {
            height: fit-content;
        }
    }
    .plantype-description {
        display: grid;
        gap: .4rem;
        margin-left: .8rem;
        
        p {
            color: var(--marine-blue);
            font-weight: bold;
        }
        span {
            color: var(--cool-gray);
            font-size: 15px;
        }
        small {
            display: ${(props) => props.isActive? 'block' : 'none'};
            color: var(--marine-blue);
            font-weight: bold;
            
        }
    }
`
export default PlanTypeStyle