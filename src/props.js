import React from "react";

// import component list
import List from "./components/list";

function Props() {
    const car = 'BMW';
    const color = 'White';
    const year = 2020;
    const detailCar = {
        author: 'Mr. Bean',
        desc: 'Mr Bean want to buy car type BMW again',
    };

    function handleClick() {
        alert('Hello Mr Bean');
    };

    return (
        // code inside here
        <div>
            <List name={car} color={color} year={year} detailCar={detailCar}/>
            <List name="Alphard"/>
            <List name="Avanza" handleClick={handleClick}/>
        </div>
    );

}

export default Props;