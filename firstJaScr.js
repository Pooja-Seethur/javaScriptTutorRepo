
//Always use let according to latest technology instead of var
//Declare each variable seperately in different line
//should be meaningful, descriptive
//cant start with a number, case Sensitive
//cant contain space or hyphen

/**Primitives or value type declarations (5 types)**/

let name = 'ganesha';   //string literal
let age = '1000';       //number literal
let approval = true;    //boolean literal
let some = undefined;
let someles = null;

 /* Reference types Objects, arrays and functions*/

/****************************************************
 * OBJECT LITERAL
 * to access values of object, use
 * 1)Dot notation       person.age      //preferred
 * 2)Bracket notation   person['age']
 ****************************************************/

let person = {
    nameOfPerson : "pooja",
    age : '1' 
}
//console.log(person);

/****************************************************
 * ARRAY LITERAL
 * array length is dynamic
 * Array object can be dynamic (any data type)
 * array.length returns length of array
 ****************************************************/

let cars = ['BMW', 'Porche'];
cars[2] = 'maruti800';
cars[3] = 3;
//console.log(cars);
//great('Ganesha');

/****************************************************
 * Functions
 * no need to add semicolon in the end, while declaring
 * name is paramter (declaration time), Ganesha is argument (supplied value)
 * 1)Performing function
 * 2)calucating a value  (returns something and can be assigned to a variable)
 *****************************************************/

function great(name){
    console.log('First function by ' + name);
}

/******************************************************
 * Js OBJECT ORIENTED APPROACH
 * Maintains the program decoupled and clean, efficient
 ******************************************************/

//normal conventional approach

let baseSalary = 1000;
let overTime = 10;
let rate = 20;

function getWage(){
    return baseSalary + (overTime * rate);
}

//Object oriented approach for same problem
//functions have fewer params in this approach

//encapsulation -- oop

/*When object has methods(functions) in it, it is not recommended to duplicate it,
when more methods are defined in an object, we say it has a behaviour like person*/

let employee = {
    baseSalary : 1000,                              //property
    overTime : 10,
    rate : 20,
    getWage: function(){                            //method - logical implementations
        return this.baseSalary + (this.overTime * this.rate);
    }
};

//console.log(employee.getWage());

//const employeeTwo = createEmployee(12000,5,6);
//console.log(employeeTwo);

/***************factory function***************/

function createEmployee(baseSalary,overTime,newrate){
    return {
        baseSalary,                                     //property
        overTime,                                       //in the es6, if key and value are same, no need to use ':'
        rate : newrate,                                 //also this method can be used
        getWage: function(){                            //method - logical implementations
            return baseSalary + (overTime * this.rate);
        }
    };
}

/****************Constructor function***************************************
 * Naming convention: uses upper case at start
 * similar to creating instance of a class
 * Few built in constructors in javascript are:
 * new Array();, new String(); new Boolean(); new Number(); new Function etc
 * **************************************************************************/

function CreateNewEmployee(baseSalary,overTime,newrate){
    console.log('this ' , this);
    this.baseSalary = baseSalary;                       //this refers to global object
    this.overTime = overTime;
    this.newrate = newrate;
    this.getWage = function(){
        console.log('Hi employee!');
    }
}

//const another = new CreateNewEmployee(3000,3,5);        //new operator will create an empty object, no need to return object in calling function

const empl = new Function('baseSalary','overTime','newrate',`
console.log('this ' , this);
    this.baseSalary = baseSalary;                       //this refers to global object
    this.overTime = overTime;
    this.newrate = newrate;
    this.getWage = function(){
        console.log('Hi employee!');}`
    );

const empo = new empl(12,12,12);