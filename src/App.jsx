import './App.css'
import {HashRouter} from 'react-router-dom'
import Links from './routes/Links'
// import nav
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'

const App = () => {

  return (
    <HashRouter>
      <Header/>
      <Links/>
      <Footer/>
    </HashRouter>
  )
}

export default App
