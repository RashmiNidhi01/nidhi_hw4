const string = prompt('Enter a string: ');
function countVowel(str) { 
const count = str.match(/[aeiou]/gi).length;
    return count;
}
const result = countVowel(string);

function check_Palindrome(string){
        var ccount = 0;
        if ((string.length) % 2 === 0) {
            ccount = (string.length) / 2;
        } else {

            if (string.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
                ccount = (string.length - 1) / 2;
            }
        }

        for (var x = 0; x < ccount; x++) {
            if (string[x] != string.slice(-1-x)[0]) {
                console.log(`${string} contains ${result} vowels and is not a palindrome`);
                return false;
            }
        }
        console.log(`${string} contains ${result} vowels and is a palindrome`);;
        return true;
    }
   check_Palindrome(string);