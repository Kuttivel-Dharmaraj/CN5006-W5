import './App.css';

function GreetingElementWithProp(props) {
    const greeting = 'Hello, this is a functional component!';
     console.log("prop is",props.msg) 
    return (
        <div className="App">
            <h1>Wellcome, {props.msg}</h1>
        </div>
    );
}

export default GreetingElementWithProp;
