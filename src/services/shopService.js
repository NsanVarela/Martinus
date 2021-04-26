import axios from 'axios';

export default function shopService(cart) {
  return new Promise(resolve => {
    axios
      .post(process.env.REACT_APP_SHOP_API_URL, { cart })
      .then(res => resolve(res.data))
      .catch(() => resolve({ message: `Le service n'est pas disponible pour le moment`, status: 'warning' }));
  });
}
