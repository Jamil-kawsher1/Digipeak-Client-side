import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Navigation from './Component/Navigation/Navigation';
import Test1 from './Component/Test1';
import TopBanner from './Component/TopBanner/TopBanner';
import Mockup from './Component/Mockup/Mockup';
import Card from './Component/Card/Card';
import Footer from './Component/Footer/Footer';
import Sidebar from './Component/Dashboard/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import DasboardM from './Component/Dashboard/DasboardM';
import DashboardHome from './Component/Dashboard/DashboardHome/DashboardHome';
import Myorders from './Component/Myorders/Myorders';
import ManageAllOrder from './Component/ManageAllOrder/ManageAllOrder';
import AddProduct from './Component/AddProuduct/AddProduct';
import LoginSingup from './Component/Login/LoginSingup';



function App() {
  return (
    <div className="App">
      {/* <Navigation></Navigation>
      <Sidebar></Sidebar>
      <TopBanner></TopBanner>
      <Mockup></Mockup>

      <Card></Card>

      <Footer></Footer> */}


      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Navigation></Navigation>
            <TopBanner>

            </TopBanner>
            <Mockup></Mockup>
            <Card></Card>
            <Footer></Footer>
          </Route>
          <Route path='/login'>



            <Footer></Footer>
          </Route>
          <Route path='/myorders'>
            <Navigation></Navigation>
            <Myorders></Myorders>
            <Footer></Footer>
          </Route>
          <Route path='/manageorders'>
            <Navigation></Navigation>
            <ManageAllOrder></ManageAllOrder>
            <Footer></Footer>
          </Route>
          <Route path='/addproduct'>
            <Navigation ></Navigation>
            <AddProduct></AddProduct>

          </Route>
          <Route path='/register'>
            <Navigation></Navigation>
            <LoginSingup></LoginSingup>
            <Footer></Footer>
          </Route>


          <Route path='/allproduts'>

          </Route>

          <Route path='*'>

          </Route>





        </Switch>


      </BrowserRouter>
    </div>
  );
}

export default App;
