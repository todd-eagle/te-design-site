import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {setBackground} from '../../redux/reducers/StylesReducer'
import {ViewWrapper, MinorGreeting, InfoWrapper, Description, ProfessionWrapper,
        Right, Left, Developer, Designer, ReactGuy, P, MainText, MainWrapper} from '../../styles/Layout/PageStyle'

const Hero = (props) => {

    useEffect(() =>{
        props.setBackground('orange')
    },[])
   

    return(
        <>
            <MainWrapper>
                <ViewWrapper>
                    <MinorGreeting>I'm</MinorGreeting>
                    <InfoWrapper>
                        <MainText>Todd Eagle.</MainText>
                        <Description><P>I live for interactice web design.</P></Description>
                        <ProfessionWrapper>
                        <Right>
                            <Developer><P>Web Developer.</P></Developer>
                            <Designer><P>Web Designer.</P></Designer>
                        </Right>
                        <Left>
                            <ReactGuy><P>React Enthusiast.</P></ReactGuy>
                        </Left>
                        </ProfessionWrapper>
                    </InfoWrapper>
                </ViewWrapper>
            </MainWrapper>  
        </>      
    )
}
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps, {setBackground})(Hero)