import { requirePropFactory } from '@material-ui/core';
import axios from 'axios';
require('dotenv').config();

export function registerContact(contact) {
  console.log('URL => ', process.env.API_URL)

  axios.post(`http://localhost:3000/contact`, { contact })
    .then(res => {
      console.log('res => ', res);
      console.log('res.data => ', res.data)
    })
  
};