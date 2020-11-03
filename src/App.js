import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import {GlobalResetStyle, Wrapper} from './styles/Base/Base'

function App() {
  return (
    <>
      <GlobalResetStyle /> 
      <Wrapper>
        <Header />
        <Landing />
      </Wrapper>
    </>
  )
}

export default App;
