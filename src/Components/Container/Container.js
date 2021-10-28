import React from 'react';
import './Container.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Container = (props) => {
          const {id, img, salary, first_name, last_name, phone, email} = props.friends;
          const handleAddToCart = props.handleAddToCart;
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
                              <p>Phone : {phone}</p>
                              <p>Salary : {salary}</p>
                              <button className="btn" onClick={()=>handleAddToCart(props.friends)}><FontAwesomeIcon icon={faPlus} /> add to cart</button>
                          </div>
                         </div>
                         <div>
                              
                         </div>
                    </div>
          );
};

export default Container;