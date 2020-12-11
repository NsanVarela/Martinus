import axios from 'axios';

export default function contactService(contact) {
  axios.post(`http://localhost:3000/contact`, { contact }).then(res => {
    console.log('res.data => ', res.data);
    return res.data.message;
  });
}
