import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Navigation from './Component/Navigation/Navigation';
import Test1 from './Component/Test1';
import TopBanner from './Component/TopBanner/TopBanner';



function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <TopBanner></TopBanner>
    </div>
  );
}

export default App;
