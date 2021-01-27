import axios from 'axios';

export default function shopService(cart) {
  return new Promise(resolve => {
    axios
      .post(`http://localhost:49160/shop`, { cart })
      .then(res => resolve(res.data))
      .catch(() => resolve({ message: `Le service n'est pas disponible pour le moment`, status: 'warning' }));
  });
}
