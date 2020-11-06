let sentence1 = 'Uwielbiam JavaScript';
let sentence2 = 'Jestem świetnym programistą';

function string() {
    if (sentence1.length > sentence2.length) {
        result = sentence1;
    } else {
        result = sentence2;
    }
return result;
}

console.log(string());