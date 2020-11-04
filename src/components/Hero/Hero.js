import React from 'react'
import {GreetingWrapper, MinorGreeting, Name, Description, ProfessionWrapper,
        Right, Left, Developer, Designer, ReactGuy, P, PName, HeroWrapper} from '../../styles/Layout/Hero'

const Hero = () => {

    return(
            <HeroWrapper>
                <GreetingWrapper>
                    <MinorGreeting>I'm</MinorGreeting>
                    <Name>
                        <PName>Todd Eagle.</PName>
                        <Description><P>I live for interactice web design.</P></Description>
                        <ProfessionWrapper>
                        <Right>
                            <Developer>Web Developer.</Developer>
                            <Designer><P>Web Designer.</P></Designer>
                        </Right>
                        <Left>
                            <ReactGuy><P>React Enthusiast.</P></ReactGuy>
                        </Left>
                    </ProfessionWrapper>
                </Name>
            </GreetingWrapper>
            </HeroWrapper>    
    )
}

export default Hero