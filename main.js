
function isObject(subject){
    return typeof subject == "object"
}

function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject){
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if(subjectIsArray){

        copySubject = [];

    }else if(subjectIsObject){

        copySubject={};

    }else{

        return subject
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject){

            copySubject[key]= deepCopy(subject[key]);

        }else{
            if(subjectIsArray){
                copySubject.push(subject[key]);
            }else{
                copySubject[key] = subject[key];
            }
        }
    }


    return copySubject;
}





function requiredParam(param){
    throw new Error(param + " es obligatorio");
}

function LearningPath({
    name = requiredParam("name"),
    courses = [],

}){
    this.name = name;
    this.courses = courses;

    // const private = {
    //     "_name": name,
    //     "_courses": courses,
    // };


    // const public = {
    //     get name(){
    //         return private["_name"];
    //     },

    //     set name(newName){
    //         if(newName.length != 0){
    //             private["_name"] = newName;
    //         }else{
    //             console.warn("Tu nombre debe tener al menos 1 caracter");
    //         }
            
            
    //     },

    //     get courses(){
    //         return private["_courses"];
    //     },


    // };

    // return public;
}

function Student({
    name = requiredParam("name"),
    age,
    email = requiredParam("email"),
    twitter,
    instagram,
    facebook,
    aprovedCourses = [],
    learningPaths = [],
} = {}){

    this.name = name;
    this.email =email;
    this.age = age;
    this.aprovedCourses = aprovedCourses;
    this.learningPaths = learningPaths;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };

    const private = {
        "_learningPaths": [],
    }

    Object.defineProperty(this, "learningPaths",{
        get(){
            return private["_learningPaths"];
        },
    
        set(newLP){
            
    
            if(newLP instanceof LearningPath){
    
                private["_learningPaths"].push(newLP);
                
            }else{
                console.warn("Alguno de los LP no es una instancia del prototipo LearninPath");
            }
            
        }
    });



    for(learningPathIndex in learningPaths){

        this.learningPaths = learningPaths[learningPathIndex]

    }

    
}




const escuelaWeb = new LearningPath({
    name: "Escuela WebDev"
});

const escuelaData = new LearningPath({
    name: "Escuela Data Science"
});


const juan = new Student({
    name: "Juanito",
    email: "juaniyo@gmail.com",
    learningPaths:[
        escuelaWeb,
        escuelaData,

    ],
});


