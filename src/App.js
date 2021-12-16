import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Navigation from './Component/Navigation/Navigation';
import Test1 from './Component/Test1';
import TopBanner from './Component/TopBanner/TopBanner';
import Mockup from './Component/Mockup/Mockup';
import Card from './Component/Card/Card';
import Footer from './Component/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <TopBanner></TopBanner>
      <Mockup></Mockup>

      <Card></Card>

      <Footer></Footer>
    </div>
  );
}

export default App;
