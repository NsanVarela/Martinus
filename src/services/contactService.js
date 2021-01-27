import axios from 'axios';

export default function contactService(contact) {
  return new Promise(resolve => {
    axios
      .post(`http://localhost:49160/contact`, { contact })
      .then(res => resolve(res.data))
      .catch(() => resolve({ message: `Le service n'est pas disponible pour le moment`, status: 'warning' }));
  });
}
