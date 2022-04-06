import React from "react";

// function embed-expression
function EmbedExpression() {
    // create function in function embed expression
    function getMajor() {
        return 'Full Stack';
    }

    // create a variable here
    const companyName = 'DumbWays.id';

    return (
        // code inside here
        <div>
            <h1>
                Welcome To {companyName} Class {getMajor()}
            </h1>
        </div>
    );
}

export default EmbedExpression;