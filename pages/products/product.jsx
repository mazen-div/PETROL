import React, { useEffect, useState } from "react";
import './product.css'
import icon1 from '../../imgs/icon1.png'
import icon4 from '../../imgs/icon4.png'
import axios from "axios";
import { FaArrowRight } from 'react-icons/fa'
import { createSearchParams, useNavigate } from 'react-router-dom'
import FetchData from "../../fetch_data";
import Filter from '../productFilter/filterMethod'
const ProductPage = () => {
  const [company, setcom] = useState({})
  const navigate = useNavigate();


  const productFilterPetro = () => {
    navigate('/filterproductPetro');

  }

  useEffect(() => {
    axios.get('https://cars-project-83013-default-rtdb.firebaseio.com/company/Petrol.json')
      .then((res) => {
        console.log(res.data);

        setcom(res.data)


      })


  }, [])

  return (
    <div>

      <section className="Products ">
        <p>Petrol Products</p>
  
      </section>

      <div className="productCards ">

        {
          Object.keys(company).map((keyy) => {
            let dat = company[keyy];

            return (
              <div key={keyy} className="cards-of-products" onClick={() => {

                return navigate({
                  pathname: `/filterproductContex`,
                  search: createSearchParams({
                    company: dat.name
                  }).toString()
          
  
                  })
              }}>
                <img src={dat.image} alt="" />
                <p className="productName">{dat.name}</p>
                <a className="read-more-product"><FaArrowRight /> Read More</a>
              </div>)
          })
        }
        {/* <div className="cards-of-products" onClick={productFilterPetro}>
          <img src={icon4} alt="" />

          <p className="productName">Petro S</p>
          <a href="/" className="read-more-product"><FaArrowRight /> Read More</a>
        </div> */}

      </div>
    </div>
  );
};

export default ProductPage;