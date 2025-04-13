


// console.log(10+20);

// les variables 

let prenom="karim"
prenom="samir"


// constantes

const PI=3.18391739;





// Data Types




// String 

let ville="CASABLANCa"


// Number

let age=20;

let salary = 208090.0282;


// Boolean 


let test=false;

// null

let clients=null;





// Les opérateurs


// Arith

// addition +  soustraction - multiplication * division /  modulo %

let addition=10+20;
let sous=20-5;

let multi=10*10


let division = 10/5;

let modulo = 10%3

console.log(addition)
console.log(sous)
console.log(multi)
console.log(division)

console.log(modulo)


// Comparaison < >  <= >= == === != 

let num1 = "20";


let num2=20;


console.log(num1 !== num2);
// logique

// && (et) || (ou)

let test2=12>10 && 20<20   // true &&  false

//  true && false = false

//  true && true = true 

//  false && true = false 

// false && false = false 

// console.log(PI);



// OR ||

let test3= 12==10 || 12==13 // false  || false 


/*
true || true = true 

true || false = true 

false || true = true 

false || false = false 


*/



let a=10;
let b=5;
let c=10*2;


let test5= a+b>=15 && c+b !=25; // true && false =false c
let test6= c%5+4 >=3+4 || b*2!=a-a+10 && "samir"=="Samir"
let test7=  b+b*2-a+5 !=10  ||  c*2==30+b*2 && c%2+2==2
 
// false   || true  = true   



// console.log(test5)




// Les
//  conditions  if


// let username="kari";
// let password="karim123";


// if(username== "karim" && password=="karim123"){
//     console.log("user connected")
// }else{
//     console.log("User not found");
// }


// if(userage>18){
//     console.log("Adulte");
// }else{
//     console.log("Mineur");
// }





let jour=20;


if(jour==1){
    console.log("lundi");
}else if(jour==2){
    console.log("mardi")
}else if(jour ==3){
console.log("mercredi");

}else if(jour==4){
    console.log("Jeudi");
    
}else if(jour==5){
    console.log("Vendredi");

}else if(jour==6){
    console.log("Samedi ");
    
}else if(jour==7){
    console.log("Dimanche")
}else{
    console.log("jour invalide ")
}





// 
 for(let i=0;i<5;i++){
console.log("Bonjour ",i)
 }


 // i=0  0<5 1 Bonjour
 
 // i=1 1<5  2 Bonjour
 // i=2 2<5  3 Bonjour 
 // i=3 3<5  4 Bonjour 

 // i=4 4<5  5 Bonjour
 


// while(condition){
//     console.log("hello");
// }



// tableaux 



let villeDuMaroc=["casa","Rabat","Fes","Eljadida","TEMARA","SAFE","AGADIR"]

// Read Lire
console.log(villeDuMaroc[villeDuMaroc.length-1]);

villeDuMaroc[1]="MEKNES";
console.log(villeDuMaroc.length);

console.log(villeDuMaroc.includes("SAFE"))




// Object

let etudiants2=[9137197,"Karimi","Samir","Web developpement",20]

let etudiant ={
    id:9137197,
    nom:"Karimi",
    prenom:"Samir",
    formation:"Web developpement ",
    age:20
}

// Read Lire
console.log(etudiant.formation)

// Write Modifier


etudiant.formation="Marketing digital";
etudiant.age=30


// Delete Supprimer

delete etudiant.prenom
console.log(etudiant)




// let num5=10;
// let num6=2;
// console.log(num5+num6)


// let num7=11;
// let num8=3;
// console.log(num7+num8) 


// 1ére Declrarer La fonction

function Add(num1,num2){
    console.log(num1+num2);
}


function Soustraction(num1,num2){
    console.log(num1-num2)
}
function Multiplication(num1,num2){
    console.log(num1*num2)
}
function Division(num1,num2){

    if(num2==0){
        console.log("Impossible de diviser sur 0")
    }else{

        console.log(num1/num2)
    }
}


// Appeler La fonction 


Add(10,20)


Soustraction(10,10)
Multiplication(10,8)


Division(20,10)






























