fetch('/header&footer/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
        document.getElementById("homepage").href = "/employee/employee.html";

    });

fetch('/header&footer/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });

let monthlyAttendenceReport = JSON.parse(localStorage.getItem("monthlyAttendence"));
console.log(monthlyAttendenceReport);
let monthlyDeparture = JSON.parse(localStorage.getItem("departuredEmployees"));
console.log(monthlyDeparture);

let selectedBody = document.getElementsByTagName("tbody")[0];
for(let i = 0; i<monthlyDeparture.length ; i++){
    console.log(monthlyDeparture);
    let createdTr=document.createElement('tr');
    let createdTd = document.createElement('td');  
    createdTd.innerText = monthlyAttendenceReport[i].username;
    let createdTdOne = document.createElement('td');  
    createdTdOne.innerText = monthlyAttendenceReport[i].date.split(",")[0];
    let createdTdTwo = document.createElement('td');  
    createdTdTwo.innerText = monthlyAttendenceReport[i].date.split(",")[1];
    let createdTdThree = document.createElement('td');  
    createdTdThree.innerText = monthlyDeparture[i].date.split(",")[1];
    // if( monthlyDeparture[i].date.split(",")[1]==undefined){
    //     createdTdThree.innerText = "Have not signed departure yet";
        
    // }else{
    //     createdTdThree.innerText = monthlyDeparture[i].date.split(",")[1];
    // }
    createdTr.appendChild(createdTd);
    createdTr.appendChild(createdTdOne);
    createdTr.appendChild(createdTdTwo);
    createdTr.appendChild(createdTdThree);
    selectedBody.appendChild(createdTr);

}