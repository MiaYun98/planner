import "./style.css"

export default function Navbar () {
    return (
        <div className="navbar">
            <ul>
                <li><a href="/year"><h2>Year</h2></a></li>
                <li><a href="/month"><h2>Month</h2></a></li>
                <li><a href="/"><h2>Week</h2></a></li>
                <li><a href="/"><h2>Profile</h2></a></li>
            </ul>
           
        </div>
    )
}