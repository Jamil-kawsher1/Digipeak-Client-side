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
import Foooterf from './Component/Footer/Foooterf';
import NotFound from './Component/NotFoundPage/NotFound';



function App() {
  return (
    <div className="App">


      <AuthProvider>



        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Navigation></Navigation>
              <TopBanner>

              </TopBanner>
              <Mockup></Mockup>
              <Card></Card>
              <Foooterf></Foooterf>
            </Route>

            <PrivateRoute path='/myorders'>
              <Navigation></Navigation>
              <Myorders></Myorders>
              <Foooterf></Foooterf>
            </PrivateRoute>
            <PrivateRoute path='/manageorders'>
              <Navigation></Navigation>
              <ManageAllOrder></ManageAllOrder>
              <Foooterf></Foooterf>
            </PrivateRoute>
            <PrivateRoute path='/addproduct'>
              <Navigation ></Navigation>
              <AddProduct></AddProduct>
              <Foooterf></Foooterf>
            </PrivateRoute>
            <Route path='/login'>
              <Navigation></Navigation>
              <LoginSingup></LoginSingup>
              <Foooterf></Foooterf>
            </Route>


            <PrivateRoute path='/order/:id'>
              <Navigation></Navigation>
              <OrderReview></OrderReview>
              <Footer></Footer>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>





          </Switch>


        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
