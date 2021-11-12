import axios from 'axios';

export default function eventService(booking) {
    return new Promise(resolve => {
        axios
        .post(process.env.REACT_APP_EVENT_API_URL, {booking})
        .then(res => resolve(res.data))
        .catch(() => resolve({ message: `Le service n'est pas disponible pour le moment`, status: 'warning' }));
    })
}
