// Find the maximum consecutive 1's in an array of 0's and 1's.
// Example:
// a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]

import React from 'react'

function Question_2() {

    const arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,0];
    
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i<arr.length; i++) {
        if (arr[i] === 0) {
            count = 0;
        } else {
            count++;
        };
        if (count > maxCount) maxCount = count;
    };
   console.log(maxCount);

    return (
        <div>
          <p>{maxCount}</p>
        </div>
    )
}

export default Question_2
