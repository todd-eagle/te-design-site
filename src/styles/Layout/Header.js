  
import styled from 'styled-components'
import {Colors} from '../Base/Colors'

export const MainHeader = styled.header`
    position: relative;
    padding: 1rem 10rem;
    align-self: start;
    display: flex;
    height: 8rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 4;
`
export const Logo = styled.div`
    font-family: acumin-pro, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 4rem;
    color: ${Colors.color.fontPrimary};
`