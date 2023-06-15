let runs = 0, wickets = 0;
let ballWiseRes = [];
let hit = 0;
let comment = '';

function increaseScore(num) {
    if (wickets < 10) {
        hit = num;
        root.render(<App />);
    } else {
        window.alert('Team is Allout!!');
    }
}

function wicketDown() {
    if (wickets < 10) {
        hit = 'W'
        root.render(<App />)
    } else {
        window.alert('Team is Allout!!');
    }
}

function handleSubmit(event){
    event.preventDefault();
    if(hit === 'W'){
        wickets++;
    }else{
        runs+=hit;
    }
    
    ballWiseRes.unshift(
        <span> {`${hit} , ${comment}`} </span>
    );
    hit = 0; // to reset the score after the submit is clicked
    root.render(<App/>);
}

function handleChange(event){
    comment=event.target.value;
}

const Form = () => (
    <form onSubmit = {handleSubmit}>
        <input value={hit} />
        <input placeholder = 'Add a Comment'  onChange={handleChange}/>
        <button>Submit</button>
    </form>
)



const Buttons = () => (
    <>
        <button onClick={() => increaseScore(1)} >1</button>
        <button onClick={() => increaseScore(2)} >2</button>
        <button onClick={() => increaseScore(3)} >3</button>
        <button onClick={() => increaseScore(4)} >4</button>
        <button onClick={() => increaseScore(5)} >5</button>
        <button onClick={() => increaseScore(6)} >6</button>
        <button onClick={wicketDown}>W</button>
    </>
)

const ScoreCard = () => (
    <>
        <h1 >Score Card</h1>
        <p>Score : {runs}-{wickets}</p>
    </>
);

const BallWiseRes = () => (
    <>
        {ballWiseRes.map((value, index) => (
            <p key={index}>{value}</p>
        ))}
    </>
)

const App = () => (
    <>
        <ScoreCard />
        <Buttons />
        <br />
        <br />
        <Form/>
        <hr />
        <BallWiseRes />
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);