
import '../styles/Nav.scss';

function Nav(props) {

    // styling for selected sort method
    const navItems = document.getElementsByClassName('sortSelector');
    const navItemsArray = Array.from(navItems);
    
    navItemsArray.forEach(item => {
        item.addEventListener('click', () => {
            navItemsArray.forEach(item => {
                item.classList.remove('selected');
            })
            item.classList.add('selected');
        })
    })

    return (
        <nav className='Nav'>
            <ul>
                <li>
                    <button className='sortSelector' onClick={() => props.setSortType('quickSort')}>Quick Sort</button>
                </li>
                <li>
                    <button className='sortSelector' onClick={() => props.setSortType('mergeSort')}>Merge Sort</button>
                </li>
                <li>
                    <button className='sortSelector' onClick={() => props.setSortType('insertionSort')}>Insertion Sort</button>
                </li>
                <li>
                    <button className='sortSelector' onClick={() => props.setSortType('bubbleSort')}>Bubble Sort</button>
                </li>
            </ul>
            <ul>
                <li>
                    <button onClick={props.createNewArray}>New Array</button>
                </li>
                <li>
                    <button onClick={props.runSort}>Start</button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;