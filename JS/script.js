// word V/S Keyword

// Uncle    for
// Bro      if
// sis      else

// var, const
    // variable V/S constants
    //   koi bhi data store karne ke liye variable use hota hai

    // const name="hariom";  (it is always same when we call name it will always give us the same value)
     var name="hariom";
    var age=20;
    console.log(name,age);
    var name="hari";
    console.log(name);

   // hoisting (variable and function ko upar le jata hai)
//var a;
   console.log(a);
   var a;
    a=20;
    //(Error nhi mila undefined mila kyuki variable ko upar le jata hai)

    //console.log(b); b is not defined (Error mila kyuki variable ko upar nahi le jata hai)


    //Type of Js
    //     1.Premitive                                        2. reference
    //   number,string,boolean,null,undefined                  [],{},()          
            // (jis value ka real copy hota hai) 
                                                    //  (Aisi koi bhi value jisko copy krne prr real copy nhi hota balki us main value ka ref pass hota hai usse ref value kahte hai)

// var a=12;
// var b=a;
// b=b+2;
// console.log(a,b)


// ref.  (We can't copy directly)
// var a=[3,4];
// var b=a;
// b.pop();
// console.log(a,b);

// Conditionls  (if,else,else-if)--(jb bhi baat agr mgr me aayegi)


// var a=20;
// if(a>18){
//     console.log("true")
// }
// elseif(a=18)
// {
//     console.log("both")

// }

// else{
//     console.log("false")
// }


// loops (repeat)
// 30 baar 1 2 3 4 ...30 print kro
// for(start;end;change)
for(var i=1;i<=30;i++){
console.log(i);
}
// var a=10;
// // while(a<=30){
// a++;
// // } Always Chalta rhta hai

// Functions (Mainly 3 kaam ke liye hota hai) **{Block of code}**
// 1.(jb apna code trurant nhi chalana hota future me chalana hota hai)
// 2.(jb apna code reuse krna hota hai)
// 3.(jb aap code chalana chate ho hrr baar diff. data)




 function abc(){
   console.log("Hello,Hariom") ;
 }
abc();
// Parameters :(jisme value store hoti hai Arguments wali)
function ac(a){
    console.log(a);
}
// Arguments :(Real value)
ac(15);


// Arrays :(more then 1 value we can store with same data type) :Group of value
var arr=[10,11,12,13,14,15]
//index 0-5
console.log (arr[0])
arr[1]
arr[5]

//push pop shift unshift
var array=[1,2,3];
array.push(4);
// array.pop(); (remove last elements)
array.unshift(0)// Start me ak value add krne ke liye
//array.shift()//Start se ak value hta me use krte hai

// use splice using index beech se koi bhi value remove krr sakte hai
// arr.splice(index,Kha tkk)

array.splice(3,1);

console.log(array);

//objects (akk se jada bande ki baat ki to hua arr, ekk bande ke baare me sari baat ki object):(akk invisual ki details ko hold krna)




