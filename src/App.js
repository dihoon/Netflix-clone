import { Outlet, Route, Routes } from 'react-router-dom';
import requests from './api/requests';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Row } from './components/Row';
import { DetailPage } from './pages/DetailPage/DetailPage';
import { MainPage } from './pages/MainPage/MainPage';
import { SearchPage } from './pages/SearchPage/SearchPage';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage/>} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
