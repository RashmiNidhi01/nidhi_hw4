const list=[];
let word=prompt('Enter the word: ');

if(word.toLowerCase()=='stop'){
    console.log('No words to display, Stop was the first word entered.');
}

while(word.toLowerCase()!='stop'){
    list.push(word);
    word=prompt('Enter your word: ');
    
   
}

for (let i=0; i<list.length;i++){
    console.log('You entered the following words:'); 
    console.log(list[i]);
}