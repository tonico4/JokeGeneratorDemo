import React, {useState} from 'react';
import './voting.css';

const Voting = () => {

    const [positiveVote, setPositiveVote] = useState(0);
    const [negativeVote, setNegativeVote] = useState(0);

    function sumPositiveVote() {
        const newVote = positiveVote + 1;
        setPositiveVote(newVote);
    }

    function sumNegativeVote() {
        const newVote = negativeVote + 1;
        setNegativeVote(newVote);
    }

    return (
        <div className='container-group'>
            <i onClick={() => {sumPositiveVote()}} style={{color: 'green'}} className="bi bi-hand-thumbs-up-fill"></i>
            <span>
                {positiveVote}
            </span>
            <i onClick={() => {sumNegativeVote()}} style={{color: 'red'}} className="bi bi-hand-thumbs-down-fill"></i>
            <span>
                {negativeVote}
            </span>
        </div>
    );
};


export default Voting;
