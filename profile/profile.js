fetch('/header&footer/header.html')
    .then(response => response.text())
    .then(html => {

        document.getElementById('header').innerHTML = html;
        let logedinUser = JSON.parse(localStorage.getItem("logedinUser"));
        switch (logedinUser.jop) {
            case "Employee":
                document.getElementById("homepage").href = "/employee/employee.html";
                break;
            case "Security":
                document.getElementById("homepage").href = "/security men/security.html";
                break;
            case "Admin":
                document.getElementById("homepage").href = "/admin/admin.html";
                break;
            default:
                break;
        }
    });

    function logoutfun(e){   
        localStorage.removeItem("logedinUser");   
     }

fetch('/header&footer/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });

let logedinUser = JSON.parse(localStorage.getItem("logedinUser"));

let fullName = document.getElementById("fullName");
let userEmail = document.getElementById("email");
let userUserName = document.getElementById("username");



fullName.innerText = JSON.parse(localStorage.getItem("logedinUser")).UserName;
userEmail.innerText = JSON.parse(localStorage.getItem("logedinUser")).email;

if (logedinUser.sendUserName == undefined) {
    userUserName.innerText = JSON.parse(localStorage.getItem("logedinUser")).UserName;
} else {
    userUserName.innerText = JSON.parse(localStorage.getItem("logedinUser")).sendUserName;

}

