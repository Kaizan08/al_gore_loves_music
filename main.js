function rockOut(instructions) { 
    var output;
    var result = [];
    for (var i = 0; i<instructions.length; i++){
        output = "";
        
        switch (instructions[i].replace('_', '').replace('^', '')){
            case '|||||||':
                output = output + 'G';
                break;
            case '||||||':
                output = output + 'F';
                break;
            case '|||||':
                output = output + 'E';
                break;
            case '||||':
                output = output + 'D';
                break;
            case '|||':
                output = output + 'C';
                break;
            case '||':
                output = output + 'B';
                break;
            case '|':
                output = output + 'A';
                break;
        } 
        if (instructions[i].includes('_')){
            output = output + ' flat';
        } else if (instructions[i].includes('^')){
            output = output + ' sharp'
        }
        result.push(output);
    }
    // Implement your algorithm here // make sure it returns a formatted string 
    result = result.toString();
    output = '';
    for (var j = 0; j < result.length; j++){
        if (result[j] == ','){
            output = output + ' ';
        } else {
            output = output + result[j];
        }
    }
    return output;
}

console.assert(rockOut(["|_", "||||", "||^"]) === "A flat D B sharp"); console.assert(rockOut(["||||||^", "||||||^"]) === "F sharp F sharp"); console.assert(rockOut(["|||_", "|||||||", "|||||"]) === "C flat G E");