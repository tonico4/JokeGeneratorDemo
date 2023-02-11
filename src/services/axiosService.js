import axios from 'axios';

export function getJoke() {
    return axios.get('https://api.chucknorris.io/jokes/random')
        .then()
        .catch((error) => {
            alert(error);
        });
}