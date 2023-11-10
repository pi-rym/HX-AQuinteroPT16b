import React, { useState } from 'react';
import validation from '../utils/validation';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 40%;
  height: 300px;
  top: 50%;
  left: 50%;
  background-color: blue;
  border: solid 3px black;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const Label = styled.label`
  color: yellow;
  font-size: 20px;
`;

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <FormContainer>
      <form>
        <Label>EMAIL: </Label>
        <input
          type='email'
          value={userData.email}
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <Label>PASSWORD: </Label>
        <input
          type='password'
          value={userData.password}
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <button
          type='submit'
          onClick={handleSubmit}
          /* disabled={Object.values(errors).some((error) => error)} */
        >
          Submit
        </button>
      </form>
    </FormContainer>
  );
};

export default Form;
