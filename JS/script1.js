//var (es-5 old js, function scoped, adds itself to window object),let,const (es6 new js,breaces scoped ({}),doesn't adds)   (diffrance b/w all 3)

// (js lan. me kuchh cheeze mhi h jo hm use krte hai vo cheeze hme js se nhi browser se milte hai , aise sare features jo js ka ppart nhi h prr hum use krte h ya dood sakte hai ak pirticular object me jiska name hai window)
//window: box of features given by browser.
//ex- alert,consol,prompt   ,atob,blur etc.

// browser contex api : give you 3 things window, stack,Heap memory (add window object)here.
//stack: follow LIFO property
// Heap Memory: jitne var, data (intermidiate data) hum banate hai unnhe store to krna pdta hai uske liye hota hai heap memory

//Execution contex : jbb hum func chalayege to func khud ka imeginory container bna lega jisme 3 cheeze hogi 1) var 2) func inside that parent func 3) lexical enviorment (  fun. kise axis krr sakta hai kisse nhi)of that func  isse execution contex kahte hai

function abcd(){
    var a=12;
    function def(){
        var b=12;
    }
}

abcd();

//Execution contex is container where the func's code is executed and it is always created when the func is called it contains 3 thing 1 variables 2 func 3. lexical env.

// lexical env. hota hai chart jisme likha hota hai aapka pirticular fun inn cheezo ko axis krr sakta hai iskp nhi mtlb ki it holds it's scope and scope chain

// How to copy ref value
var a=[1,2,3,4,5];
var b=[...a]//...sparate operator
b.pop();
console.log(a,b);

var obj={name:"Hariom"};
var copyobj ={...obj}

console.log(obj,copyobj);

//truthy and falsey
//js me kuchh bhi liko vo mainly do prakar mainse kisi ak prakar ko belog krti hai
// falsy value = 0 false undefined null not a num  document.all other than truthy
if(7){
    console.log("hy");
}
else{
    console.log(hello);
}
// truthy

// if(0){
//     console.log("hy");
// }
// else{
//     console.log(hello);
// }
// Falsy

// Switch
// switch(1){
//     case 1:
//         break;
//         case 2:
//             break;
//             default:
// }

// foreach forin forof dowhile
// forEach: ye loop sirf array me chalta hai matlb ki jbb hmare pass array ho tbb hum use krte hai foreach loop

var a=[1,2,23,34,4,23,4,3,45,54,3,23];
a.forEach(function(val){
    console.log(val+2);
})
// forEach kabhi bhi by default hmare aaray me change nhi krta Wo hame vchanges krke deta hai aayray ki temprery copy prr jiski vajah se array hamesha same rhta hai

// forin : object prr loop krne ke liye hota hai
var obj={
    name:"Hari",
    branch:"MAC",
    year:2
}
for(var key in obj){
    //console.log(obj);
    console.log(key,obj[key]);

}

//dowhile loop : altest 1 time run
// var a=12;
// do{
//     console.log(hey);
//   a++;
// }
// while(a<15);

//callback funcs
//jb bhi koi aisa code jo baad me chalta hai aap likhoge, kyuki wo code baad me chalta hai js ko ye pta nhi hota ke wo code complete hua ya nhi aisa code ke completiin pr js ko bataya jata hai ki wo ho gya hai aap usse cha sakte ho  ye batane ka kaam callbackfuc krta hai
setTimeout(function(){
console.log("2 Sec. baad chalao");
},2000);

// What is a firstclass func : js me ak concept hota hai jiska matlb hota hai ki aap fnc ko use krr sakte ho as a value
// var a = function(){};
// function abcd(a){
// a();
// }
// abcd(function (){console.log("Hii");})

// How arrays are made behind the scenes
var array =[1,2,3,4,5]
//array = {
    // 0:1,
    // 1:2,
    // 2:3,
    // 3:4
    // 4:5
// }
// Agar aarray hota
array [-1]=2;
console.log(typeof []);
console.log(array);
console.log(Array.isArray([]));

// How to delete obj prop
var a={
    name:"Hari",
    year:2
}
console.log(a);
//delete a.age;
console.log(a);

