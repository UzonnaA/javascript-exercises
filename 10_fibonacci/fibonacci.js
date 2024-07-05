const fibonacci = function(num) {
    let arr = [1,1];

    if(num < 0){
        return "OOPS";
    }

    if(num == 0){
        return 0;
    }

    if(num > 2){
        for(let i = 2; i < num; i++){
            arr.push( (arr[i-1]) + (arr[i-2]) );
            //console.log(arr)
        }
    }

    return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
