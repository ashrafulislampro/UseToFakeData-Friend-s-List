import React from 'react';

const Cart = (props) => {
          const cart = props.cart;
          let totalSalary = 0;
          for (let i = 0; i < cart.length; i++) {
                    const element = cart[i];
                    const salary = element.salary;
                     totalSalary+= Number(salary);
          }
          return (
                    <div>
                              <h1>Cart Summary</h1>
                              <br />
                              <p>Added Friend's : {cart.length}</p>
                              <p>Total Salary : {totalSalary}</p>
                              <ul>
                                        {
                                                  cart.map(name => <li key={name.id}>{name.first_name} {name.last_name}</li>)
                                        }
                              </ul>
                    </div>
          );
};

export default Cart;