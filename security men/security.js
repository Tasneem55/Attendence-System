fetch('/header&footer/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
        
        document.getElementById("homepage").href = "/security men/security.html";
    
    });

fetch('/header&footer/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });

function logoutfun(e){   
   localStorage.removeItem("logedinUser");   
}
let acceptedUsersEmployess = JSON.parse(localStorage.getItem("acceptedEmployess"));
let acceptedUsersSecurities = JSON.parse(localStorage.getItem("acceptedSecuritis"));

if(localStorage.getItem("attendetEmployees")==null){
    // localStorage.setItem("attendetEmployees", JSON.stringify(arrOfAttendence));
    arrOfAttendence = [];
}else{
    arrOfAttendence = JSON.parse(localStorage.getItem("attendetEmployees"));
}

if(localStorage.getItem("departuredEmployees")==null){
    // localStorage.setItem("attendetEmployees", JSON.stringify(arrOfAttendence));
    arrOfDeparture = [];
}else{
    arrOfDeparture = JSON.parse(localStorage.getItem("departuredEmployees"));
}

if(localStorage.getItem("monthlyAttendence")==null){
    // localStorage.setItem("attendetEmployees", JSON.stringify(arrOfAttendence));
    monthlyAttendenceUsers = [];
}else{
    monthlyAttendenceUsers = JSON.parse(localStorage.getItem("monthlyAttendence"));
}
//.toLocaleDateString("ar_EG")
        let i = 1;
        let date = new Date().toLocaleString();
        console.log(date);
        let checkValue;
        let checkEmployee;
        let checkSecurity;
        // let currentDate = new Date().toLocaleString();
        // console.log(currentDate);
        
        console.log(arrOfAttendence);
        function addrowfun(e) {
            
            var usernew = document.getElementById('news');
            
            checkValue = arrOfAttendence.find(e =>
                e.username == usernew.value,
                
            );
            checkEmployee = acceptedUsersEmployess.find(e =>
                e.sendUserName == usernew.value,
                
            );
            checkSecurity = acceptedUsersSecurities.find(e =>
                e.sendUserName == usernew.value,
                
            );

            if(checkValue == undefined &&  (checkEmployee != undefined || checkSecurity != undefined)){
                console.log(arrOfAttendence);
                console.log(checkEmployee);
                console.log(checkSecurity);
                console.log(checkValue);
                // console.log(checkEmployee);

                // console.log(checkSecurity);
                // createdtr=document.createElement('tr');
                // var tdtwo = document.createElement('td'); 
                // tdtwo.innerText = usernew.value;
                let obj = {
                    "username" : usernew.value,
                    "date" : date,
                }
                arrOfAttendence.push(obj);
                
                localStorage.setItem("attendetEmployees", JSON.stringify(arrOfAttendence));
                monthlyAttendenceUsers.push(obj);
                localStorage.setItem("monthlyAttendence", JSON.stringify(monthlyAttendenceUsers));
                // createdtr.appendChild(tdtwo);   
                // selecedtable.appendChild(createdtr);
            } else if(checkValue != undefined){
                
                e.preventDefault();
                //alert("This employee Already attendet");
                console.log(checkValue);
                let index = arrOfAttendence.indexOf(checkValue);
                console.log(index);
                arrOfAttendence.splice(index, 1);
                console.log(arrOfAttendence);
                localStorage.setItem('attendetEmployees',JSON.stringify(arrOfAttendence));
                //console.log(arrOfAttendence);
                let obj2 = {
                    "username" : usernew.value,
                    "date" : date,
                }
                arrOfDeparture.push(obj2);
                
                localStorage.setItem("departuredEmployees", JSON.stringify(arrOfDeparture));
            }else{
                e.preventDefault();
            }
            location.reload();
        }
       // arrOfAttendence = JSON.parse(localStorage.getItem("attendetEmployees"));  (checkEmployee != undefined || checkSecurity != undefined) ar_EG
        let selecedtable = document.getElementById('showEmployees');
        
        selecedtable.style.backgroundColor ="white";
        if(arrOfAttendence.length != 0){
            for (let i = 0; i < arrOfAttendence.length; i++) {
                let createdtr=document.createElement('tr');
                let tdtwo = document.createElement('td'); 
                tdtwo.innerText = arrOfAttendence[i].username;
                createdtr.appendChild(tdtwo);
                selecedtable.appendChild(createdtr);

            }
            
        } else {
            alert("Enter username");
        }

        

        // function deletefun(){
        //     selecedtable.removeChild(createdtr);
        //     //createdtr.remove();
        // }

        
        
       