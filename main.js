let sentence1 = 'Uwielbiam JavaScript';
let sentence2 = 'Jestem świetnym programistą';

function string(x, y) {
    if (x.length > y.length) {
        result = x;
    } else {
        result = y;
    }
return result;
}

console.log(string(sentence1, sentence2));