import AllSongs from "./components/AllSongs"
import Musicplayer from "./components/Musicplayer"
import { BrowserRouter, Routes, Route } from "react-router"
import Playlist from "./components/Playlist"
function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <main className="app-main">
          <div className="player-section">
            <Musicplayer />
          </div>
          <div className="content-section">
            <Routes>
              <Route path="/" element={<AllSongs/>}/>
              <Route path="/playlist" element={<Playlist/>}/>
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>

  )
}

export default App
