

// Map , Find , Filter apply to the Array 



const students = [

    {id:201 , age: 43 , Name: " Kamla"},
    {id:301 , age: 20 , Name: "Jamal"},
    {id:101 , age: 55, Name: "Tina"}

]

const names= students.map(names => names.Name) ; 

const id = students.filter(id => id.id===101)

// find option : 
 const ages= students.find( ages => ages.age>41) ; 


console.log(names);

console.log(ages);

console.log(id)