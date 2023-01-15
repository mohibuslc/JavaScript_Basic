// d-Stracture ..
const complexObject = {
  name: "Kamal",

  info: {
    Phone: " 01717191467 ",
    address: "Tillaghore",
  },
};

const { address } = complexObject.info;

console.log(address);

// 

const persone ={ name: 'Kamal' , age : 43 , Phone:'01717191467' , address:'Tillaghore', friend:['Jamal', 'Tina'], Job:'Web-development'} 

const{name , age , Phone} = persone ; 
console.log(name , age , Phone);
