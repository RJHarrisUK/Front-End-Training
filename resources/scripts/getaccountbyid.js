function getClassroomById() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        req.responseText;

    }
    let id = Number(document.getElementById("id").value);
    req.open("GET", "http://localhost:8080/APIDevAssessment/api/classroom/findClassroom/" + id);
    req.send();
    console.log(req);
}

function getAllClassrooms() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.responseText);
        for (let i of response) {
            console.log(i);
        }
    }

    req.open("GET", "http://localhost:8080/APIDevAssessment/api/classroom/getAllClassrooms");

    req.send("Get all classrooms");

}
