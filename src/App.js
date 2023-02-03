import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider as ReduxProvider } from 'react-redux'
import './App.css';
import HomePage from './Components/HomePage/HomePage'
import Header from './Components/Header'
import LatestMovies from './Components/LatestMovies/LatestMovies'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import NotFound from './Components/NotFound/NotFound'
import UpComingMovies from './Components/UpComingMovies/UpComingMovies'
import Events from './Components/Events/Events'
import store from './Store';
function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter forceRefresh={true}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/latestMovies" element={<LatestMovies />} />
            <Route path="/movieDetails/:id" element={<MovieDetails />} />
            <Route path="/UpComingMovies" element={<UpComingMovies />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;



