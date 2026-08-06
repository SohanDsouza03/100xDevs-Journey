const obj = {
    name: "Sohan",
    surname: "Dsouza"
};

const jsonString = JSON.stringify(obj);
console.log(jsonString);

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name);

console.log(obj.hasOwnProperty("name"));

const updatedObject = { ...obj, roll: 1 };
console.log(updatedObject);

const obj1 = new Object();
const updatedObject2 = { ...updatedObject, class: 1 };
console.log(updatedObject2);