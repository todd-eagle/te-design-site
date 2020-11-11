import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import {GlobalResetStyle, Wrapper} from './styles/Base/Base'

function App(props) {

  return (
    <>
      <GlobalResetStyle color={props.styles.background}/> 
      <Wrapper>
        <Header />
        <Landing />
      </Wrapper>
    </>
  )
}
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps,)(App)
