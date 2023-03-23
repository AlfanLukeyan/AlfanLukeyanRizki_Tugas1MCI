/* 
  argWhere function takes 3 array dimensional with 'arr' as input
  and returns a 2 array dimensional that contain the index of the elements that are not 0 
*/
function argWhere(arr) {
  const dimSizes = dim(arr);
  const result = [];

  /* 3 iterations for each dimension for the array */
  for (let i = 0; i < dimSizes[0]; i++) 
  {
    for (let j = 0; j < dimSizes[1]; j++) 
    {
      for (let k = 0; k < dimSizes[2]; k++) 
      {
        if (arr[i][j][k] !== 0) 
        {
          result.push([i, j, k]); /* the result will be returns to 'result' 2 dimensional array  */
        }
      }
    }
  }

  return result;
}

/* The dim function is used to get the size of the arr array. 
  This function is a recursive implementation for calculating array dimensions */
function dim(arr) {
  if (arr instanceof Array) 
  {
    return [arr.length].concat(dim(arr[0]));
  } 
  else 
  {
    return [];
  }
}

/* 3 dimensions array input */
const arr = [
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
];

/* calling the argWhere function and display the result */
const result = argWhere(arr);
console.log(result); /* the result = [ [ 0, 0, 0 ], [ 0, 1, 1 ], [ 1, 0, 0 ], [ 1, 1, 1 ] ] */
