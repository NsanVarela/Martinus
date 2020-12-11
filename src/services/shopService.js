import axios from 'axios';

export default function shopService(cart) {
  axios.post(`http://localhost:3000/shop`, { cart }).then(res => {
    // console.log('res.data => ', cart);
    return res.data.message;
  });
}
