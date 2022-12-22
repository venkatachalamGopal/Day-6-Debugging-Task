// Part 2 : Find the culprits and nail them — debugging javascript loops

// Write a code to print the numbers in the array

    var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var new_string='';
    for(let i=0;i<numsArr.length;i++){
    new_string+=numsArr[i];
    }
    console.log(new_string); // output=> 1234567891011



// Forward to backward
    const nos=[1,2,3,4,5,6,7,8,9,10,11]

    var new_string='';
    for(let i=0;i<nos.length;i++){
    if(i<10){
        new_string+=nos[i]+",";
    }
    else{
        new_string+=nos[i]
    }
    }
    console.log(new_string);// output=> 1,2,3,4,5,6,7,8,9,10,11

// Backward to Forward
    var new_string='';
    for(let i=11;i>=1;i--){
    if(i>1){
        new_string+=i+' ';
    }else{
        new_string+=i;
    }
    }
    console.log(new_string); // output=> 11 10 9 8 7 6 5 4 3 2 1

// Write a code to replace the array value — If the number is even, replace it with ‘even’.

    var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for (var i = 0; i <=10; i++) {
    if(numsArr[i] %2 == 0 )
    {
    numsArr[i] ='even';
    }
    }
    console.log(numsArr);// output=> [1, 'even', 3, 'even', 5, 'even', 7, 'even', 9, 'even', 11]


// Write a code to replace the array value — If the index is even, replace it with ‘even’.

    var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for (var i = 0; i <=10; i++) {
    if(i %2 == 0 )
    {
    numsArr[i] ='even';
    }
    }
    console.log(numsArr); // output=> ['even', 2, 'even', 4, 'even', 6, 'even', 8, 'even', 10, 'even']

// Write a code to add all the numbers in the array

    var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var sum=0;
    for(let i=0;i<=numsArr.length-1;i++){
    sum+=numsArr[i];

    }
    console.log(sum); // Output :66

// Write a code to add the even numbers only

    var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var sum=0;
    for(let i=0;i<numsArr.length;i++){
    if(i%2==0){
        sum+=numsArr[i]-1;
        console.log();
    }
    }
    console.log(sum); // Output => 30

// Write a code to add the even numbers and subract the odd numbers

    var sum=100;
    for(let i=0;i<numsArr.length;i++){
    if(numsArr[i]%2==0){
        sum+=numsArr[i];
    }
    else{
        sum-=numsArr[i];
    }
    }
    console.log(sum); // Output => 94

// Write a code to print inner arrays

    var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
    for (var i = 0; i <= numsArr.length-1; i++)
    {
    console.log( numsArr[i])
    }

// Write a code to print elements in the inner arrays-Output: 1234567891011

    var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
    var str_all='';
    for (var i = 0; i < numsArr.length; i++) {
    var innerArr = numsArr[i];
    console.log(innerArr); 
    for(j=0;j<innerArr.length;j++){
    str_all+=innerArr[j];
    }

    }
    console.log(str_all); // Output: 1234567891011

// Write a code to replace the array value — If the index is even, replace it with ‘even’.

    var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];

    for(let i=0;i<numsArr.length;i++){
    var innerArr=numsArr[i];
    for(j=0;j<innerArr.length;j++){
    if(innerArr[j]%2!=0){
    innerArr[j]='even'
    // console.log(innerArr);
    }
    }
    }
    console.log(numsArr);

// Write a code to print elements in the inner arrays in reverse -Output: 11 10 9 8 7 6 5 4 3 2 1

    var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
    var str_all='';
    for (var i = 1;i>=0;i--) {
        var innerArr = numsArr[i];
        console.log(innerArr); 
        for(j=innerArr.length-1;j>=0;j--){
        str_all+=innerArr[j]+' ';
        }
            }
        console.log(str_all); // output : 11 10 9 8 7 6 5 4 3 2 1 

// Write a code to add elements in the inner arrays based on odd or even values
        var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
        var sumodd=0;
        var sumeven=0;
        for(let i=0;i<numsArr.length;i++){
        var innerArr=numsArr[i]
        for(let j=0;j<innerArr.length;j++){
            if(innerArr[j]%2==0){
                sumeven+=innerArr[j]
            }else{
                sumodd+=innerArr[j]
            }

        }
        }
        console.log(sumodd);
        console.log(sumeven);
        
       
