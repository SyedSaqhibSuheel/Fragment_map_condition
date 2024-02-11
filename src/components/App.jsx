function App() {
   /* return (
            <>
            <h1>Foods</h1>
            <ul class="list-group">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
            </>
    );*/

    /*let food=["banana", "mango", "apple", "milk"];

    return(
        <>
            <h1>Foods</h1>
            <ul className="list-group">

                {food.map((items)=>( <li key={items} className="list-group-item">{items}</li>))}
               
            </ul>
            </>

    )*/
    let food=[];
    //let food=["banana", "mango", "apple", "milk"];

   /* if(food.length===0){
        return <h3>i am hungry</h3>
    }*/

    //let emptyvalue=food.length===0? <h3>i am hungry</h3>: null;
     //{ emptyvalue}
    return(
        <>
            <h1>Foods</h1>
            {food.length ===0 && <h3>i am hungry</h3>}
            <ul className="list-group">

                {food.map((items)=>( <li key={items} className="list-group-item">{items}</li>))}
               
            </ul>
            </>

    )


}
export default App;