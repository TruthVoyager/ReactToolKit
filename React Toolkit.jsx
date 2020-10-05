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

//use 'let' in place of 'var' where you need a variable to belocalized to its containing method. 
//use 'const' in place of 'let' when you want to keep a constant refrence to an object/array or a constand sting or int value. 
let x = "access and change this from only within its scope.";
var y = "access and change this from anywhere.";
const z = "maintin a constant refrence or value.";

//use arrow functions for delayed functionality or single line functions...
const ex1 = () => { };
const ex2 = a => a * a;
const ex3 = (b, c) => b * c;

[1, 2, 3, 4].map(a => a * a); //I'm guessing this retuns an array of each number's square.

//creating objects...Also giving an object a dynamic property name
const dino = 'TRex';
const inverseOfPI = 1 / math.PI;
const obj = {
    name: "Jake",
    lastName: "Loe",
    fullName: () => { name + ", " + lastName },
    [dino]: "Rawr",
    inverseOfPI: inverseOfPI, //can be shortened to just inverseOfPI,
};

console.log(obj.TRex); //writes "Rawr" to the consol. 

//I can do somthing similar to a 'using' c# statment by doing the following
const { PI, E, SQRT2 } = Math; //this just removed the need to type Math. everytime I use these extensions.

//can do something similar with my own objects. 
const circle = {
    label: 'circleX',
    radius: 2,
}

const circleArea = ({ radius }) => (PI * radius * radius).toFixed(2); // the ({radious}) makes the radious property in the cicle object accessible without having to type circle.radious 

console.log(
    circleArea(circle)//passing through the cicle object which has the expeced radius property.
);

//this example takes two parameters. the precision parameter defaults to 2 if no value is provided or is not used at all it no second property is passed through
const circleArea2 = ({ radius }, { precision = 2 } = {}) => (PI * radius * radius).toFixed(precision); // the ({radious}) makes the radious property in the cicle object accessible without having to type circle.radious 

console.log(
    circleArea(circle, {precision: 5})//this precision value of 5 will overwrite the default. 
);

//this will create the following local constants from the given array
//first = 10, second= 20, forth = 40
const [first, second, , forth] = [10, 20, 30, 40];

//OMG I finally understand how the useState command works. 
const [value, setvalue] = useState(initialValue); //so I think useState returns both a function as the second value and the result as the first... Still not totally sure...

//this asigns the first value to a var named first and the rest to an array named theRest
const [first, ...theRest] = [10, 20, 30, 40];

//I can use destructuring to copy arrays
const OtherArray;
const newArray = [...OtherArray];//WARNING shallow coppy! nested array will be linked via refrence. 

//backtick stings are template strings meaning you can inject javascript
const html = `<div>${Math.random()}</div>`;

//example class syntax
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}!`);
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name);//super is used to evoke the parent constructor.
        this.level = level;
    }
    greet() {//overwrites the parent greet function
        console.log(`Hello ${this.name} from ${this.level}`);
    }
}

const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");
const o3 = new Student("Mary", "2nd Grade");
o3.greet = () => console.log('I am special!');//overwrites the greet function

o1.greet();
o2.greet();
o3.greet();

////example promise
const fetchData = async () => {
    const resp = await fetch('https://api.github.com');
    const data = await resp.json();
    console.log(data); //returns an object. 
};

fetchData();


//example app using class components
// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

const CardList = (props) => (//this function pulls from the array of profiles found in its prop and speads thin into an array of card objects
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
);//the profile Id passed as a key is important to distinguish between profiles. 

class Card extends React.Component {
    render() {//this class takes in a profile through its props and creates a card object to be added to the list of card objects in the card list's array. 
        const profile = this.props; //below are examples of in line styling that can be dynamically adjusted via javascript. Like changing the color of somthing on hover or click. 
        return (
            <div className="github-profile" style={{ margin: '1rem' }}>
                <img src={profile.avatar_url} />
                <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div className="name" style={{ fontSize: '125%' }}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

class Form extends React.Component {
    state = { userName: '' }; //this is stored value of the input field 
    handleSubmit = async (event) => {
        event.preventDefault(); //this prevents the page from refreshing so that only the neccessary elements need to refresh. 
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`); //makes the API call
        this.props.onSubmit(resp.data); //sends data up to the parent so to speak via the onSubmit prop defined in the parent app.
        this.setState({ userName: '' });// sets username to an empty string
    };
    render() {
        return (//when the button is pressed here it triggers the onSumbit function somehow. 
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.userName} //the defined state is passed through here as the value of the input
                    onChange={event => this.setState({ userName: event.target.value })}//reads every key press event engaging with this input and assigned the resulting sequence to the username state.
                    placeholder="GitHub username"
                    required
                />
                <button>Add card</button>
            </form>
        );
    }
}

class App extends React.Component {
    //state = {
    //    profiles: [],
    //};
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
        };
    }
    addNewProfile = (profileData) => {//takes in the data from the API result and adds it to the end of the Profiles state.
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],//this concatinates a card onto the end of the existing card list.
        }));
    };
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addNewProfile} />
                <CardList profiles={this.state.profiles} />
            </div>//the above CardList component passes the array of profiles in the profiles state through to the CardList function. 
        );
    }
}

ReactDOM.render(
    <App title="The GitHub Cards App" />,
    mountNode,
);

//example app using function components

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn
const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
);

const Card = (props) => (
    <div className="github-profile">
        <img src={props.avatar_url} />
        <div className="info">
            <div className="name">{props.name}</div>
            <div className="company">{props.company}</div>
        </div>
    </div>
);

const InputForm = (props) => {
    const [userName, setUserName] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await fetch(`https://api.github.com/users/${userName}`);
        const data = await resp.json();
        props.onSubmit(data); //returns an object.
        setUserName('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={userName}
                onChange={event => setUserName(event.target.value)}
                placeholder="GitHub username"
                required
            />
            <button>Add card</button>
        </form>
    );
};

const App = (props) => {
    const [profiles, setProfiles] = useState([]);
    const addNewProfile = (profileData) => setProfiles([...profiles, profileData]);
    return (
        <div>
            <div className="header">{props.title}</div>
            <InputForm onSubmit={addNewProfile} />
            <CardList profiles={profiles} />
        </div>
    );
};

ReactDOM.render(
    <App title="The GitHub Cards App" />,
    mountNode,
);

/*
 Summary of this App:
    - CityInputForm: Takes in a location and uses it to retrieve the place_id. *
    - DayCard: uses the data in its prop to create a DayCard element to reside inside of the DayList.
    - DayList: Uses the day array in its prop to instansiate a DayCard component for each day in the array, passing a days data to the DayCArd as a prop.
    - ItemCard: Uses the item data in its prop to create an ItemCard element to reside inside of the ItemListComponent.
    - ItemList: Uses the day array to create an array of suggested packing items as pulled from the ItemObjects JSON file. Instansiates an item card for each item in the items array passing the item details as a prop for its instance.
    - ItemObjects: contains a JSON array of different items; their name and specific conditions to warrent taking them.
    - App: Takes in a new array from the CityInputForm and stores it as a state which is passed as a prop to the DayList component and the ItemList component.
 */