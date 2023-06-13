{
    let runs = 0 , wickets = 0;
    function scoreIncrease(num) {
        if(wickets<10){
        runs = runs + num;
        root.render(app());
        }
    }

    function wicketIncrease(){
        if(wickets<10){
        wickets++;
        root.render(app());
        }
    }
    function app() {
        return (
            <>
            <div id="center" >
                <h1>Score Keeper</h1>
                <span>
                    <p>Score:{runs}-{wickets}</p>
                    <button onClick={()=>scoreIncrease(1)} >1</button>
                    <button onClick={()=>scoreIncrease(2)} >2</button>
                    <button onClick={()=>scoreIncrease(3)} >3</button>
                    <button onClick={()=>scoreIncrease(4)}>4</button>
                    <button onClick={()=>scoreIncrease(5)} >5</button>
                    <button onClick={()=>scoreIncrease(6)}>6</button>
                    <button onClick= {wicketIncrease}>Wicket</button>
                </span>
            </div>
            </>
        )
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(app());
}