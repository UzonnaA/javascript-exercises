const removeFromArray = function(myArray, ...args) {
    // looping through the args
    for(i = 0; i < args.length; i++){
        // looping through the array
        for(j = 0; j < myArray.length; j++){
            // if the array finds an arg we need removed
            if(myArray[j] === args[i]){

                // delete the arg
                myArray.splice(j,1);

                //This is explained in the doc
                j -= 1;
            }
        }
    }
    return myArray;
    
};



// Do not edit below this line
module.exports = removeFromArray;
