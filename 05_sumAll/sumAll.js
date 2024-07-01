const sumAll = function(start, end) {
    if(typeof start != "number" || typeof end != "number"){
        return "ERROR";
    }

    if(start < 0 || end < 0){
        return "ERROR";
    }

    if(start <= end){
        sum = 0;
        for(i = start; i <= end; i++){
            sum += i;
        }
    }else{
        sum = 0;
        for(i = end; i <= start; i++){
            sum += i;
        }
    }
    
    

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
