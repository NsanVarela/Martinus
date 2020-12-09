import axios from 'axios';

export default function newsletterService(contact) {
  axios.post(`http://localhost:3000/newsletter`, { contact }).then(res => {
    // console.log('res.data => ', res.data.message);
    return res.data.message;
  });
}
