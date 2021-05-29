import axios from 'axios';

const a = process.env.REACT_APP_API_URL;
console.log('a : ', a);

export default function newsletterService(contact) {
  console.log('process :', process.env);
  return new Promise(resolve => {
    axios
      .post(process.env.REACT_APP_NEWS_API_URL, { contact })
      .then(res => resolve(res.data))
      .catch(() => resolve({ message: `Le service n'est pas disponible pour le moment`, status: 'warning' }));
  });
}
