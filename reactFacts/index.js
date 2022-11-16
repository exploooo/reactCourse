// Hello

function Header() {
    return (
        <nav className = "header-nav">
           <img className="nav-img "src='./react.png' alt="react logo" />
            <ul className = "nav-links">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

function List() {
    return (
        <ol>
            <li>GTA: Vice City</li>
            <li>Pet Racer</li>
            <li>Need for Speed Most Wanted</li>
            <li>Metin 2</li>
            <li>Knack!!!</li>
        </ol> 
    )
}

function Main() {
    return (
        <div className = "main">
            <h1>Hello React!</h1>
            <h3>Here's a list of good games:</h3>
            <List />
        </div>
    )
}

function Footer() {
    return (
        <p className = "footer"><small>2022 Mikołaj Sarnecki, All rights Reserved</small></p>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));