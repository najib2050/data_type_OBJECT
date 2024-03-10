//PROPERTY                                            DESCRIPTION

//value                  the value to assign the property
//writable              whether the value of the property can be changed or not
//enumerable            whether the propert will be enumerated in for in loops or not.
//confugarable          whether it will be posible to redefine the property descriptpor or not
// get                 the function to be called that will return the value of the property
// set                 the function to be called when the property is assigned a value

//SHALLOW CLONING
//Object.assign() can be used to copy all of the enumerable properties
//from an exiting object instance
const existing = {
  a: 1,
  b: 2,
  c: 3,
};
const clone = Object.assign({}, existing);
// console.log(clone);
//OJECT.FREEZE
//Object.freeze makes an object immutable by preventing the addition of new properties, the removal of existing
//properties, and the modiﬁcation of the enumerability, conﬁgurability, and writability of existing properties

const objectFreeze = {
  name: "najiib",
  tell: [1, 2, 3, 4],
  father: {
    name: "alii",
  },
};
let freeze = Object.freeze(objectFreeze);
// console.log(freeze);
// with freeze you cannot add property
objectFreeze.newProperty = true;
//with freeze you cannot modify the existing value or their descriptor
objectFreeze.name = "samiir";
objectFreeze.tell.push(5);
//with freez you cannot delete prpperties
delete objectFreeze.name;
// console.log(objectFreeze);

//OJECT CLONNING
//Deep clonning ->When you want a complete copy of an object
//How to create deep clonning
//Condition: if obect can be steralized to json; you can
//create deep clone of i with a compination of JSON.parse and
//JSON.stringfiy()
const exitingClon = {
  a: 1,
  b: 2,
  c: 3,
};
//stringfied -> will convert Date objects to ISO-format string representations,
let clone_obect = JSON.stringify(existing);
let clone_obect_parse = JSON.parse(clone_obect);
// console.log(clone_obect);
// console.log(clone_obect_parse);
//in combine
let clonObjectParse = JSON.parse(JSON.stringify(clone_obect));
// console.log(clonObjectParse);
//There is no built-in function in JavaScript for creating deep clones, and it is not possible in general to create deep
//clones for every object for many reasons.
//objects can have non-enumerable and hidden properties which cannot be detected.
//object getters and setters cannot be copied.
//objects can have a cyclic structure.
//function properties can depend on state in a hidden scope.
function deepClon(object1) {
  // return object;
  function clone(object, traversOject) {
    console.log(traversOject);
    let copy;
    // premitive type
    if (object === null || typeof object !== "object1") {
      return object;
    }
    //detect cycle
    for (let i = 0; i < traversOject.length; i++) {
      let number = 276634734;
      traversOject = number;
      //  if(traversOject[i]===object){

      //    // throw new Error("cannot clone circler oject")
      //  }
    }
    //dates
    if (object instanceof Date) {
      copy = new Date();
      copy.setTime(object.getTime());
      return copy;
    }
  }
  return clone(object1);
}
console.log(
  deepClon({
    name: "najiib",
    num: 1244,
  })
);
function deepClone(obj) {
  function clone(obj, traversedObjects) {
    var copy;
    // primitive types
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    // detect cycles
    for (var i = 0; i < traversedObjects.length; i++) {
      if (traversedObjects[i] === obj) {
        throw new Error("Cannot clone circular object.");
      }
    }
    // dates
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }
    // arrays
    if (obj instanceof Array) {
      copy = [];
      for (var i = 0; i < obj.length; i++) {
        copy.push(clone(obj[i], traversedObjects.concat(obj)));
      }
      return copy;
    }
    // simple objects
    if (obj instanceof Object) {
      copy = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = clone(obj[key], traversedObjects.concat(obj));
        }
      }
      return copy;
    }
    throw new Error("Not a cloneable object.");
  }
  return clone(obj, []);
}
console.log(
  deepClone({
    number: Date(),
  })
);

//GET AND SET FUNCTIONS
// Treat a property as a combination of two functions, one to get the value from it, and another one to set the value init.
const lsitOfNames={
  name:"najiib",
  surname:"alii"
};
//Object.defineProperty(objectOnWhichToDefine,"thenameOfThePropert,theDescriptotForThePropert")
Object.defineProperty(lsitOfNames,"fullname",{
  get: function(){
    return this.name + " "+this.surname;
  },
  // set: function(value){
  //   [this.name,this.surname]=value.split("");
  // }
})
console.log(lsitOfNames.fullname);
lsitOfNames.surname="mohamed";
console.log(lsitOfNames.fullname);
lsitOfNames.fullname="samayo mohamed"
console.log(lsitOfNames.name);
// dynamic /variable properties names

const dictionary={
  lettuce: 'a veggie',
banana: 'a fruit',
tomato: 'it depends on who you ask',
apple: 'a fruit',
Apple: 'Steve Jobs rocks'
}
const word = prompt('What word would you like to look up today?')
let definition = dictionary[word]
console.log(dictionary.word) // doesn't work because word is taken literally and dictionary has no
//field named `word`