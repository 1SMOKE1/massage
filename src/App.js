import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <MainPage />} />
        <Route path='**' element={ <MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
