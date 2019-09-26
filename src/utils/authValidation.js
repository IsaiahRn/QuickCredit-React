import React from 'react';

export default class Validator {
  static validateFirstname(info) {
    const fields = Object.keys(info);
    let firstnameError;
    for (const key of fields) {
      if (info[key].length < 3 || info[key].length > 20) {
        return (firstnameError = (
          <ul>
            <li>Firstname should be more than 3 characters</li>
            <li>Firstname should be less than 20 characters</li>
          </ul>
        ));
      }
    }
    return firstnameError;
  }

  static validateLastname(info) {
    const fields = Object.keys(info);
    let lastnameError;
    for (const key of fields) {
      if (info[key].length < 3 || info[key].length > 20) {
        return (lastnameError = (
          <ul>
            <li>Lastname should be more than 3 characters</li>
            <li>Lastname should be less than 20 characters</li>
          </ul>
        ));
      }
    }
    return lastnameError;
  }

  static validateAddress(info) {
    const fields = Object.keys(info);
    let addressError;
    for (const key of fields) {
      if (info[key].length < 3 || info[key].length > 20) {
        return (addressError = (
          <ul>
            <li>Address should be more than 3 characters</li>
            <li>Address should be less than 20 characters</li>
          </ul>
        ));
      }
    }
    return addressError;
  }

  static validatePassoword(info) {
    const fields = Object.keys(info);
    let passwordError;
    const pwdRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    for (const key of fields) {
      if (pwdRegex.test(info[key]) === false) {
        return (passwordError = (
          <ul>
            <li>Password should be 8 characters </li>
            <li>Password should not be alphanumeric </li>
            <li>Password should have atleast a digit and special character</li>
            <li>Password should have an uppercase and lowercase letter </li>
          </ul>
        ));
      }
    }
    return passwordError;
  }

  static validateEmail(info) {
    const fields = Object.keys(info);
    let emailError;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    for (const key of fields) {
      if (emailRegex.test(info[key]) === false) {
        return (emailError = (
          <ul>
            <li>Please enter a valid email address</li>
            <li> e.g isaiah@gmail.com </li>
          </ul>
        ));
      }
    }
    return emailError;
  }
}
