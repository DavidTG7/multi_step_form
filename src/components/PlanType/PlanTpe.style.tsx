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
    

    &:hover {
        border: 1px solid var(--marine-blue);
    }

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
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--marine-blue);
        }
        span {
            color: var(--cool-gray);
            font-size: 1.5rem;
        }
        small {
            font-size: 1.5rem;
            display: ${(props) => props.isActive? 'block' : 'none'};
            color: var(--marine-blue);
            font-weight: 500;
        }
    }
    @media (min-width: 800px) {
        .plantype-description-container{
            flex-direction: column;
            gap:1rem;
            .plantype-description {
              margin-top: 3rem;
              margin-left: 0;
            }
            img {
              width: 40px;
              height: 40px;
            }
        }
    }
`
export default PlanTypeStyle