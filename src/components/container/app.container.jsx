import React, {useEffect, useState} from 'react';
import { getJoke } from '../../services/axiosService';
import './app.container.css';
import Voting from '../pure/voting';


const AppContainer = () => {

    const [joke, setJoke] = useState(null);

    useEffect(() => {
        obtainJoke();
    }, []);


    function obtainJoke() {
        getJoke()
            .then((response) => {
                setJoke(response.data.value);
            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <div className='app-container'>
            <div className="text-screen">
                <p>
                    {joke}
                </p>
            </div>
            <div className="interactive-container">
                <row className="voting-row">
                    <Voting></Voting>
                </row>
                <row>
                    <button className='button' onClick={() => obtainJoke()}>New Joke</button>
                </row>
            </div>
        </div>
    );
};



export default AppContainer;
