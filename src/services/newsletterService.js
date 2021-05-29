/* eslint-disable no-console */
import axios from 'axios';

export default function newsletterService(contact) {
  return new Promise(resolve => {
    axios
      .post(process.env.REACT_APP_NEWS_API_URL, { contact })
      .then(res => resolve(res.data))
      .catch(() => resolve({ message: `Le service n'est pas disponible pour le moment`, status: 'warning' }));
  });
}
