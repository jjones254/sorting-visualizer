import "../styles/Nav.scss";

function Nav() {
    return (
        <nav className="Nav">
            <ul>
                <li>
                    <button>Quick Sort</button>
                </li>
                <li>
                    <button>Merge Sort</button>
                </li>
                <li>
                    <button>Heap Sort</button>
                </li>
                <li>
                    <button>Bubble Sort</button>
                </li>
            </ul>
            <ul>
                <li>
                    <button>New Array</button>
                </li>
                <li>
                    <button>Start</button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;