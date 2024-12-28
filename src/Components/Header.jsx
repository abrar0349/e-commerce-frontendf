import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlicer';
import Role from '../common/role';
import context from '../context';


function Header() {
    const user = useSelector( state => state.user?.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [adminShow , setAdminShow] = useState()
    const Context = useContext(context)
    const searchInput = useLocation()

    // search input ko empty krny kyly nichy do lines istimal ki h 
    const URLSearch = new URLSearchParams(searchInput?.search)
    const searchQuery = URLSearch.getAll("q")

    const [search,setSearch] = useState(searchInput?.search?.split('=')[1])
  
    const handleLogout = async () => {
        let fetchData = await fetch(SummaryApi.logout.url,{
            method : SummaryApi.logout.method,
            credentials : 'include'
        })

        const data = await fetchData.json() // jb yaha await nhi diya to condition run nhi ho rhi thi
            
        if(data.success){
        
            toast.success(data.message)
            dispatch(setUserDetails(null))
            navigate("/")
        }

        if(data.error){
            toast.error(data.message)
        }
    }

    const handleSearch = (e) => {
        let {value} = e.target
        setSearch(value)
        // console.log('hello',value)
        if(value){
            navigate(`/search?q=${value}`)
        }else{
            navigate('/search')
        }
    }
    // console.log('In header check context',Context?.countProduct)
  return (
    <div className='w-full h-16 shadow-md bg-white fixed z-40 '> 

        <div className='h-full mx-auto px-auto container  flex items-center justify-between'>

            <div>
                <Link to = '/'>
                    <Logo h = {50} w = {90} />
                </Link>
                
            </div>

    {/* search bar section start from here  */}
            <div className = 'hidden lg:flex selection:w-full items-center justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'> 

                <input type="text" placeholder='search product here...' className='outline-none w-full' onChange={handleSearch} value = {search}/>
                <div className='text-lg min-w-[50px] h-8 bg-red-500 flex items-center justify-center rounded-r-full text-white ' >
                    <FaSearch />
                </div>
            </div>
    {/* search bar section end from here  */}

            <div className='flex items-center gap-7'>

        {/* logo of login show or not  */}
                    {
                        user?._id && ( <div className='text-3xl cursor-pointer' onClick={()=> setAdminShow(preve => !preve)}>

                            {
                                user?.profilePic ? (<img src={user?.profilePic} className='w-8 h-8 rounded-full ' alt={user?.name} />) : (<FaUserCircle />)
                            }
                        </div>)
                    }
                   
        {/* admin panel show or not  */}
                    {
                        adminShow && (
                            <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded md:block hidden' >
                                <nav>
                                    {
                                        user?.role === Role.admin && (<Link to={'/admin-panel/all-products'} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2 text-xs' onClick={()=> setAdminShow(preve => !preve)}>Admin Panel</Link>)
                                    }
                                
                                </nav>
                            </div>
                        )
                    }
                    
                {/* </div> */}

                {
                    user?._id && (
                        
                        <Link to = '/cart'className='text-2xl cursor-pointer relative'>

                            <span> <FaShoppingCart /></span>
        
                            <div className='bg-red-500 w-5 flex justify-center items-center absolute -top-2 -right-4 rounded-full'>
                                <p className='text-sm text-white'>{Context?.countProduct || 0}</p>
                            </div>
                        </Link>
                    )
                }
               

                <div>
                    {
                    user?._id ? (<button onClick={handleLogout} className='px-3 py-1 rounded-full bg-red-600 hover:bg-red-700 text-white cursor-pointer'>Logout</button>) :

                    ( <Link to = '/login'>
                    <button className='px-3 py-1 rounded-full bg-red-600 hover:bg-red-700 text-white cursor-pointer'>Login</button>
                    </Link>)
                    }
                    
                </div>
            </div>

        </div>

    </div>    
  )
}

export default Header
