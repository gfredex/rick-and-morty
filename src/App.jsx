import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {EpisodePage} from "./pages/EpisodePage/EpisodePage.jsx";
import {CharacterPage} from "./pages/CharacterPage/CharacterPage.jsx";
import {LocationPage} from "./pages/LocationPage/LocationPage.jsx";
import {Header} from "./common/components/Header/Header.jsx";
import {Character} from "./pages/CharacterPage/character/Character.jsx";
import {Route, Routes} from "react-router";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/characters" element={<CharacterPage/>}/>
                <Route path="/characters/:id" element={<Character/>}/>
                <Route path="/locations" element={<LocationPage/>}/>
                <Route path="/episodes" element={<EpisodePage/>}/>
            </Routes>
        </div>
    )
}

export default App