//=======================================================================
/*                            UTIL FUNCTIONS                           */
//=======================================================================

function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  
  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=======================================================================
  /*                               EXERCISES                              */
  //=======================================================================
  
  // Solve the following functions using High Order Functions:
  
  /*****************************  1  ***********************/
  // write a function called addOne that takes an array of numbers as an input,
  // and returns a new array with all array elements incremented by one as an output
  // addOne( [1,2,3,4] ) ==> [2,3,4,5]
  // addOne( [3,6,9] ) ==> [4,7,10]
  
  // Note: using MAP
  function addOne(array) {
     return map(array,function(element) {
      element+1
      
      
     })

    // TODO: your code here
  }
  
  /*****************************  2  ***********************/
  // Take an array and remove every second element out of that array.
  // Always keep the first element and start removing with the next element.
  // Example:
  // myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
  // Sample output: removeEveryOther([1, 12, 3, 44, 10, 6, 17]) => [1, 3, 10, 17]
  // None of the arrays will be empty, so you don't have to worry about that!
  
  // Note: using FILTER
 

  function removeEveryOther(array) {
    return filter(array,function(element,index){
      if(index%2===0){
        return element
      }
    })
  }
   
  
  /*****************************  3  ***********************/
  // use map to write the following functions
  
  function doubleAll(nums) {
    return map(nums,function(element){
     return element*2
    })
    
  }  
    // TODO: your work goes here
  
  function squareAll(nums) {
  
      return map(nums,function (x) {
        return Math.pow(x, 2);
      });
  }
    // TODO: your work goes here

    function stringLengths(array) {
      return map(array,function(element){
       return  element.length

      } );
    }
    // given an array of strings, return an array containing all string lengths
    // TODO: your work goes here
    // example: ["hello", "how", "are", "you", "doing?"] => [5, 3, 3, 3, 6]
  
  
  /*****************************  4  ***********************/
  // use filter to write the following functions
  
  function odds(nums) {
    return filter(nums,function(element,index){
      if(element%2===1){
        return element
      }
    })
  }
    // TODO: your work goes here
  
  function positives(nums) {
    return filter(nums,function(element){
      if(element>=0)
      return element;
    })}
    // TODO: your work goes here
  
  function negatives(nums) {
    return filter(nums,function(element){
    if(element<0)
    return element;
  })
    // TODO: your work goes here
  }
  function evenLength(nums) {
    return filter(nums,function(element){
      if(element.length%2===0)
      return element
    })
  }
    // TODO: your work goes here
  
  function largerThanSix(nums) {
    return filter(nums,function(element){
      if(element>6)
      return element
    })
  }
    // (given an array of numbers, returns those larger than 6)
    // TODO: your work goes here
  
  
  /*****************************  5  ***********************/
  // use reduce to write the following functions
  
  function sum(nums) {
    return  reduce(nums, f(acc,element){
      return acc =  acc+element
    }) 
  }
    // TODO: your work goes here
  
  
  function product(nums) { 
    return  reduce(nums, f(acc,element){
      return acc =  acc*element
    }) 
  }
    // TODO: your work goes here
  
  
  function allOdds(nums) {
    // returns true if all numbers in the array are odd, false if one of them is even
    // TODO: your work goes here
    // example: [1, 2, 3, 11] => false
    // [1, 3, 5, 11] => true
  }
  
  function squareSum(nums) {
    // TODO: your work goes here
  }
  // NOTE: the square sum function so that it squares each number passed into it and then sums the results together.
  // For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
  
  /*****************************  6  ***********************/
  // Write a function called map2 that accepts two arrays and a function as arguments, and constructs
  // a new array by invoking its function argument on the elements of both arrays, e.g.:
  
  //  map2([1, 2, 3], [4, 5, 6], function(a, b) {
  //        return a * b;
  //  });
  //  => [4, 10, 18]
  
  function map2(arr1, arr2, callback) {
    // TODO: your work goes here
  }