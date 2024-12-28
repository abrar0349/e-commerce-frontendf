import React, { useContext, useState } from 'react'
import loginImg from '../assests/login.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common/index';
import { toast } from 'react-toastify';
import context from '../context';

function Login() {

  const [showPassword , setShowPassword] = useState(false)
  const [data , setData] = useState({
      email : '',
      password : ''
  })


  const navigate =  useNavigate()
  const { fetchUserDetails , fetchUserAddToCart} = useContext(context)


  const onhandleChange = (e) => {
    const {name , value} = e.target
    setData((prev) => {
      // console.log(prev)
      return{
        ...prev,
        [name] : value
      }
    })
  }

  const handleSubmit = async (e) => {
      e.preventDefault()

      const dataResponse = await fetch(SummaryApi.signIn.url,{
        method : SummaryApi.signIn.method,
        credentials : "include",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
     
      const dataResp = await dataResponse.json()
                
      if(dataResp.success){
          toast.success(dataResp.message)
          navigate("/")
          fetchUserDetails()
          fetchUserAddToCart()
      }
  
      if(dataResp.error){
          toast.error(dataResp.message)
      }
      
  }
  return (
    <section id = 'login'>
      
      <div className='mx-auto container p-4 max-w-sm'>

        <div className='bg-white p-5 mx-auto w-ful mx-w-md'>

          <div className='w-40 h-40 mx-auto'> 
             <img src={loginImg} alt="login icon" />
          </div>

          <form onSubmit={handleSubmit} className='pt-6 flex flex-col gap-6'>
            <div className='grid'>
              <label htmlFor="">Email : </label>
              <div className='bg-slate-100 p-2 flex'>
                <input 
                type="email" 
                placeholder='Enter Email'
                name='email'
                value={data.email}
                onChange={onhandleChange}
                className='h-full w-full outline-none bg-transparent'/>
              </div>
            </div>

            <div className='grid'>
              <label htmlFor="">Password : </label>
              <div className='bg-slate-100 p-2 flex'>
                <input 
                type = { showPassword ? 'text' : "password" }
                name = 'password'
                value={data.password}
                onChange={onhandleChange}
                placeholder='Enter Password'
                className='h-full w-full outline-none bg-transparent'/>
                <div className='cursor-pointer' onClick={() => setShowPassword( (prev) => !(prev) )}>
                  <span>
                    {  showPassword ? ( <FaEye /> ) : ( <FaEyeSlash  /> )     }
                  </span>
                </div>
              </div>
             <Link to = '/forgot-password' className='block w-fit ml-auto hover:underline hover:text-red-500'> Forgot Password </Link>
            </div>

            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] hover:scale-110 rounded-full transition-all mx-auto block mt-4'>Login</button>
          </form>

          <p className='my-4'>Don't have account ? <Link to = '/sign-up' className='text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>

        </div>

      </div>

    </section>
  )
}

export default Login
