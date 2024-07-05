const palindromes = function (myString) {
    //let baseCase = true;
    
    noPunc = myString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    noSpace = noPunc.replace(/\s/g, '');
    noCaps = noSpace.toLowerCase();
    
    for(let i = 0; i < noCaps.length; i++){
        let start = i;
        let end = noCaps.length - (i+1);

        if(start >= end){
            return true;
        }

        if(noCaps[start] !== noCaps[end]){
            return false;
        }

    }
};

// Do not edit below this line
module.exports = palindromes;
