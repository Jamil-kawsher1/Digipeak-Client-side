import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Navigation from './Component/Navigation/Navigation';
import Test1 from './Component/Test1';
import TopBanner from './Component/TopBanner/TopBanner';
import Mockup from './Component/Mockup/Mockup';
import Card from './Component/Card/Card';
import Footer from './Component/Footer/Footer';

import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';

import Myorders from './Component/Myorders/Myorders';
import ManageAllOrder from './Component/ManageAllOrder/ManageAllOrder';
import AddProduct from './Component/AddProuduct/AddProduct';
import LoginSingup from './Component/Login/LoginSingup';
import OrderReview from './Component/OrderReview/OrderReview';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
      {/* <Navigation></Navigation>
      <Sidebar></Sidebar>
      <TopBanner></TopBanner>
      <Mockup></Mockup>

      <Card></Card>

      <Footer></Footer> */}

      <AuthProvider>



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

            <PrivateRoute path='/myorders'>
              <Navigation></Navigation>
              <Myorders></Myorders>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path='/manageorders'>
              <Navigation></Navigation>
              <ManageAllOrder></ManageAllOrder>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path='/addproduct'>
              <Navigation ></Navigation>
              <AddProduct></AddProduct>

            </PrivateRoute>
            <Route path='/login'>
              <Navigation></Navigation>
              <LoginSingup></LoginSingup>
              <Footer></Footer>
            </Route>


            <PrivateRoute path='/order/:id'>
              <Navigation></Navigation>
              <OrderReview></OrderReview>
              <Footer></Footer>
            </PrivateRoute>

            <Route path='*'>

            </Route>





          </Switch>


        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
