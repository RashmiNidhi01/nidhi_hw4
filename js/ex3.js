const values = [3, 11, 7, 2, 9, 10];
console.log(`array= ${values}`);
s=0;

for(i = 0; i < values.length; i += 1) 
   {
    s += values[i];
   }
   console.log('Sum of all array is: '+s ); 
   console.log('Minimum Value: ',Math.min(...values));
   console.log('Maximum Value: ',Math.max(...values));