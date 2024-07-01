const repeatString = function(word, count) {
    if(count < 0){
        return "ERROR";
    }
    
    finalString = '';
    for(i = 0; i < count; i++){
        finalString = finalString.concat(word);
        //finalString += word;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
