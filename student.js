import Comment from './comment.js'
class Student{

    constructor({
        name,
        email,
        username,
        twitter=undefined,
        instagram=undefined,
        facebook=undefined,
        aprovedCourses=[],
        learningPaths=[]
    }){
        this.name        = name;
        this.email       = email;
        this.username    = username;
        this.socialMedia ={
            twitter,
            instagram,
            facebook
        }
        this.aprovedCourses= aprovedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name
        });

        comment.publicar();
    }
}

export class FreeStudent extends Student {
    constructor(props){
        super(props)
    }

    approvedCourses(newCourse){
        if(newCourse.isFree){
            this.aprovedCourses.push(newCourse)
        }else{
            console.warn(`Lo sentimos, ${this.name} solo puedes tomar cursos abiertos`)
        }
    }
}

export class BasicStudent extends Student{
    constructor(props){
        super(props)
    }

    approvedCourses(newCourse){
        if(newCourse.lang!=="english"){
            this.aprovedCourses.push(newCourse)
        }else{
            console.warn(`Lo sentimos, ${this.name} no puedes tomar en inglés`)
        }
    }


}

export class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }

    aprovedCourses(newCourse){
        this.aprovedCourses.push(newCourse);
    }
}

export class TeacherStudent extends Student{
    constructor(props){
        super(props)
    }

    aprovedCourses(newCourse){
        this.aprovedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'profesor'
        });

        comment.publicar();
    }
}
