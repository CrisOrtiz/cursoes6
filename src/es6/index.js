/*PARAMETROS*/
function newFunction(name, age, country){
    var name = name || 'default';
    var age = age || 0;
    var country = country || 'default Country';
    console.log(name, age, country);
}
newFunction();

//es6
function newFunction2(name = 'default', age = 0, country = 'default country'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'Colombia') ;

/*CONCATENACION*/ 
let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

 /*DESTRUCTURACION DE ELEMENTOS*/
 let person = {
     'name': 'cristhian',
     'age': 25,
     'country': 'BOL'
 }

 console.log(person.name, person.age, person.country);

 let{ name, age} = person;
 console.log(name, age);

/*OPERADORES DE PROPAGACION*/
let team1 = ['Cris', 'Valeria','Rocio'];
let team2 = ['Ibett', 'Maya', 'Mica'];
//es6, esto muestra como es6 permite hacer esto ahora, incluir valores al arreglo y juntar arreglos

let bigTeam = ['Rodri', ...team1, ...team2]; //añade a rodri y junta los calores de team1 y team2

console.log(bigTeam);

/*LET Y CONST*/
{
    var globalVar = 'Global Var'; //Esta variable esta disponible en todo el documento
}

{
    let globalLet = 'Global Let'; //Esta variable solo esta disponible destro del scope o loque donde se encuentra
    console.log(globalLet); // se la puede manejar a let dentro de su bloque o scope
}
console.log(globalVar);
// console.log(globalLet); --> si ponemos aca no funcionara por que let se queda en su scope  o bloque

/*PROPIEDAD DE OBJETOS MEJORADA*/
let name = 'Cris';
let age = 25;

obj = {name: name, age: age};

//es6
obj2 = {name, age}; //aqui ya no debemos definirle nombres de atributos adopta los nombres solo
 console.log(obj2);

/*Arrow Functions!!!!*/
//ya no se nesecita llaves y ni generar returns en las funciones
const names = [
    { name: 'Cris',age:25 },
    { name:'Yessica', age:27 }
];

let listOfNames = names.map(function(item){
    console.log(item.name);
}
);

//es6

//en vez de pasar el elemento asignamos directamente item y lo que hara la funcion
let lisOfNames2 = names.map(item => console.log( item.name ));

//podemos pasar parametros a una funcion anonima definida por la arroy function
const listOfNames3 = (name, age, country) => {

};

//si no pasaremos varios elementos se lo pasa directamente, en este caso solo pasamos name
const lisOfNames4 = name =>{

};

//podemos pasarle un valor y directamente operamos ya que => indica que es funcion y num esta llegando
const square = num => num * num; 

/*PROMESAS*/
//es6
//esta es de 3s6, es para trabajar con asincronismo 
//ya que JS no ejecuta 2 funciones a la vez, lo que hace es
//enviar la peticion a por ejemplo una API y cuando se ejecute 
//devolver la respuesta, es decir como que se pone en espera de la resolucion de la peticion.
const helloPromise = () =>{
    return new Promise((resolve, reject) => {
        if(false){
            resolve('hey!');
        }else{
            reject('Upss!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

/*CLASES*/ 
//es6
//para poder usar la POO
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    //usando funcion normal
    sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    
    //usando funciones flecha
    sumar2 = (valA, valB) => valA + valB; 

}

const calc = new calculator();
console.log(calc.sumar(2, 2));
console.log(calc.sumar2(2, 2));

/*MODULOS*/ 
//es6
//Sirve para separar nuestra logica en diferentes archivos de js
//y asi poder tener logicas independietes apra dieferentes tareas
//y ser usados en el js principal u otro donde se importeb

import  { hello } from './module.js';

hello();

/*GENERATORS*/
// es un tipo de funcion especial que guarda estados dede su ultima 
//ejecucion, es decir que ejecutara la siguiente logica o scope que contenga 
//cada ves que es llamada
function* helloWorld(){
    //(Scope 1)
    if(true){
        yield 'Hello, ';
    }
    //(Scope 2)
    if(true){
        yield 'world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);// ejecutara (Scope 1)
console.log(generatorHello.next().value);//ejecutara (Scope 2)
console.log(generatorHello.next().value);// como no hay mas saldra undefined por queno existe scope