const str = ' have fun'; //split the above string into an array of strings 

const arr = str.split(" "); //loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const str2 = arr.join(" ");
console.log(str2);



// Calculate your age.


function calculate_age(date_of_birth) {
    var age = Date.now() - date_of_birth.getTime();
    var age_dt = new Date(age);

    return Math.abs(age_dt.getUTCFullYear() - 2021);
}

console.log(calculate_age(new Date(1994, 11, 4)));


for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is 2");
    }
    else if (x % 2 === 0) {
            console.log(x + " is 2");
    }
    else {
            console.log(x + " is 1");
    }
}

// 7) Display all multiple of 3 numbers in the range 0 - 40.


for (x=1; x <= 40; x++){
    if( x % 3 == 0 ){
        console.log(x)
    }
}
// 6)Pass in 2 numbers, and print the sum. 

function sum(x, y) {
      return (x + y);
     }

  console.log(sum(2, 6));


//   (ii) Validate if a number is in the range of 0 - 15.

  function numbers_ranges(x, y) {
    if ((x >= 0 && x <= 15 && y >= 0 && y <= 15))
       {
      return true;
       }
      else
       {
      return false;
    }
  }

  console.log(numbers_ranges(4, 5));
  console.log(numbers_ranges(2, 9));
  console.log(numbers_ranges(50, 89));

//   (iii) Using the same code above, allow the possibility of entering a value aside from  numbers and prompt a response. 
