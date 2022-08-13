import './styles/main.scss';
import { useState, useEffect } from 'react';
import { getQuickSortAnimations } from './algorithms/quickSort';
import { getMergeSortAnimations } from './algorithms/mergeSort';
import { getInsertionSortAnimations } from './algorithms/insertionSort';
import { getBubbleSortAnimations } from './algorithms/bubbleSort';

// components
import Nav from './components/Nav';

function App() {

  // App settings
  const arrayLength = 100;
  const animationSpeed = 2;
  const primaryColor = '#007ACD';
  const secondaryColor = 'azure';

  // State for the array of numbers and the current algorithm being used.
  const [array, setArray] = useState([]);
  const [sortType, setSortType] = useState('');

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // This function will be called to generate a new array each time the sort type is changed, or the user clicks the 'New Array' button.
  const createNewArray = () => {
    const arrayItems = document.getElementsByClassName('array-item');
    const arrayItemsArray = Array.from(arrayItems);
    const newArray = [];
    for (let i = 0; i < arrayLength; i++) {
      newArray.push(getRandomIntInclusive(4, 80));
    };
    arrayItemsArray.forEach(item => {
      item.style.backgroundColor = '#FFCB33';
    })
    setArray(newArray);
  };

  // This function will call 'createNewArray' when the component is mounted,
  // when the sort type is changed, or when the user clicks the 'New Array' button.
  useEffect(() => {
    createNewArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);
  
  // This function calls the selected sorting algorithm.
  const runSort = () => {
    if (sortType === 'quickSort') {
      quickSort();
    } else if (sortType === 'mergeSort') {
      mergeSort();
    } else if (sortType === 'insertionSort') {
      insertionSort();
    } else if (sortType === 'bubbleSort') {
      bubbleSort();
    }
  }
  
  // This function performs the quick sort animation.
  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === 'comparison1' ||
        animations[i][0] === 'comparison2';
      const arrayItems = document.getElementsByClassName('array-item');
      if (isColorChange) {
        const color =
          animations[i][0] === 'comparison1'
            ? secondaryColor
            : primaryColor;
        const [, itemOneIndex, itemTwoIndex] = animations[i];
        const itemOneStyle = arrayItems[itemOneIndex].style;
        const itemTwoStyle = arrayItems[itemTwoIndex].style;
        setTimeout(() => {
          itemOneStyle.backgroundColor = color;
          itemTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        const [, itemIndex, newHeight] = animations[i];
        if (itemIndex === -1) {
          continue;
        }
        const itemStyle = arrayItems[itemIndex].style;
        setTimeout(() => {
          itemStyle.height = `${newHeight}vh`;
        }, i * animationSpeed);
      }
    }
  }
  
  // This function performs the merge sort animation.
  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayItems = document.getElementsByClassName('array-item');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [itemOneIdx, itemTwoIdx] = animations[i];
        const itemOneStyle = arrayItems[itemOneIdx].style;
        const itemTwoStyle = arrayItems[itemTwoIdx].style;
        const color = i % 3 === 0 ? secondaryColor : primaryColor;
        setTimeout(() => {
          itemOneStyle.backgroundColor = color;
          itemTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [itemOneIdx, newHeight] = animations[i];
          const itemOneStyle = arrayItems[itemOneIdx].style;
          itemOneStyle.height = `${newHeight}vh`;
        }, i * animationSpeed);
      }
    }
  }

  // This function performs the insertion sort animation.
  const insertionSort = () => {
    const animations = getInsertionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === 'comparison1' ||
        animations[i][0] === 'comparison2';
      const arrayItems = document.getElementsByClassName('array-item');
        if (isColorChange) {
        const color =
          animations[i][0] === 'comparison1'
            ? secondaryColor
            : primaryColor;
          const [, itemOneIndex, itemTwoIndex] = animations[i];
        const itemOneStyle = arrayItems[itemOneIndex].style;
        const itemTwoStyle = arrayItems[itemTwoIndex].style;
        setTimeout(() => {
          itemOneStyle.backgroundColor = color;
          itemTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        const [, itemIndex, newHeight] = animations[i];
        const itemStyle = arrayItems[itemIndex].style;
        setTimeout(() => {
          itemStyle.height = `${newHeight}vh`;
        }, i * animationSpeed);
      }
    }
  }
  
  // This function performs the bubble sort animation.
  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === 'comparison1' ||
        animations[i][0] === 'comparison2';
      const arrayItems = document.getElementsByClassName('array-item');
      if (isColorChange) {
        const color =
          animations[i][0] === 'comparison1'
            ? secondaryColor
            : primaryColor;
        const [, itemOneIndex, itemTwoIndex] = animations[i];
        const itemOneStyle = arrayItems[itemOneIndex].style;
        const itemTwoStyle = arrayItems[itemTwoIndex].style;
        setTimeout(() => {
          itemOneStyle.backgroundColor = color;
          itemTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        const [, itemIndex, newHeight] = animations[i];
        if (itemIndex === -1) {
          continue;
        }
        const itemStyle = arrayItems[itemIndex].style;
        setTimeout(() => {
          itemStyle.height = `${newHeight}vh`;
        }, i * animationSpeed);
      }
    }
  }
  

  return (
    <>
      <Nav 
        setSortType={setSortType}
        createNewArray={createNewArray}
        runSort={runSort} 
      />
      <main className='array-container'>
        {array.map((value, index) => (
          <div className='array-item' key={index} style={{height: `${value}vh`}}>
          </div>
        ))}
      </main>
      <footer className='footer'>
        <p>&copy; 2022 <a href='https://builtwithjjones.io/' target='_blank' rel='noreferrer'>builtwithjjones.io</a></p>
      </footer>
    </>
  );
};

export default App;
