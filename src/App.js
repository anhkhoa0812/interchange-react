import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Slider from './components/Home/Slider'
import Home from './components/Home/Home'



const App = () =>{
  return(
    <div>
      <Header/>
      <Menu/>
      <Slider/>
      <Home />
      <Footer/>
    </div>
  )
}

export default App;