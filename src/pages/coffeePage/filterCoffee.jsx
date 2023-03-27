import React, { useEffect,useState } from 'react'
import '../productFilter/filterProduct.css'

import {useNavigate, useSearchParams} from 'react-router-dom'
import Filtering from '../productFilter/filterMethod'
import CoffeProdcut from './coffeProduc'
import axios from 'axios'
const FilterCoffee = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const [products, setproducts] = useState({})

  useEffect(() => {

    axios.get(`https://cars-project-83013-default-rtdb.firebaseio.com/Products/${search.get('company')}.json`)
      .then(res => setproducts(res.data)).catch(err => console.log(err.message))

  }, [])
   
  return (
    <div>
      
    <section className="Products ">
        <p>Product</p>
        <p>
        whereas our activities are focused on Petroleum Products and espresso Coffee in Egypt.

</p>
      </section>



    <div className="allwrps">
  


{
    Object.keys(products).map((key) => {

      return ( <CoffeProdcut data={products[key]} name={products[key].name}
     des={products[key].des} image={products[key].image} key={key} keyof={key} />
      )
    })
     
}
    </div>

    </div>
  )
}

export default FilterCoffee;