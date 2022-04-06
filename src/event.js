import React from "react";

// create function event
function Event() {
    // create funtion in function event
    function Greeting() {
        alert('Good Morning World!');
    }

    return (
        // code inside here
        <div>
            <p>If you press 'Click Here' then an alert will appear</p>
            <button onClick={() => alert('Hello this is alert Click Here')}>Click Here</button>

            <p>If you press 'Submit" then an alert will appear</p>
            <button onClick={Greeting}>Submit</button>
        </div>
    );
}

export default Event;