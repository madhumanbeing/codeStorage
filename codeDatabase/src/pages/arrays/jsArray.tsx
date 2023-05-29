export const jsMethods = [
  {
    id: 1,
    title: "findIndex( )",
    description:
      "This method returns the index of the first element in an array that passes the test in a testing function.",
    example: `const arr = ["Danny", "Mandeep", "John", "Ruby"];
  const indexFinder = arr.findIndex(element => element === "Mandeep");
  console.log(indexFinder); // returns 1`,
  },
  {
    id: 2,
    title: "indexOf( )",
    description:
      "This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.",
    example: `const arr = ["Danny", "Mandeep", "John", "Ruby"];
  const indexFinder = arr.indexOf("Mandeep");
  console.log(indexFinder); // returns 1`,
  },
  {
    id: 3,
    title: "map( )",
    description:
      "This method creates a new array with the results of calling a provided function on every element in this array.",
    example: `const arr = [1, 2, 3, 4, 5, 6];
  const mapped = arr.map(element => element + 30);
  console.log(mapped); // returns [31, 32, 33, 34, 35, 36]`,
  },
  {
    id: 4,
    title: "filter( )",
    description:
      "This method creates a new array with only elements that pass the condition inside the provided function.",
    example: `const arr = [1, 2, 3, 4, 5, 6];
  const filtered = arr.filter(element => element === 2 || element === 4);
  console.log(filtered); // returns [2, 4]`,
  },
  {
    id: 5,
    title: "sort( )",
    description:
      "This method is used to arrange/sort array’s elements either in ascending or descending order.",
    example: `const arr = [1, 2, 3, 4, 5, 6];
  const alphabet = ["f", "a", "c", "v", "z"];
  
  descend = arr.sort((a, b) => a > b ? -1 : 1);
  console.log(descend); // returns [6, 5, 4, 3, 2, 1]
  
  ascend = arr.sort((a, b) => a > b ? 1 : -1);
  console.log(ascend); // returns [1, 2, 3, 4, 5, 6]`,
  },
  {
    id: 6,
    title: "every( )",
    description:
      "This method checks every element in the array that passes the condition, returning true or false as appropriate.",
    example: `const arr = [1, 2, 3, 4, 5, 6, 7];
  
  const greaterFive = arr.every(num => num > 5);
  console.log(greaterFive); // returns false;
  
  const lessnine = arr.every(num => num < 9);
  console.log(lessnine); // returns true;`,
  },
  {
    id: 7,
    title: "some( )",
    description:
      "This method checks if at least one element in the array passes the condition, returning true or false as appropriate.",
    example: `const arr = [1, 2, 3, 4, 5, 6, 7];
  
  const greaterNum = arr.some(num => num > 5);
  console.log(greaterNum); // returns true;
  
  const lessNum = arr.some(num => num <= 0);
  console.log(lessNum); // returns false;`,
  },
  {
    id: 8,
    title: "includes( )",
    description:
      "This method checks if an array includes the element that passes the condition, returning true or false as appropriate.",
    example: `const arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(arr.includes(2)); // returns true;
  console.log(arr.includes(8)); // returns false;`,
  },
  {
    id: 9,
    title: "reduce( )",
    description:
      "This method applies a function against an accumulator and each element in the array to reduce it to a single value.",
    example: `const arr = [1, 2, 3, 4, 5, 6];
  const reduced = arr.reduce((total, current) => total + current);
  console.log(reduced); // returns 21;`,
  },
  {
    id: 10,
    title: "find( )",
    description:
      "This method returns the value of the first element in an array that passes the test in a testing function.",
    example: `const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst found = arr.find(element => element > 5);\nconsole.log(found); // returns 6;`,
  },
  {
    id: 11,
    title: "fill( )",
    description:
      "This method fills the elements in an array with a static value and returns the modified array.",
    example: `const arr = new Array(3);\nconsole.log(arr); // returns [empty, empty, empty]\nconsole.log(arr.fill(10)); // returns [10, 10, 10]`,
  },
  {
    id: 12,
    title: "slice( )",
    description:
      "This method returns a new array with specified start and end elements.",
    example: `const arr = ["a", "b", "c", "d", "e"];\nconst sliced = arr.slice(2, 4);\nconsole.log(sliced); // returns ["c", "d"]\nconsole.log(arr); // returns ["a", "b", "c", "d", "e"]`,
  },
  {
    id: 13,
    title: "reverse( )",
    description:
      "This method reverses an array in place. The element at the last index becomes the first, and the element at index 0 becomes the last.",
    example: `const arr = [1, 2, 3];\narr.reverse();\nconsole.log(arr); // returns [3, 2, 1]`,
  },
  {
    id: 14,
    title: "push( )",
    description:
      "This method adds one or more elements to the end of an array and returns the new length of the array.",
    example: `const fruits = ["Apple", "Peach"];\nconsole.log(fruits.push("Banana"));\nconsole.log(fruits); // returns ["Apple", "Peach", "Banana"]`,
  },
  {
    id: 15,
    title: "pop( )",
    description:
      "This method removes the last element from the end of an array and returns that element.",
    example: `const fruits = ["Apple", "Peach"];\nfruits.pop();\nconsole.log(fruits); // returns ["Apple"]`,
  },
  {
    id: 16,
    title: "shift( )",
    description:
      "This method removes the first element from an array and returns that element.",
    example: `const fruits = ["Apple", "Peach"];\nfruits.shift();\nconsole.log(fruits); // returns ["Peach"]`,
  },
  {
    id: 17,
    title: "unshift( )",
    description:
      "This method adds one or more elements to the beginning of an array and returns the new length of the array.",
    example: `const fruits = ["Apple", "Peach"];\nconsole.log(fruits.unshift("Banana")); // returns 3\nconsole.log(fruits); // returns ["Banana", "Apple", "Peach"]`,
  },
  {
    id: 18,
    title: "forEach( )",
    description:
      "This method helps to loop over an array by executing a provided callback function for each element in the array.",
    example: `const arr = [1, 2, 3];\narr.forEach((element) => {\n  console.log(element);\n});\n// returns\n// 1\n// 2\n// 3`,
  },
];

export const jsMath = [
  {
    id: 19,
    title: "Math.round(x)",
    description: "Returns x rounded to its nearest integer",
    example: `Math.round(4.6)
    returns 5`,
  },
  {
    id: 20,
    title: "Math.ceil(x)",
    description: "Returns the value of x rounded up to its nearest integer:",
    example: `Math.ceil(6.1)
    returns 7`,
  },
  {
    id: 21,
    title: "Math.floor(x)",
    description: "Returns the value of x rounded down to its nearest integer:",
    example: `Math.floor(2.9)
    returns 2`,
  },
  {
    id: 22,
    title: "Math.trunc(x)",
    description: "Returns the integer part of x:",
    example: `Math.trunc(4.9);
    returns 4`,
  },
  {
    id: 23,
    title: "Math.sign(x)",
    description: "Returns if x is negative, null or positive:",
    example: `Math.sign(600)
    returns 1`,
  },
  {
    id: 24,
    title: "Math.pow(x,y)",
    description: "Returns the value of x to the power of y:",
    example: `Math.pow(8,2)
    returns 64`,
  },
  {
    id: 25,
    title: "Math.sqrt(x)",
    description: "Returns the square root of x",
    example: `Math.sqrt(64)
    returns 8`,
  },
  {
    id: 26,
    title: "Math.abs(x)",
    description: "Returns the absolute (positive) value of x:",
    example: `Math.abs(-4.7);
    returns 4.7`,
  },
  {
    id: 27,
    title: "Math.min() and Math.max()",
    description:
      "Can be used to find the lowest or highest value in a list of arguments:",
    example: `Math.min(0, 150, 30, 20, -8, -200);
    returns -200
    Max.max(0, 150, 30, 20, -8, -200);
    returns 150`,
  },
];
