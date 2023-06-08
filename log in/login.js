let toLoginEmployees = JSON.parse(localStorage.getItem("acceptedEmployess"));
let toLoginSecurities = JSON.parse(localStorage.getItem("acceptedSecuritis"));
let admins = JSON.parse(localStorage.getItem("userData")).admin;




let objemployee;
let objsecurity;
let admin;

function login(e) {
   // e.preventDefault();

    // console.log(toLoginEmployees);
    // console.log(toLoginSecurities);
    // console.log(admins);

    let targetedname = document.getElementById('name').value;
    let targetedpassword = document.getElementById('pass').value;
    
    console.log(targetedname);
    console.log(targetedpassword);

    objemployee = toLoginEmployees.find(e =>
        e.sendUserName == targetedname && e.password == targetedpassword    
        
    );
    objsecurity = toLoginSecurities.find(e =>
        e.sendUserName == targetedname && e.password == targetedpassword
    );
    admin = admins.find(e =>
        e.UserName == targetedname && e.password == targetedpassword
       
    );

    if (objemployee != undefined){
        document.getElementById("mainForm").action = "/employee/employee.html";
        localStorage.setItem("logedinUser", JSON.stringify(objemployee));
    }
 
    else if (objsecurity != undefined){
        document.getElementById("mainForm").action = "/security men/security.html";
        localStorage.setItem("logedinUser", JSON.stringify(objsecurity));
    }

    else if (admin != undefined){
        document.getElementById("mainForm").action = "/admin/admin.html";
        localStorage.setItem("logedinUser", JSON.stringify(admin));
    }
    else{
        alert("Username or password is not correct please try again");
    }
    
    
}
