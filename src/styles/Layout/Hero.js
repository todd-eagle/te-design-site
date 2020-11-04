import styled from 'styled-components'
import {Colors} from '../Base/Colors'

const FlexConfig = styled.div`
    display: flex;
    flex-direction: column;
`

export const GreetingWrapper = styled(FlexConfig)`
    height: 85vh;
    justify-content: center;
    margin-left: 5rem;
    /* background-color: orange; */
    width: 50vw;
`
export const MinorGreeting = styled.div`
    align-self: flex-start;
    font-size: calc(1.5rem + 2.5vw);
`
export const Name = styled(FlexConfig)`
    white-space: nowrap;
    margin-top: 2rem;
    font-size: calc(.1rem + 8vw);
`
export const HeroWrapper = styled.div`
`
export const Description = styled(FlexConfig)`
    margin-bottom: calc(1rem + 1.8vw);
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: calc(1rem + 1.2vw);
    align-self: center;
`
export const ProfessionWrapper = styled.div`
    display: flex;
    font-size: calc(.1rem + 2.6vw);
`
export const Left = styled(FlexConfig)`
    margin-right: calc(.2rem + 1.6vw);
    justify-content: center;
`
export const Right = styled(FlexConfig)`
    margin-right: calc(.2rem + 1.6vw);
`
export const Developer = styled.div`
    background-color: ${Colors.color.heroBoxesColor};
    color: ${Colors.color.fontBoxHeroColor};
    padding: 1rem 1rem 0 1rem;
    margin-bottom: calc(1rem + 2vw);
  `
export const Designer = styled(Developer)`
`
export const ReactGuy = styled(Developer)`
`
export const P = styled.div`
`
export const PName = styled.div`
    height: 10vw;
`
