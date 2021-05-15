// Let’s see we an api url www.example.com/api/get/1 
// Write a sample code to call this url via ajax and print its response


import React, { useEffect } from 'react'

function Question_7() {

    
    
    useEffect(() => {

        const apiCall = async () =>{
            const response = await fetch(`https://www.example.com/api/get/1`);
            const json = await response.json();
            console.log();
        }
        apiCall();
    }, []); //here we have to pass a condition in [] to hit api whenever we want else useEffect will only run once when app loads/compiles
  
    return (
     <div>This way we can call api</div>

    );
}

export default Question_7
