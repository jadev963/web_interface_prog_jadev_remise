 let student = {
     id: 1,
     name:"Alice", 
     program:"Web developer", 
     semester: 3, 
     bio:"Love probramming"}

let courses = [
  { code: "WIP2", title: "Web Interface Programming 2" },
  { code: "AWP", title: "Advanced Programming" },
  { code: "DB2", title: "Database Management Systems 2" }
]

 const buttonStudent = document.getElementById("load-student-btn");
 const buttonCourse =  document.getElementById("load-course-btn");
 const buttonClear = document.getElementById("clear-btn");
 const paragStatus = document.getElementById("status");
 const studCont = document.getElementById("student-container");
 const coursCont = document.getElementById("courses-container");


function getStudentData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(student)
        }, 2000)
    })
}
function renderStudent(student){
    studCont.innerHTML = `
    <p>Name: ${student.name}</p>
    <p>Program: ${student.program}</p>
    <p>Semester: ${student.semester}</p>
    <p>Bio: ${student.bio}</p>
    `
    
}

buttonStudent.addEventListener("click", () =>{
    getStudentData()
    .then((student) =>{
        renderStudent(student)
    })
    .catch((error) =>{
        console.log(error)
    })
})

function getCoursesData(){

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(courses)
        },3000)
    })
}

function renderCourses(courses){
   let html = "";
   for(let i = 0; i < courses.length; i++){
    html += `<li>Code: ${courses[i].code} - Title: ${courses[i].title}</li>`
   }

   html += "<ul>";
   return coursCont.innerHTML = html;
}

buttonCourse.addEventListener("click", () =>{
    getCoursesData()
    .then((courses) =>{
        renderCourses(courses)
    })
    .catch((error) =>{
        console.log(error)
    })

    paragStatus.textContent = "Loading courses ...";

    getCoursesData()
    .then((courses) => {
        renderCourses(courses)
        paragStatus.textContent = "Courses Loaded"
    })
    .catch((error) =>{
        paragStatus.textContent = "Error loading courses!"
    })
})

buttonClear.addEventListener("click", () =>{
    coursCont.innerHTML = "";
    studCont.innerHTML = "";

    paragStatus.textContent = "Ready.";
})


 
