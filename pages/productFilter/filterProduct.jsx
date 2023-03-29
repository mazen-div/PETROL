import React, { useEffect, useState } from 'react'
import './filterProduct.css'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Filtering from './filterMethod'
import axios from 'axios'
const FilterProContex = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const [products, setproducts] = useState({})
  //   const{products,ispending,error,setproducts}=FetchData(URL);


  useEffect(() => {

    axios.get(`https://cars-project-83013-default-rtdb.firebaseio.com/Products/${search.get('company')}.json`)
      .then(res => setproducts(res.data)).catch(err => console.log(err.message))

  }, [])


  return (
    <div>

      <section className="Products ">
        <p> Product</p>
        <p>
        whereas our activities are focused on Petroleum Products and espresso Coffee in Egypt.

</p>
      </section>



      <div className="allwrps">

        {
          Object.keys(products).map((key) => {
            console.log(products[key])
            return (
              <div onClick={() => navigate('/productdetails',{state:{
                data:products[key],
                key:key
              }})} data-menu="data" className="single news-Slide-up" id="cardHover" >
                <img src= {products[key].image} alt="" className='singleCard' />
                <div className='newsCaption'>
                  <h2 className='newsCaption-title'>
                    {products[key].name}
                  </h2>
                  <p className='newsCaption-content'>
                    ULTRA ACE SAE 5W40 API SN
                  </p>

                </div>
              </div>
            )
          })
        }



      </div>

    </div>
  )
}

export default FilterProContex;