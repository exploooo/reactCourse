const page = (
    <div>
        <img src='./react.png' alt="react logo" width="40px" />
        <h1>I love react</h1>
        <h2>Heres Why:</h2>
        <ul>
            <li>Declarative</li>
            <li>Scalable</li>
            <li>Light</li>
        </ul>
    </div>
)

// document.getElementById("root").append(JSON.stringify(page));

ReactDOM.render(page, document.getElementById("root"));