// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlicer';

function App() {
  const dispatch = useDispatch()
  const [ countProduct , setCountProdut] = useState(0)

  const fetchUserDetails = async () => {
      const dataResponse = await fetch(SummaryApi.current_user.url,{
        method : SummaryApi.current_user.method,
        credentials : 'include'
      })

      const dataApi = await dataResponse.json()
      if(dataApi.success){
        dispatch(setUserDetails(dataApi.data))
      }
    
  }

  const fetchUserAddToCart = async()=>{

    const dataResponse = await fetch(SummaryApi.countAddToCart.url,{
      method : SummaryApi.countAddToCart.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()
    // console.log(dataApi)
    setCountProdut(dataApi?.data?.count)
  
  }
  useEffect( () => {

    fetchUserDetails()

    fetchUserAddToCart() 

  },[])

  return (
    <>
    <context.Provider value = {{
      fetchUserDetails,
      fetchUserAddToCart,
      countProduct

    }}>
      <ToastContainer 
      position='top-center'
      />
      <Header />
      <main className='min-h-[calc(100vh-100px)] pt-16'>
        <Outlet />
      </main>
      <Footer />
    </context.Provider>
    </>
  );
}

export default App;
