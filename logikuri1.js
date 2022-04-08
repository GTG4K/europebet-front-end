//დავალება 1

//ფუნქცია რომ განმეორებითი მნიშვნელობები წავშალოთ ცხრილიდან
var removeRepeats = function(array){
    let arrayLength = array.length;
    let uniqueArray = [];
    for(let i=0; i<arrayLength; i++){
        if(uniqueArray.indexOf(array[i]) === -1){
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

//string --> array
var stringToArray = function(string){
    let stringLength = string.length;
    let newArray = [];
    for(let i=0; i<stringLength; i++){
        newArray.push(string[i]);
    }
    return newArray;
}

//მთავარი ფუნქცია
var numJewelsInStones = function(jewels, stones) {

    //turn strings into arrays
    let jewelsArray = stringToArray(jewels);
    let stonesArray = stringToArray(stones);

    //remove repeating chars
    let uniquejewels = removeRepeats(jewelsArray);

    //calc array length
    let jewelsLength = uniquejewels.length;
    let stonesLength = stonesArray.length;

    //final jewel count
    let jewelsCount = 0;

    for(let i=0; i<jewelsLength; i++){
        for(let j=0; j<stonesLength; j++){
            if(uniquejewels[i] === stonesArray[j]){
                jewelsCount++;
            }
        }
    }

    return jewelsCount;
};

var jewels = 'abcdabccdab'
var stones = 'abCdeFghIjKlmnopa'

console.log(numJewelsInStones(jewels,stones));
