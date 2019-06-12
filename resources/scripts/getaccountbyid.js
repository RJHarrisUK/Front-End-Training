
// READ - Get specific classroom (working - returns object)
function getClassroomById() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.responseText);
        console.log(response);
    }
    let id = Number(document.getElementById("id").value);
    req.open("GET", "http://localhost:8080/APIDevAssessment/api/classroom/findClassroom/" + id);
    req.send();

    console.log(req);
}
// READ - Get all classrooms (working - returns object)
function getAllClassrooms() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.responseText);
        for (let i of response) {
            console.log(i);
        }
    }
    req.open("GET", "http://localhost:8080/APIDevAssessment/api/classroom/getAllClassrooms");
    req.send("Get All Classrooms");
    console.log(req);
}
// CREATE - Create a classroom (working - returns message)
function createClassroom() {
    let trainer = { trainer: document.getElementById("trainer").value }
    let req = new XMLHttpRequest();

    req.onload = function () {
        console.log(req.responseText);
    }
    req.open("POST", "http://localhost:8080/APIDevAssessment/api/classroom/createClassroom");
    req.send(JSON.stringify(trainer));
}
// UPDATE - Update a classroom (not built yet)
function updateClassroom() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.responseText);
        console.log(response);
    }
    let id = Number(document.getElementById("id").value);
    req.open("PUT", "http://localhost:8080/APIDevAssessment/api/classroom/updateClassroom/" + id);
    req.send();

    console.log(req);
}
// DELETE - Delete a classroom (working - returns message)
function deleteClassroom() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.responseText);
        console.log(response);
    }
    let id = Number(document.getElementById("id").value);
    req.open("DELETE", "http://localhost:8080/APIDevAssessment/api/classroom/deleteClassroom/" + id);
    req.send();

    console.log(req);
}
