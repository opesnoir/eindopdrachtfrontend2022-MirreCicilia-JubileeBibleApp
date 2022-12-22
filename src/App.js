import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import AboutMe from "./pages/aboutMe/AboutMe";
import Favorites from "./pages/favorites/Favorites";
import Registration from "./pages/registration/Registration";
import SearchPageTerm from "./pages/searchPageTerm/SearchPageTerm";
import SearchPageVerse from "./pages/searchPageVerse/SearchPageVerse";
import Navigation from "./components/navigation/Navigation"
import ProfilePage from "./pages/profilePage/ProfilePage";

function App() {

  const isLoggedin= false;

  return (
<>

  <Navigation/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about-me"  element={<AboutMe/>}/>
    <Route path="/favorites" element={isLoggedin === true ? <Favorites/> : <Navigate to="/"/>}/>
    <Route path="/registration"  element={<Registration/>}/>
    <Route path="/profile-page" element={isLoggedin === true ? <ProfilePage/> : <Navigate to="/"/>}/>
    <Route path="/search-page-term"  element={<SearchPageTerm/>}/>
    <Route path="/search-page-verse"  element={<SearchPageVerse/>}/>
    <Route path="*"  element={<NotFound/>}/>
  </Routes>

  <h1>Hallo</h1>
  <p>Begin hier met coderen!</p>

</>
  );
}

export default App;
