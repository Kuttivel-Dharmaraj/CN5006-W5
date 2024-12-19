import './App.css';

function GreetingElement() {
    const greeting = 'Hello, this is a functional component!';
    return (
        <div className="App">
            <h1>{greeting}</h1>
        </div>
    );
}

export default GreetingElement;
