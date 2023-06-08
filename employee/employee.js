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

let logedinUser = JSON.parse(localStorage.getItem("logedinUser"));


function logoutfun(e){   
   localStorage.removeItem("logedinUser");   
}

let monthlyAttendenceReport = JSON.parse(localStorage.getItem("monthlyAttendence"));
console.log(monthlyAttendenceReport);
let monthlyDeparture = JSON.parse(localStorage.getItem("departuredEmployees"));
console.log(monthlyDeparture);
let logedInUser = JSON.parse(localStorage.getItem("logedinUser"));
console.log(logedInUser);

let thisUser = monthlyAttendenceReport.filter(e =>
    e.username == logedInUser.sendUserName,
    
);
console.log(thisUser);

let thisUserdeparture = monthlyDeparture.filter(e =>
    e.username == logedInUser.sendUserName,
    
);
console.log(thisUserdeparture);

 let selectedBody = document.getElementsByTagName("tbody")[0];
 selectedBody.setAttribute("id","bodyyuu");

for(let i = 0; i<thisUser.length ; i++){
    console.log(thisUser);
    let createdTr=document.createElement('tr');
    let createdTdOne = document.createElement('td');  
    createdTdOne.innerText = thisUser[i].date.split(",")[0];
    let createdTdTwo = document.createElement('td');  
    createdTdTwo.innerText = thisUser[i].date.split(",")[1];
    let createdTdThree = document.createElement('td');  
    createdTdThree.innerText = thisUserdeparture[i].date.split(",")[1];
    createdTr.appendChild(createdTdOne);
    createdTr.appendChild(createdTdTwo);
    createdTr.appendChild(createdTdThree);
    selectedBody.appendChild(createdTr);

}