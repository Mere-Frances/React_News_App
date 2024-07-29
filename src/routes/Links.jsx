import {Routes, Route} from "react-router-dom"
// page/components import
import Home from "../components/pages/Home"
import SingleArticle from "../components/pages/SingleArticle"

const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
    </Routes>
  )
}

export default Links
