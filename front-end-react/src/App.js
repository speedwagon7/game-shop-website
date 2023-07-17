import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./Components/Organisms/NavBar"
import './App.css';
import "./Fonts/SpaceGrotesk-SemiBold.otf"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GamesPage from "./Components/Pages/GamesPage"
import BasketPage from "./Components/Pages/BasketPage"
import DisplayAllGames from "./Components/Pages/DisplayAllGames";
import AddGame from "./Components/Organisms/AddGame";
import DisplayGame from "./Components/Pages/DisplayGame"
import UpdateGame from "./Components/Organisms/UpdateGame";
import CheckoutPage from "./Components/Pages/CheckoutPage"
import { ConfirmationPage } from "./Components/Pages/ConfirmationPage";
import Footer from "./Components/Organisms/Footer"


function App() {
  return (
    <div className="container">
      <Router>
        <NavBar brand="GameShop"/>
        <Routes>
          <Route path="/" element={<GamesPage/>}/>
          <Route path="/Basket" element={<BasketPage/>} />
          <Route path="/Admin" element={<DisplayAllGames/>}/>
          <Route path="/Display/:id" element={<DisplayGame/>}/>
          <Route path="/Update" element={<UpdateGame/>}/>
          <Route path="/Admin/Add-Game" element={<AddGame/>}/> 
          <Route path="/Checkout" element={<CheckoutPage/>}/>
          <Route path="/Confirmation" element={<ConfirmationPage/>}/>
        </Routes>
        
      </Router><Footer/>
    </div>
  );
}

export default App;
