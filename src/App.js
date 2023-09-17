import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './my-app-design/pages/HomePage';
import WebPage from './my-app-design/pages/WebPage';
import Header from './my-app-design/components/Header';
import Footer from './my-app-design/components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/webpage' element={<WebPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
