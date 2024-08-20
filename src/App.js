import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Page/HomePage';
import TopRatedPage from './Page/TopRatedPage';
import UpcomingPage from './Page/UpcomingPage';
import SingleMoviePage from './Page/SingleMoviePage';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage title="Popular Movies" category={"popular"} /> } />
          <Route path="/top-rated" element={<TopRatedPage title="Top Rated Movies" category={"top-rated"}/>} />
          <Route path="/upcoming" element={<UpcomingPage title="Upcoming Movies" category={"upcoming"}/>} />
          <Route path="/MovieDetailsPage/:id" element={<SingleMoviePage title="Cast"/> } />
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;