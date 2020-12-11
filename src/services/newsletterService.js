import axios from 'axios';

export default function newsletterService(contact) {
  return new Promise(resolve => {
    axios
      .post(`http://localhost:3000/newsletter`, { contact })
      .then(res => resolve(res.data))
      .catch(() => resolve({ message: `Le service n'est pas disponible pour le moment`, status: 'warning' }));
  });
}
