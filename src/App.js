import './App.css';
import AppHeader from './components/AppHeader';
import Navbar from './components/Navbar';
import HN from './components/pages/HN';
import Appfooter from './components/Footer';

function App() {
  return (
    <>
    <AppHeader/>
    <Navbar/>
    <HN/>
    <Appfooter/>
    </>
  );
}

export default App;
