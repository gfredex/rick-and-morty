import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {EpisodPage} from "./pages/EpisodPage/EpisodPage.jsx";
import {CharacterPage} from "./pages/CharacterPage/CharacterPage.jsx";
import {LocationPage} from "./pages/LocationPage/LocationPage.jsx";
import {Header} from "./common/components/Header/Header.jsx";

function App() {
    return (
        <div>
            <Header/>
            <HomePage/>
            <CharacterPage/>
            <LocationPage/>
            <EpisodPage/>
        </div>
    )
}

export default App