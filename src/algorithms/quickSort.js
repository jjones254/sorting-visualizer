export function getQuickSortAnimations(array) {
    let animations = [];
    let helperArray = array.slice();
    quickSort(helperArray, 0, helperArray.length - 1, animations);
    array = helperArray;
    return animations;
}
  
function quickSort(helperArray, startIdx, endIdx, animations) {
    let pivotIdx;
    if (startIdx === endIdx) return;
    if (startIdx < endIdx) {
      pivotIdx = partitionArray(helperArray, startIdx, endIdx, animations);
      quickSort(helperArray, startIdx, pivotIdx - 1, animations);
      quickSort(helperArray, pivotIdx + 1, endIdx, animations);
    }
}
  
function partitionArray(helperArray, startIdx, endIdx, animations) {
    let pivotIdx = getRandomIntInclusive(startIdx, endIdx);
  
    animations.push(['comparison1', pivotIdx, endIdx]);
    animations.push(['swap', pivotIdx, helperArray[endIdx]]);
    animations.push(['swap', endIdx, helperArray[pivotIdx]]);
    animations.push(['comparison2', pivotIdx, endIdx]);
    swap(helperArray, pivotIdx, endIdx);
  
    let leftIdx = startIdx;
  
    for (let i = startIdx; i < endIdx; ++i) {
      animations.push(['comparison1', i, endIdx]);
      animations.push(['comparison2', i, endIdx]);
      if (helperArray[i] <= helperArray[endIdx]) {
        animations.push(['comparison1', i, leftIdx]);
        animations.push(['swap', i, helperArray[leftIdx]]);
        animations.push(['swap', leftIdx, helperArray[i]]);
        animations.push(['comparison2', i, leftIdx]);
        swap(helperArray, i, leftIdx);
        leftIdx++;
      }
    }
    animations.push(['comparison1', leftIdx, endIdx]);
    animations.push(['swap', endIdx, helperArray[leftIdx]]);
    animations.push(['swap', leftIdx, helperArray[endIdx]]);
    animations.push(['comparison2', leftIdx, endIdx]);
  
    swap(helperArray, leftIdx, endIdx);
    return leftIdx;
}
  
function swap(helperArray, firstIdx, secondIdx) {
    let temp = helperArray[firstIdx];
    helperArray[firstIdx] = helperArray[secondIdx];
    helperArray[secondIdx] = temp;
} 

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};