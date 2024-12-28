import React, { useEffect }  from 'react'
import { useSelector } from 'react-redux'
import { FaUserCircle } from "react-icons/fa";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Role from '../common/role';

function AdminPanel() {
    const user = useSelector( state => state.user?.user)
    // console.log(user)
    const navigate = useNavigate()
    useEffect( () => {
      
        if(user?.role !== Role.admin){
            navigate('/')
            
        }
    })

  return (
    <div className='min-h-[calc(100vh-100px)] md:flex hidden pt-1 '>
        <aside className='bg-white min-h-full w-full max-w-60 customShadow'>
            <div className='h-56 flex justify-center items-center '>
                
                <div className='text-5xl cursor-pointer relative flex flex-col justify-center items-center'>
                    {
                      user?.profilePic ? (<img src={user?.profilePic} className='w-16 h-16 rounded-full' alt={user?.profilePic} />) : ( <FaUserCircle />)
                    }
                    
                    <p className='capitalize font-semibold text-lg'>{user?.name}</p>
                    <p className='text-sm'>{user?.role}</p>

                    <nav className='grid p-4'>
                        
                        <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100 text-xs'>All Users</Link>
                        <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100 text-xs'>All Product</Link>

                    </nav>
                </div>

            </div>

        </aside>

        <main className='w-full'>
            <Outlet />
        </main>
    </div>
  )
}

export default AdminPanel
