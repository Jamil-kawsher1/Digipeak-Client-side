import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
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
import Testcard from './Component/TestCard/Testcard';
import { useState } from 'react';



function App() {
  const [cart, setCart] = useState([]);
  //handle add to cart
  const handleAddToCart = (product) => {
    const exist = cart.find(pd => product._id === pd._id);
    let newCart = [];
    if (exist) {
      const rest = cart.filter(pd => pd._id !== product._id);
      exist.quantity += 1;
      newCart = [...rest, product];
    }
    else {
      product.quantity = 1;
      newCart = [...cart, product]

    }

    setCart(newCart);
  }
  return (
    <div className="App">


      <AuthProvider>




        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Navigation cart={cart}></Navigation>
              <TopBanner>

              </TopBanner>
              <Mockup></Mockup>
              <Card handleAddToCart={handleAddToCart}></Card>
              <Foooterf></Foooterf>
            </Route>

            <PrivateRoute path='/myorders'>
              <Navigation cart={cart}></Navigation>
              <Myorders></Myorders>
              <Foooterf></Foooterf>
            </PrivateRoute>
            <PrivateRoute path='/manageorders'>
              <Navigation cart={cart}></Navigation>
              <ManageAllOrder></ManageAllOrder>
              <Foooterf></Foooterf>
            </PrivateRoute>
            <PrivateRoute path='/addproduct'>
              <Navigation cart={cart}></Navigation>
              <AddProduct></AddProduct>
              <Foooterf></Foooterf>
            </PrivateRoute>
            <Route path='/login'>
              <Navigation cart={cart}></Navigation>
              <LoginSingup></LoginSingup>
              <Foooterf></Foooterf>
            </Route>

            <Route path='/card'>


              <Testcard></Testcard>
            </Route>
            <PrivateRoute path='/order/'>
              <Navigation cart={cart} ></Navigation>
              <OrderReview cart={cart} setCart={setCart}></OrderReview>
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
