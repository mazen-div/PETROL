import React, { useEffect, useState } from "react";
import './product.css'
import spreeso from '../../imgs/spreeso.png'
import { FaArrowRight } from 'react-icons/fa'
import { createSearchParams, useNavigate } from 'react-router-dom'

import axios from "axios";
const Coffee = () => {

  const navigate = useNavigate();
  const [company, setcom] = useState({})
  const productFilterCoffee = () => {
    // 👇️ navigate programmatically
    navigate('/filterproductCoffee');
  };
  useEffect(() => {
    axios.get('https://cars-project-83013-default-rtdb.firebaseio.com/Company/Coffe.json')
      .then((res) => {
        console.log(res.data);

        setcom(res.data)


      })
  }, [])

  return (
    <div>

      <section className="Products ">
        <p>Products</p>
        <p>
          Norooz Qeshm Company distributor of Iranian and foreign engine oils
        </p>
      </section>

      <div className="productCards ">

        {

          Object.keys(company).map((keyy) => {
            let dat = company[keyy];

            return (
              <div key={keyy} className="cards-of-products" onClick={() => {

                return navigate({
                  pathname: `/filterproductCoffee`,
                  search: createSearchParams({
                    company: dat.name
                  }).toString()


                })
              }}>
                <img src={dat.image} alt="" />
                <p className="productName">{dat.name}</p>
                <span href="#" className="read-more-product"><FaArrowRight /> Read More</span>

              </div>)
          })

        }


      </div>
    </div>
  );
};

export default Coffee;