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
                              <h4>Added Friend's : {cart.length}</h4>
                              <h4>Total Salary : {totalSalary}</h4>
                              
                    </div>
          );
};

export default Cart;