import React from 'react';

const joke = (props) => {
    return (
        <div className="joke-item">
            {/* {props.question==undefined ? "" : "Question: "} {props.question}
            <br />
            {props.question==undefined ? "" : "PunchLine: "} {props.punchLine} */}
            
            {/* The problem with the above approach is that if there is no question, there will be a blank line left at that place instead of not having on that page at all. The best solution to that is to have an inline styling to change the display property to none. Check below: */}
            <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
            <p>PunchLine: {props.punchLine}</p>
        </div>
    );
}

export default joke;