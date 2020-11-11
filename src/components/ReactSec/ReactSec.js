import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {setBackground} from '../../redux/reducers/StylesReducer'
import {ViewWrapper, InfoWrapper, Description, 
    P, MainText, MainWrapper} from '../../styles/Layout/PageStyle'

const ReactSec = (props) => {

    useEffect(() =>{
        props.setBackground('green')
    },[])

    return(
        <>
        <MainWrapper>
            <ViewWrapper>
                <InfoWrapper>
                    <MainText>React.JS</MainText>
                    <Description>
                        <P>
                            
                        </P>
                    </Description>
                </InfoWrapper>
            </ViewWrapper>          
        </MainWrapper>
        </>
    )
   
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps, {setBackground})(ReactSec)