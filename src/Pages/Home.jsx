import React from 'react'
import CategoryList from '../Components/CategoryList'
import SliderProduct from '../Components/SliderProduct'
import HorizentalCardProduct from '../Components/HorizentalCardProduct'
import VerticalCardProduct from '../Components/VerticalCardProduct'

function Home() {
  return (
    <div>
        <CategoryList />
        <SliderProduct />

        <HorizentalCardProduct category = {"airpodes"}  heading = {"Tops Airodups"}/>

      <VerticalCardProduct  category = {"airpodes"}  heading = {"Tops Airodups"}/>
    </div>
  )
}

export default Home
