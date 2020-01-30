
  export const bubbleSort = (array) => {
    const { length } = array;
    let output = []
    output[0] =[...array]
    let nextIndex = 1
    for (let i = 0; i < length; i += 1) {
      for (let j = i + 1; j <= length; j += 1) {
        if (array[j] < array[i]) {
          array[i] += array[j];
          array[j] = array[i] - array[j];
          array[i] -= array[j];

          output[nextIndex] = [...array]
          nextIndex ++;
        }
      }
    }
    return output
  }