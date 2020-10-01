//react function handling a button click
function Button(props) { //props in the parameters passed in through the properties of the JSX calls in the return of the app function.
                        //I can access prop values by doing something like Props.nameOfTheProp
                        //beware, in C# I am used to having one parameter per incoming argument. In this case all arguments are sent over the same paramenter. 
    const handleClick = () => props.onClickFunction(props.increment);
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

//this function injects a div containing the the props.message paramenter. In this can the value of the counter is being passed through. 
function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

//this function contains two properties and cobbles together multiple functions to be rendered in the ReactDOM.render
function App() {
    const [counter, setCounter] = useState(0);//this defines a state object and a function to change that state. Use state returns an array with two elements that get destructured int the state object. 
                                            //'0' is the origional state of the object, though it does not have to be a number. 
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue); //this is called by accessing the developer defined argument of 'onCLickFunction' from the props of a function.
                                                                                        //setCounter is evoked and whatever value I put in its parythasis will be assigned to the counter
                                                                                        //it almost seems like counter is the getter and setCounter is the setter. 
    return (
        <div>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Button onClickFunction={incrementCounter} increment={100} />
            <Display message={counter} />
        </div>
    );
}

//this is used to render the app and inject it into an HTML element on the browser. 
ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
);