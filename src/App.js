import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={ <MainPage />} />
          <Route path='*' element={ <MainPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
