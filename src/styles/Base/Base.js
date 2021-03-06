import styled, {createGlobalStyle} from 'styled-components'
import {Colors} from '../Base/Colors'


export const GlobalResetStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    /* 10px/16px = 62.5% -> 1rem = 10px */
    font-size: 62.5%; 
}
body {
    font-family: eloquent-jf-pro, serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.3;
    color: ${Colors.color.fontPrimary};
    background-color: ${props=>props.color};
}
`
export const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`