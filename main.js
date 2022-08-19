import Course from './course.js';
import LearningPath from './learning-path.js';
import {FreeStudent, BasicStudent, TeacherStudent} from './student.js'


const cursoProgBasica = new Course({
    name:'Curso Gratis de Programación Básica',   
    isFree:true 
})

const cursoDefinitivoHTML = new Course({
    name: "Curso de Definitivo de HTML y CSS",
    lang:'english'
})

const escuelaWeb = new LearningPath({
    name:'Escuela de Desarrollo Web',
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML
    ]
});

const emilio = new FreeStudent(
    {
        name:"Emilio Senguana",
        username:"emilio",
        email: "emilio@gmail.com",
        twitter:'emilio.senguana2020',
        learningPaths:[
            escuelaWeb
        ]
    }
)

const freddy = new TeacherStudent(
    {
        name:"Freddy",
        username:"freddy",
        email: "freddy@gmail.com",
        twitter:'freddy.senguana2020',
        learningPaths:[
            escuelaWeb
        ]
    }
)

emilio.approvedCourses(cursoProgBasica)
console.log(freddy)
console.log(freddy.publicarComentario("Me gustó este curso"))
console.log(freddy.aprovedCourses)



