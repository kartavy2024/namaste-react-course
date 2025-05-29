     let h1 = React.createElement('h1',{
        id:"heading",xyz:"hello"
     },"Hello world from the react");

     

    const ele = React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
           [React.createElement("h1",{},"Hello i am child h1"),React.createElement("h2",{},"Hello i am child h2")] 
        )
    )


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(ele);