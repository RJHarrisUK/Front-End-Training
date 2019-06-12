
// READ - Get specific classroom (working)
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
// READ - Get all classrooms (working)
// function getAllClassrooms() {
// let req = new XMLHttpRequest();

// req.onload = function () {
//     let response = JSON.parse(req.responseText);
//     for (let i of response) {
//         console.log(i);
//     }
// }
// req.open("GET", "http://localhost:8080/APIDevAssessment/api/classroom/getAllClassrooms");
// req.send("Get All Classrooms");
// console.log(req);
// }
// CREATE - Create a classroom (working)
function createClassroom() {
    let trainer = { trainer: document.getElementById("trainer").value }
    let req = new XMLHttpRequest();

    req.onload = function () {
        console.log(req.responseText);
    }
    req.open("POST", "http://localhost:8080/APIDevAssessment/api/classroom/createClassroom");
    req.send(JSON.stringify(trainer));
}
// UPDATE - Update a classroom (working)
function updateClassroom() {
    let trainer = { trainer: document.getElementById("trainer").value }
    let req = new XMLHttpRequest();

    req.onload = function () {
        console.log(req.responseText);
    }
    let id = Number(document.getElementById("id").value);
    req.open("PUT", "http://localhost:8080/APIDevAssessment/api/classroom/updateClassroom/" + id);
    req.send(JSON.stringify(trainer));

    console.log(req);
}
// DELETE - Delete a classroom (working)
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


const multi = (url, method, body) => {

    return new Promise(function (res, rej) {
        const req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status === 200) {
                res(req);
            } else {
                const reason = new Error('Rejected');
                rej(reason);
            }
        }
        req.open(url, method)
        req.send(body);
    }
    );
}
function getAllClassrooms() {

    multi("GET", "http://localhost:8080/APIDevAssessment/api/classroom/getAllClassrooms").then(function (req) {
        let response = JSON.parse(req.responseText);
        for (let i of response) {
            console.log(i);
        }
    }, function () { });

}