// Fix the code to get the largest of three.

    const aa=(f,s,t)=>{
    if(f>s&&f>t){
        console.log(f);
    }else if(s>t&&s>t){
        console.log(s);
    }else{
        console.log("Largest No -",t);
    }
    }
    aa(20,45,78); //largest no-78

// Fix the code to Sum of the digits present in the number

    let n="123";
    var sum=100;
    function add(n){
    for(let i=0;i<n.length;i++){
        sum+=parseInt(n[i]);
    }
    return sum
    }
    let value=add(n)
    console.log(value); //ouput 106

// Fix the code to Sum of all numbers using IIFE function

    let ans=(function(arr){
        console.log(arr);
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i]
        }
        return sum;

    })([9,8,5,6,4,3,2,1])
    console.log(ans); // output - 38

// Fix the code to gen Title caps.

    var caps=function(arr){
    console.log(arr);
    for(let i=0;i<arr.length;i++){
    console.log(arr[i][0].toUpperCase()+ arr[i].substr(1));
    }

    }
    caps(['guvi','geek','zen','fullstack']); 
            // ouput => Guvi
                    // Geek
                    // Zen
                    // Fullstack

// print all odd numbers in an array using IIFE function
     
    (function(arr){
    for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        console.log(arr[i]);  // output => 1,3,5,7,79,7,9
    }
    }
    })( [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4]);

// Fix the code to reverse.
    
    (function(str){
        console.log(str.split("").reverse().join(''));
    })("abcd"); // output => dcba

// Fix the code to remove duplicates from Array .


    var arr = ['guvi','geek','guvi','duplicate','geek'];

    function removeDuplicates(arr) {
    var unique = [];
    for(i=0; i < arr.length; i++){  
        if(unique.indexOf(arr[i]) === -1) {  
            unique.push(arr[i]);  
        }  
    }
    return unique;
    }
    console.log(removeDuplicates(arr)); // ouptut=> ['guvi', 'geek', 'duplicate']

// Sum of odd numbers in an array

    var as=[12,34,5,6,2,56,6,2,1];
    as.reduce(function(acc,curr){
        if(as[i]%2!=0){
            return acc
        }
        else{
            console.log(curr+acc); // output => 12
        }

    },0)


    


  