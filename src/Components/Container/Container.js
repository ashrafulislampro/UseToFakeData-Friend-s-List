import React, { useState } from 'react';
import './Container.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Container = (props) => {
          const {id, img, salary, first_name, last_name, phone, email} = props.friends;
          const [phones, setPhones] = useState("");
          const handleAddToCart = props.handleAddToCart;
          const showPhoneNumber = phone =>{
            setPhones(phone);
          }
          
          return (
                    <div>
                         <div className="main_container">
                         <div>
                              <img className="image" src={img} alt=""/>
                          </div>
                          <div className="text-content">
                              <h4>SL . {id}</h4>
                              <h2>{first_name} {last_name}</h2>
                              <p>Email : {email}</p>
                              <p>Phone : {phones}</p>
                              <p>Salary : {salary}</p>
                              <button className="btn" onClick={()=>showPhoneNumber(phone)}>Show Number</button>
                              <button className="btn" onClick={()=>handleAddToCart(props.friends)}><FontAwesomeIcon icon={faPlus} /> add to cart</button>
                          </div>
                         </div>
                         <div>
                              
                         </div>
                    </div>
          );
};

export default Container;