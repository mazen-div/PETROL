import React from "react";
import "./details.css";
import lion3 from "./lion3.jpg";
import { useParams } from 'react-router-dom';
import { useEffect,useState } from "react";

const DetailsPetro = () => {

  return (

    <div>
       
       

      <div className="productDetails container">
        <div className="productLeft container">
          <h1 style={{color:"#0773df" ,fontWeight:"bold"}}>
          Petro S GOLD SAE 5W40 API SN
          </h1>
          <p style={{fontWeight:"bold",fontSize:"20px"}}>  Gasoline Engine Oils</p>
          <p style={{fontWeight:"bold",fontSize:"20px"}}>SAE 5W-40 API SN/CF </p>
          <p style={{marginBottom:"50px"}}>
          5W40 Synthetic motor oil is a high-quality lubricant that incorporates anti-wear protection, as well as protection against sludge and deposit formation. These oils are designed to provide improved oxidation resistance, improved deposit protection, better wear protection, and better low-temperature performance over the life of the oil.

          </p>
          <div classNameName="" >
            <div className="accordion" >
              <article className="accordion-panel">
                <input
                  id="accordion-question"
                  name="accordion"
                  type="radio"
                  checked
                />
                <label for="accordion-question">
                  Features
                  <i className="ri-add-line open"></i>
                  <i className="ri-subtract-line close"></i>
                </label>
                <div className="accordion-body">
                  <p className="accordion-answer">
                    <ul>
                      <li>Easy start of the engine at low temperatures</li>
                      <li>
                        Very high resistance to oxidation and reduced fuel
                        consumption
                      </li>
                      <li>
                        Neutralizing properties of oxidation and combustion
                        acids to prevent corrosion of engine parts
                      </li>

                      <li>Very low wastage and evaporation</li>
                      <li>
                        Very high anti-wear property to control erosion of
                        engine parts
                      </li>
                    </ul>
                  </p>
                </div>
              </article>

              <article className="accordion-panel">
                <input
                  id="accordion-question-2"
                  name="accordion"
                  type="radio"
                />
                <label for="accordion-question-2">
                  Indications
                  <i className="ri-add-line open"></i>
                  <i className="ri-subtract-line close"></i>
                </label>
                <div className="accordion-body">
                  <p className="accordion-answer">
                    LION PETROL 12000 is for BMW, Mercedes Benz, Maxima, Xantia,
                    Volkswagen, Toyota, Ford, Hyundai, Honda and can be used in
                    all Chinese and Iranian cars.
                  </p>
                </div>
              </article>

              <article className="accordion-panel">
                <input
                  id="accordion-question-3"
                  name="accordion"
                  type="radio"
                />
                <label for="accordion-question-3">
                  Performance level
                  <i className="ri-add-line open"></i>
                  <i className="ri-subtract-line close"></i>
                </label>
                <div className="accordion-body">
                  <p className="accordion-answer">
                    <ul>
                      <li>API SN/CF</li>
                      <li>MIL_L_46152E</li>
                      <li>ACEA A3/B3/98</li>
                      <li>1</li>
                      <li>00,505</li>
                      <li>PORSCHE”ALLSEASON”GL</li>
                      <li>BMW LONG LIFE OIL</li>
                    </ul>
                  </p>
                </div>
              </article>

              <article className="accordion-panel">
                <input
                  id="accordion-question-4"
                  name="accordion"
                  type="radio"
                />
                <label for="accordion-question-4">
                  Specifications table
                  <i className="ri-add-line open"></i>
                  <i className="ri-subtract-line close"></i>
                </label>
                <div className="accordion-body">
                  <p className="accordion-answer">
                    <table>
                      <thead>
                        <tr>
                          <th>BROPERTIES</th>
                          <th></th>
                          <th>UNITS</th>
                          <th>VALUE</th>
                          <th>TEST METHOD</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-column="First Name">GRADE</td>
                          <td data-column="Last Name"></td>
                          <td data-column="Job Title"> </td>
                          <td data-column="Twitter">5W/40</td>
                          <td data-column="Twitter"></td>
                        </tr>
                        <tr>
                          <td data-column="First Name">Specific Gravity</td>
                          <td data-column="Last Name">@ 15C</td>
                          <td data-column="Job Title">-</td>
                          <td data-column="Twitter">0.8560</td>
                          <td data-column="Twitter">ASTM D-1298</td>
                        </tr>
                        <tr>
                          <td data-column="First Name">Viscosity</td>
                          <td data-column="Last Name">@ 40 C</td>
                          <td data-column="Job Title"> mm2/s</td>
                          <td data-column="Twitter">81.00</td>
                          <td data-column="Twitter">81.00</td>
                        </tr>
                        <tr>
                          <td data-column="First Name">Specific Gravity</td>
                          <td data-column="Last Name">@ 100C</td>
                          <td data-column="Job Title">mm2/s</td>
                          <td data-column="Twitter">0.8560</td>
                          <td data-column="Twitter">ASTM D-1298</td>
                        </tr>
                        <tr>
                          <td data-column="First Name">Viscosity index</td>
                          <td data-column="Last Name"></td>
                          <td data-column="Job Title"></td>
                          <td data-column="Twitter">175</td>
                          <td data-column="Twitter">ASTM D-1298</td>
                        </tr>
                        <tr>
                          <td data-column="First Name">Flash Point</td>
                          <td data-column="Last Name">COC</td>
                          <td data-column="Job Title">C</td>
                          <td data-column="Twitter">230</td>
                          <td data-column="Twitter">ASTM D-92</td>
                        </tr>
                        <tr>
                          <td data-column="First Name">Pour Point</td>
                          <td data-column="Last Name"></td>
                          <td data-column="Job Title">C</td>
                          <td data-column="Twitter">-39</td>
                          <td data-column="Twitter">ASTM D-97</td>
                        </tr>
                        <tr>
                          <td data-column="First Name">Pour Point</td>
                          <td data-column="Last Name"></td>
                          <td data-column="Job Title">C</td>
                          <td data-column="Twitter">-39</td>
                          <td data-column="Twitter">ASTM D-97</td>
                        </tr>
                      </tbody>
                    </table>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="productRight">
          <img src="https://i.ibb.co/4YPJ9Zj/petro1.png" alt="" className="ProductDetails_Img" />
        </div>
      </div>
    
    </div>
    
  );
};

export default DetailsPetro;
