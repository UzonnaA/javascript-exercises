const reverseString = function(word) {
    word_length = word.length;
    newWord = '';

    for(i = word_length - 1; i >= 0; i--){
        newWord += word.at(i);
    }

    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
