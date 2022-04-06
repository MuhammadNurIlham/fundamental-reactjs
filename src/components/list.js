export default function List(props) {
    console.log(props);

    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.year}</h3>
            <button onClick={props.handleClick}>Press Here</button>
        </div>
    );
}