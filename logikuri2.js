var isValid = function(s){
    var sLength = s.length;

    // ({})

    for(let i = 0; i < sLength; i++){
        if(s[i] == '('){
            var lookFor = ')';
        }
        else if (s[i] == '{'){
            var lookFor = '}';
        }
        else if (s[i] == '['){
            var lookFor = ']';
        }
        if(s[i]==')' || s[i]==']' || s[i]=='}'){
            continue;
        }

        var countDistance = 0;
        var distance = -1;
        var open = 0;

        for(let j = 0; j < sLength; j++){
            if(s[j] == s[i]){
                open++;
                countDistance = 1
            }
            if(countDistance == 1){
                distance++;
            }
            if(s[j] == lookFor){
                open--;
                if(open == 0){
                    distance--;
                    countDistance = 0;
                }
            }
            console.log('current distance - ' + distance + " : current open - " + open + ": current loop - " + j + ":Current char - " + s[j]);
            if(j == sLength-1){
                console.log('shevedit, open = '+ open +', distance - '+ distance);
                if(open != 0){
                    return 'false'
                }
                if(open == 0 && distance%2 != 0){
                    return 'false'
                }
            }
        }
    }

    return 'true'
}


console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('({)}'));


//