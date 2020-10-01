//below is the format for a react function
function Button(){
    const[counter, setCounter] = useState(0); //useStat() returns an array with two values
    return <button onclick={() => setCounter(counter+1)}>{counter}</button>;
}

//Below is code that renders a JSX element to the browser in HTML
ReactDOM.render(
    <Button />, //this calls the function. 
    document.getElementById('mountNode'), // this command specifies the element to inject the returned funtion element into. 
)

