import React, { useEffect, useState } from 'react'
import UploadProduct from '../Components/UploadProduct'
import SummaryApi from '../common'
import AdminProductCard from '../Components/AdminProductCard'

function Allproducts() {

  const [showUploadProduct,setShowUploadProduct] = useState(false)
  const [allProduct,setAllProduct] = useState([])

  const fetchAllProduct = async() =>{
    const response = await fetch(SummaryApi.allProduct.url,{
      method : 'get',
      headers : {
        'content-type' : 'application/json'
      }
    })
    const dataResponse = await response.json()

    // console.log("product data",dataResponse)

    setAllProduct(dataResponse?.data || [])
  }

  useEffect(()=>{
    fetchAllProduct()
  },[])

  return (
    
    <>
         <div className='bg-white py-2 px-4 flex justify-between items-center'>

            <h2 className='font-bold text-lg'>All Product</h2>
            <button  className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full ' onClick={()=>setShowUploadProduct(true)}>Upload Product</button>
        </div>

      {/* product rendering in there  */}

        <div className='flex items-start flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll ml-5 '>
          {
            allProduct.map((product,index)=>{
              return(
                // AdminProductCard
                <AdminProductCard data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>
                
              )
            })
          }
        </div>

        {
          showUploadProduct && (<UploadProduct onClose = {
            () => {
              setShowUploadProduct(false)
            }}
            fetchProdcut = {fetchAllProduct}
            />)
        }

    </>
  )
}

export default Allproducts
