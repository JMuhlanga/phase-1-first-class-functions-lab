// Code your solution in this file!
const returnFirstTwoDrivers = (someArray) => { 
    return someArray.slice(0,2);
}

const returnLastTwoDrivers = (someArray) => {
    return someArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = (someValue1) => {
    return function(someValue2){
        return someValue1 * someValue2 ; 
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (someArray , someFunction) => {
    return someFunction(someArray);
}




