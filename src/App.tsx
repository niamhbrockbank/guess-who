import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Setup from "./components/Setup";

function App(): JSX.Element {
  return (
    <>
    <Menu />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/setup' element={<Setup />} />
      <Route path='/game' element={<Game />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
