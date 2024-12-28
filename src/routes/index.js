import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import SignUp from "../Pages/SignUp";
import AdminPanel from "../Pages/AdminPanel";
import Allusers from "../Pages/Allusers";
import Allproducts from "../Pages/Allproducts";
import CategoryProducts from "../Pages/CategoryProducts";
import ProductsDetail from "../Pages/ProductsDetail";
import Cart from "../Pages/Cart";
import SearchProduct from "../Pages/SearchProduct";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            {
                path : "",
                element : <Home />
            },
            {
                path : 'login',
                element : <Login />
            },
            {
                path: 'forgot-password',
                element : <ForgotPassword />
            },
            {
                path: 'sign-up',
                element : <SignUp />
            },
            {
                path : 'admin-panel',
                element : <AdminPanel />,
                children : [
                    {
                        path : 'all-users',
                        element : <Allusers />
                    },
                    {
                        path : 'all-products',
                        element : <Allproducts />
                    }
                ]
                 
            },
            {
                path : 'product-category',
                element : <CategoryProducts />
            },
            {
                path : 'product/:id',
                element : <ProductsDetail />
            },
            {
                path : 'cart',
                element : <Cart />
            },
            {
                path : 'search',
                element : <SearchProduct />
            }
        ]
    }
])

export default router;