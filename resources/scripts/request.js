function justGunnaSendIt() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        req.responseText;
    }

    req.open("GET", "http://localhost:8080/APIDevAssessment/api/classroom/getAllClassrooms");

    req.send("Just gunna send it!");

    console.log(req);
}

justGunnaSendIt();