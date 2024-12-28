import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import moment from 'moment'
import { toast } from 'react-toastify'
import { MdModeEditOutline } from "react-icons/md";
import ChangeUserRole from '../Components/ChangeUsersRole';


function Allusers() {

    const [allUsersData , setAllUsersData] = useState([])
    const [updateBox , setUpdateBox] = useState(false)
    const [updateUserDetails,setUpdateUserDetails] = useState({
      email : "",
      name : "",
      role : "",
      _id  : ""
  })
    const  fetchAllUsers = async () =>{

      const fetchData = await fetch(SummaryApi.allUsersData.url , {
        method : SummaryApi.allUsersData.method,
        credentials : 'include',
        headers : {
          'content-type' : 'application/json'
        }
      })

      // console.log(fetchAllUsers)
      const data = await fetchData.json()
      

      if(data.success){
        setAllUsersData(data.data)
      }

      if(data.error){
        toast.error(data.message)
      }

    }

    useEffect(()=>{
      fetchAllUsers()
    },[])

  return (
    <div className=' bg-white pb-4 '>
      <table className='w-full userTable border border-rose-500'>
          <thead>
              <tr className='bg-black text-white'>
                  <th>Sr.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Created Date</th>
                  <th>Action</th>
              </tr>
          </thead>

          <tbody className=''>
                {
                    allUsersData.map((el,index) => {
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{el?.name}</td>
                                <td>{el?.email}</td>
                                <td>{el?.role}</td>
                                <td>{moment(el?.createdAt).format('LL')}</td>
                                <td>
                                    <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white' 
                                    onClick={()=>{
                                        setUpdateUserDetails(el)
                                        // console.log('pencel icon',updateUserDetails)
                                        setUpdateBox(true)
                                    }}
                                    >
                                        <MdModeEditOutline />
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

      </table>
      {
        updateBox  && (<ChangeUserRole 
          name = {updateUserDetails.name}
          userId = {updateUserDetails._id}
          email = {updateUserDetails.email}
          role = {updateUserDetails.role}
          onClose={() => setUpdateBox(false)}
          callFunc={ () => fetchAllUsers()}
          />)
      }
      
    </div>
  )
}

export default Allusers
