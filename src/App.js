import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/aboutMe/AboutMe";
import Favorites from "./pages/favorites/Favorites";
import Registration from "./pages/registration/Registration";
import SearchPageTerm from "./pages/searchPageTerm/SearchPageTerm";
import SearchPageVerse from "./pages/searchPageVerse/SearchPageVerse";
import NavBar from "./components/navigation/NavBar"
import ProfilePage from "./pages/profilePage/ProfilePage";

//stappen:
// stap 1: mappenstructuur aanmaken
// stap 2: routes en route importeren en desbetreffende routes (route) structuur maken


function App() {

  const isLoggedin = false;

  return (
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-me" element={<About/>}/>
          <Route path="/favorites" element={isLoggedin === true ? <Favorites/> : <Navigate to="/"/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/profile-page" element={isLoggedin === true ? <ProfilePage/> : <Navigate to="/"/>}/>
          <Route path="/search-page-term" element={<SearchPageTerm/>}/>
          <Route path="/search-page-verse" element={<SearchPageVerse/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </>
  );
}

export default App;
