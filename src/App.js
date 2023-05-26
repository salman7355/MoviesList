import "./App.css";
import ActionBar from "./Components/ActionBar";
import MoviesList from "./Components/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

// https://app.netlify.com/sites/admirable-elf-3b7373/overview

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ActionBar />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
