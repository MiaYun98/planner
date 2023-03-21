import "./style.css"

export default function Navbar () {
    return (
        <div className="navbar">
            <a href="/year"><h2>Year</h2></a>
            <a href="/month"><h2>Month</h2></a>
            <a href="/"><h2>Week</h2></a>
        </div>
    )
}