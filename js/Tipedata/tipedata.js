 let x = "nama";

 console.log(typeof(x)); //untuk mengembalikan nama tipedata 

 // number
 let h = 10;
 console.log(typeof(h));

 //incremen/Decrement

 let positifx = 9;
 console.log(positifx++);

 let prefix = 9;
 console.log(++prefix);

 //Array

 console.log("-Array");
 let myArray = ["Martabak",9,6,8,11,"Teranbulan"];
 console.log(myArray);
console.log(typeof(myArray[4]));
console.log("Panjang Nilai MyArray Adalah "+myArray.length)

//object 

console.log("-object");
let user = {
    fristname : "Khaerul",
    lastname : "ansari",
    age : 20,
    isMuggle : false,
    hobby : ["Coding","Volley Ball"]
}

console.log("Nama Saya " + user.fristname + " " + user.lastname);
console.log("Umur Saya " + user.age + " Tahun");
console.log("Hobbi Saya " + user.hobby[1]);


// IF ELSE

console.log("-statement If else");

let e = 50;
if( x > 70){
    console.log(e);
}else{
    console.log("Nilai Kurang Dari 70");
}

// fOR LOP
console.log("-For Loop");
const array = ["Khaerul","Ira","siti","Naba"];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
console.log("-Cara Gampang")
const arrayy = ["khaerul","Ansari","Naba"];
for(const arrayItem of arrayy){
    console.log(arrayItem);
}

//Function
console.log("--Function");

function coba(name, hoby){
    if( hoby === "Makan"){
        console.log("Good Morning " + name);
    }
    else if( hoby === "Volly Ball"){
        console.log("Hallo " + name +" Semangat Untuk Pertandingan " + hoby + " Anda");
    }
    else{
        console.log("Halo " + name);
    }
}

coba("Khaerul", "Volly Ball");


//Variabel global dan local 
console.log("-Variabel Global dan Local");

//fariabel Global
const a = 'a';

function parent(){
    const b = 'b';//fariabel local yang dapat di akses di parent dan child

    function child(){
        let c = 'c';//fariabel local yang hanya bisa diakses pada fungdi child
    }
}

//global local

function multyply(num){
    let total = num * num ; //defenisikan variabel maka akan jadi variabel local
    return total;
}

let total = 9;
let number = multyply(20);

console.log(total);
console.log(number);