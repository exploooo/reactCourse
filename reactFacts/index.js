function Header() {
    return (
        <nav>
           <h1><img src='./react.png' alt="react logo" width="60px" /><b>react</b></h1> 
        </nav>
    )
}

function Footer() {
    return (
        <p><small><i>2022 Mikołaj Sarnecki, All rights Reserved</i></small></p>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <h1>Hello React!</h1>
            <h3>Here's a list of good games</h3>
            <ol>
                <li>GTA: Vice City</li>
                <li>Pet Racer</li>
                <li>Need for Speed Most Wanted</li>
                <li>Metin 2</li>
                <li>Knack!!!</li>
            </ol>
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));