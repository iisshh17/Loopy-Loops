// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var Kalvian1 = "Aman";
console.log("The driver's name is "+ Kalvian1 + ".");

var Kalvian2 = "Anshul";
console.log("The navigator's name is "+ Kalvian2 + ".");

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if(Kalvian1.length>Kalvian2.length){
  console.log("The driver has the longest name, it has " + Kalvian1.length + " characters.")}

else if(Kalvian2.length>Kalvian1.length){
  console.log("It seems that the navigator has the longest name,"+ "it has "+Kalvian2.length + " characters.")
}

else{
  console.log("Wow, you both have equally long names," + Kalvian1.length + " characters!")
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 

function vowel(s){
  let vowels = "aeiou";
  let checkflag = false;
  let string = " ";
  let index = [];
  for(let i=0; i<s.length; i++){
    if(vowels.includes(s[i].toLowerCase())){
      checkflag = true;
      index.push(i);
      string += s[i];
    }
  }
  if(checkflag){
    var ans =s + string.split('').join(' ')+ " "+ index.join(' ');
    console.log(ans)
  }
  else{
    console.log("No vowels");
  }
}
vowel(Kalvian1)
vowel(Kalvian2);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters



function number(s){
  var count1 = 0;
  var count2 = 0;
  for(let i=0; i<s.length; i++){
   if(s[i] === s[i].toUpperCase()){
     count1++;
   }
   else{
     count2++;
   }
  }
  console.log(count1);
  console.log(count2);
  }
  number(Kalvian1);
  


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

let Capital = " ";
for(let i=0; i<Kalvian1.length;i++){
  Capital += Kalvian1[i].toUpperCase() + " ";
}
console.log(Capital)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

let reverse = " ";
for(let i=Kalvian2.length-1; i>=0; i--){
  reverse += Kalvian2[i];
}
console.log(reverse)

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

console.log(Kalvian1,Kalvian2)
console.log(Kalvian2,Kalvian1)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if(Kalvian1<Kalvian2){
  console.log("The driver's name goes first.")
}

else if(Kalvian1>Kalvian2){
  console.log("Yo, the navigator goes first definitely.")
}

else{
  console.log("What?! You both have the same name?")
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

var paragraph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eligendi vero delectus perferendis repudiandae doloribus, et magni a quasi nesciunt. Omnis ipsam possimus provident aspernatur optio repellat tempore distinctio officia?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, fugiat. Commodi ipsam porro tempore dignissimos dolorem qui veritatis quis? Error eos quasi alias sed dolore commodi magnam deserunt? Unde sunt sit quisquam dignissimos eius ducimus provident nesciunt perspiciatis odio reprehenderit!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus velit facilis commodi delectus quos eligendi. Vel deleniti earum ipsum.`

let count = 0;
let actualCount = 0;
for(let i=0; i<paragraph.length-1;i++){
  if(paragraph[i]==" "){
    actualCount++;
  }
  if(paragraph[i]==='e' && paragraph[i+1]==='t')
  count++;
}

console.log("Total no.of words: "+actualCount);
console.log("et words count: "+ count);


// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'


let para = "step on no pets"
let comma = "";
for(let i=0;i<para.length;i++){
  if(para[i]!=" "){
    comma += para[i];
  }
} 
comma = comma.toLowerCase()

let flag = true;
let b = comma.length-1;

for(let i=0; i<comma.length; i++){
  if(comma[i]!=comma[b-i]){
    flag = false;
    
    break;
  }
}
if(flag){
  console.log("Yes, it is a palindrome.")
}
else{
  console.log("It is not a palindrome.")
  }
