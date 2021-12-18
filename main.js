
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

function createLearningPath({
    name = requiredParam("name"),
    courses = [],

}){
    const private = {
        "_name": name,
        "_courses": courses,
    };

    const public = {
        get name(){
            return private["_name"];
        },

        set name(newName){
            if(newName.length != 0){
                private["_name"] = newName;
            }else{
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
            
            
        },

        get courses(){
            return private["_courses"];
        },


    };

    return public;
}

function createStudent({
    name = requiredParam("name"),
    age,
    email = requiredParam("email"),
    twitter,
    instagram,
    facebook,
    aprovedCourses = [],
    learningPaths = [],
} = {}){

    const private = {
        "_name": name,
        "_learningPaths": learningPaths,
    }
    const public = {
        age,
        email,
        aprovedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },




        get name(){
            return private["_name"];
        },

        set name(newName){
            if(newName.length != 0){
                private["_name"] = newName;
            }else{
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
            
            
        },

        get learningPaths(){
            return private["_learningPaths"];
        },

        set learningPaths(newLP){

            if(!newLP.name){
                console.warn("Tu LP no tiene nombre");
                return;
            }

            if(!newLP.courses){
                console.warn("Tu LP no tiene cursos");
                return;
            }

            if(!isArray(newLP.courses)){
                console.warn("Tu LP no wa una lista (*de cursos)");
                return;
            }

            private["_learningPaths"].push(newLP);

            
            
        },
    };


    return public;
};


const juan = createStudent({
    name: "Juanito",
    email: "juaniyo@gmail.com"
});


