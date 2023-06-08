
let mainObj = {
    "admin": [{ "email": "employee1@gmail.com", "password": "123456" , "UserName" : "admin" , "jop" : "Admin"}],
    "employee": [],
    "security": [],
}



if(localStorage.getItem("userData")==null){
    localStorage.setItem("userData", JSON.stringify(mainObj));
}else{
    mainObj = JSON.parse(localStorage.getItem("userData"));
}

let selectedJop;
function myNewFunction(sel) {
    selectedJop = sel.options[sel.selectedIndex].text;
    //console.log(selectedJop);

}



console.log(JSON.parse(localStorage.getItem("userData")));

let objemployee;
let objsecurity;
let admin;
let accEmp;
let accEmpArr =JSON.parse(localStorage.getItem("acceptedEmployess"));
console.log(accEmpArr);
function checkexistance(e) {

    let targetedemail = document.getElementById('validationCustom02').value;
    let targetedpassword = document.getElementById('password').value;
    let targetedname = document.getElementById('validationCustom01').value;
    console.log(targetedname);
    //e.preventDefault();
   // console.log(selectedJop);
    
    
    objemployee = mainObj.employee.find(e =>
        e.email == targetedemail,
       // console.log(targetedemail)
    );
    objsecurity = mainObj.security.find(e =>
        e.email == targetedemail
    );
    admin = mainObj.admin.find(e =>
        e.email == targetedemail,
        //console.log(targetedemail)
    );
    accEmp = accEmpArr.find(e =>
        e.email == targetedemail,
       // console.log(targetedemail)
    );
    switch (selectedJop) {
        case "Employee":
            
           // e.preventDefault();
            console.log(objemployee);
            if (objemployee == undefined && objsecurity == undefined && admin == undefined && accEmp == undefined) {
                let objj = {
                    "email": targetedemail,
                    "password": targetedpassword,
                    "jop": selectedJop,
                    "UserName" : targetedname
                }
                
                mainObj.employee.push(objj);
                console.log(mainObj);
                localStorage.setItem("userData", JSON.stringify(mainObj));
                document.getElementById("mainpage").action = "/log in/login.html";

            } else {
                e.preventDefault();
                console.log(targetedemail);
                console.log(targetedpassword);
                return console.log("email exist");
            }
            break;
        case "Security":
            
            console.log(objsecurity);
            if (objemployee == undefined && objsecurity == undefined && admin == undefined && accEmp == undefined) {
                let objs = {
                    "email": targetedemail,
                    "password": targetedpassword,
                    "jop": selectedJop,
                    "UserName" : targetedname
                }
                mainObj.security.push(objs)
                localStorage.setItem("userData", JSON.stringify(mainObj));
                document.getElementById("mainpage").action = "/log in/login.html";
               
            } else {
                e.preventDefault();
                return console.log("email exist");
            }
            break;
        case "Admin":
            
            console.log(admin);
            if (objemployee == undefined && objsecurity == undefined && admin == undefined && accEmp == undefined) {
                let objs = {
                    "email": targetedemail,
                    "password": targetedpassword,
                    "jop": selectedJop,
                    "UserName" : targetedname
                }
                mainObj.admin.push(objs)
                localStorage.setItem("userData", JSON.stringify(mainObj));
                document.getElementById("mainpage").action = "/admin/admin.html";
                
            } else {
                e.preventDefault();
                return console.log("email exist");
            }
            break;
        default:
            break;
    }


    



}

