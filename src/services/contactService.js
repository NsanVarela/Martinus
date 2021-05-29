import axios from 'axios';

export default function contactService(contact) {
  return new Promise(resolve => {
    axios
      .post(process.env.REACT_APP_CONTACT_API_URL, { contact })
      .then(res => resolve(res.data))
      .catch(() => resolve({ message: `Le service n'est pas disponible pour le moment`, status: 'warning' }));
  });
}
