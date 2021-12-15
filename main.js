const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
}


// console.log(Object.keys(juan)); 

// console.log(Object.getOwnPropertyNames(juan)); 

// console.log(Object.entries(juan)); 



//Aqui vamos a añadir nuevas propiedades a nuestro objeto juan

// Object.defineProperty(juan,"navigator", {
//     value: "Chrome",
//     writable: true,
//     enumerable: false,
//     configurable:true,
// });



//El configurable se pone false y evita que la eliminemos
//Object.seal(juan);

// El writable y configurable se ponen en false, lo que impide que las editemos o eliminemos
Object.freeze(juan);


console.log(Object.getOwnPropertyDescriptors(juan));