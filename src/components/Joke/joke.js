import React from 'react';

const joke = (props) => {
    return (
        <div className="joke-item">
            <p>{props.query.que==="" ? "" : "Question: "} {props.query.que} </p>
            <p>{props.query.que==="" ? "" : "Answer: "} {props.query.ans}</p>
        </div>
    );
}

export default joke;