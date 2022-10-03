
import './App.css';
import Home from './pages/Home';
import styled, {ThemeProvider} from 'styled-components';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Categories from './pages/Categories';
import About from './pages/About';
import Cart from './pages/Cart';
import Successful from './pages/Successful';
import ScrollToTop from './components/ScrollToTop';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import {lightMode, darkMode} from './Utils/ThemePicker'

import {useSelector} from 'react-redux'

// here is for our styles
const Container = styled.div`
  width: 100%;
  background-color: ${({theme})=> theme.bg};
  position: relative;
 overflow-x: hidden;
`

function App() {
  const {lightModeTheme} = useSelector((state)=> state.settheme)


  return (
    
    <ThemeProvider theme={lightModeTheme?lightMode : darkMode}>
    <Container>
      <Router>
        <ScrollToTop>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='category/:id' element={<Categories/>}/>
          <Route path='about/:id' element={<About/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='success' element={<Successful/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='signin' element={<SignIn/>}/>
        </Routes>
        </ScrollToTop>
      </Router>
    </Container>
    </ThemeProvider>
   
  );
}

export default App;
