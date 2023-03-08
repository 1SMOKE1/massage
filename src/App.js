import './App.css';
import { Header } from './components/Share/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';
import { PricePage } from './components/PricePage/PricePage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <MainPage />} />
          <Route path="*" element={ <MainPage />} />
          <Route path="/price" element={ <PricePage /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
