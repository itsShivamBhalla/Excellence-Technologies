// Define an array of numbers (use any random numbers). Write a program in Javascript to print only the even numbers of the array. Do not use any library functions, need to do via for loops only


import React from 'react'

function Question_1() {

    const arr = [1,2,3,4,5,6,7,8];
    var newArr=[];
    for( var i=0;i<arr.length;i++){
        if(arr[i]%2===0)
        {
            newArr.push(arr[i])   
        }
    }

    console.log(newArr);
    console.log(arr);
    
    return (
        <div>
        
            {
                newArr.map((value, id)=>{
                  return <p key={id}>{value}</p>
                })
            }
        </div>
    )
}

export default Question_1
