const company = {
    name: "devzone-It",
    ceo:{
        name: "ali-shorif",
        food: "dal-vat",
    },

    technology:{
        first:'javascript',
        second: 'React',
        third:'next.js',
        backend:"node and express",
        upcoming: {
            recent:"Typescript",
            validation:"Mongoes",
            more:"zod"
        }
    },
    age: 12,
    future: 'just growth'
    
}
// console.log(company);
// console.log(company.technology.backend);
//optional chaining es6, using ? on object . it will not crush the website, it will show undefined
//console.log(company?.technology?.third);
//object distructuring 
const {name, future, age, ceo,technology } = company;
console.log(`This is object distructing,create the object first, then declare object's key is equal to whole object name. declare console.log with object key : it will print the value of the object. 
     `+(name,technology.backend));

//changing object key's value


const school = {
    name: "eshikhon",
    future:"just growth",
    age: 12,
}
Object.seal(school)
school.future ='bright'
delete school.age;
console.log(school);


//fixed object, nobody can't change the object value, we can use object.freeze(object name)

const schoolName = {
    name: "eshikhon",
    future:"just growth",
    age: 12,
}
Object.freeze(school)
school.future ='bright'
console.log(` By using object.freeze(objectname), you cant modify the object. it becomes final `+schoolName);
