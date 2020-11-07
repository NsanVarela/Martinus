import axios from 'axios';

export default function registerContact(contact) {
  axios.post(`http://localhost:3000/contact`, { contact }).then(res => {
    console.log('res.data => ', res.data.message);
    return res.data.message;
  });
}
