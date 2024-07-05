const findTheOldest = function(objList) {
    let oldestAge = 0;
    let oldestObject;

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    for(let i = 0; i < objList.length; i++){
        if(objList[i].yearOfDeath == undefined){
            objList[i].yearOfDeath = currentYear;
        }

        if(objList[i].yearOfDeath - objList[i].yearOfBirth > oldestAge){
            oldestAge = objList[i].yearOfDeath - objList[i].yearOfBirth;
            oldestObject = objList[i];
        }

    }

    return oldestObject;
};

// Do not edit below this line
module.exports = findTheOldest;
