import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../Form/Form.module.css";

const Form = () => {

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/thankyou");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <fieldset className={styles.formContent}>
          <h2>Adoption Form</h2>
          <div>
            <label htmlFor="firstName">First Name : </label>
            <input type="text" name="firstName" id="firstName"
                  required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name="lastName" id="lastName"
                  required
            />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input type="text" name="email" id="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  placeholder="abc@gmail.com"
                  required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number : </label>
            <input type="text" name="phoneNumber" id="phonephoneNumberNum"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="xxx-xxx-xxxx"
            />
          </div>
          <div>
            <input className={styles.button} type="submit" value="Register"></input>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Form
