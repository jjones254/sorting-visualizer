import './styles/main.scss';
import { useState, useEffect } from 'react';

// components
import Nav from './components/Nav';

function App() {
  
  const [array, setArray] = useState([]);

  useEffect(() => {
    createNewArray();
  }, []);

  const createNewArray = () => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(getRandomIntInclusive(4, 80));
    };
    setArray(newArray);
  };

  return (
    <>
      <Nav />
      <main className='array-container'>
        {array.map((value, index) => (
          <div className='array-item' key={index} style={{height: `${value}vh`}}>
          </div>
        ))}
      </main>
      <footer className='footer'>
        <p>Built by <a href='https://justinjones.io/' target='_blank' rel='noreferrer'>justinjones.io</a></p>
      </footer>
    </>
  );
};

//The maximum is inclusive and the minimum is inclusive - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default App;
