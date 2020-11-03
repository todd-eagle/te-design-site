import React from 'react'
import {GreetingWrapper, MinorGreeting, MyName, Description} from '../../styles/Layout/Hero'

const Hero = () => {

    return(
        <>
            <GreetingWrapper>
                <MinorGreeting>I'm</MinorGreeting>
                <MyName>Todd Eagle.</MyName>
                <Description>I live for interactice web design</Description>
            </GreetingWrapper>

        </>
    )
}

export default Hero