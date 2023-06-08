fetch('/header&footer/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
        document.getElementById("homepage").href = "/admin/admin.html";
    });

fetch('/header&footer/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });
    function logoutfun(e){   
        localStorage.removeItem("logedinUser");   
     }
let m = 1;
let i = 1;


//let acceptedSecuritis = [];

if(localStorage.getItem("acceptedEmployess")==null){
     acceptedEmployees = [];
}else{
    acceptedEmployees = JSON.parse(localStorage.getItem("acceptedEmployess"));
}

let mainArray = JSON.parse(localStorage.getItem("userData"));
   
let maniObject = JSON.parse(localStorage.getItem("userData")).employee;
   
let maniObjectSecurity = JSON.parse(localStorage.getItem("userData")).security;
//console.log(maniObjectSecurity);

let selecedtable1 = document.getElementsByTagName('table')[0];

//console.log(JSON.parse(localStorage.getItem("userData")).employee.length);

let createdtbody1 = document.createElement('tbody');


for (let j = 0; j <= maniObject.length; j++) {
   // console.log(JSON.parse(localStorage.getItem("userData")).employee[j]);
    let createdtr = document.createElement('tr');
    createdtr.setAttribute("id", i);
    let thone = document.createElement('th');
    thone.innerText = i;
    

    let tdtwo = document.createElement('td');
    tdtwo.innerText = maniObject[j].UserName;

    let tdthree = document.createElement('td');
    tdthree.innerText = maniObject[j].email;
    // let thisEmployee = maniObject.find(e =>
    //     e.email == maniObject[j].email,
        
    // );
    // let index = maniObject.indexOf(thisEmployee);
    //     console.log(index);
    let tdfour = document.createElement('td');
    tdfour.innerHTML = `<button  class="btn shadow-none" ><i id="${maniObject[j].email}" onclick="sendEmail(event,${i})" class="fa fa-check fs-4" aria-hidden="true" style="color:#c57aff"></i></button>`;

   // let tdfive = document.createElement('td');
   // tdfive.innerHTML = `<button class="btn shadow-none" onclick="deleteRow(${i}) , deleteLocalStorage(${index})" ><i class="fa fa-times" aria-hidden="true"></i></button>`;
    i++;
    createdtr.appendChild(thone);
    createdtr.appendChild(tdtwo);
    createdtr.appendChild(tdthree);
    createdtr.appendChild(tdfour);
   // createdtr.appendChild(tdfive);

    createdtbody1.appendChild(createdtr)
    selecedtable1.appendChild(createdtbody1);

}
// let selecedtable2 = document.getElementById('targettable2');
// let createdtbody2 = document.createElement('tbody');
// for (let n = 0; n <= maniObjectSecurity.length; n++) {
//      console.log(JSON.parse(localStorage.getItem("userData")).security[n]);
//      let createdtr2 = document.createElement('tr');
//      createdtr2.setAttribute("id", i);
//      let thone2 = document.createElement('th');
//      thone2.innerText = i;
     
 
//      let tdtwo2 = document.createElement('td');
//      tdtwo2.innerText = maniObjectSecurity[n].UserName;
 
//      let tdthree2 = document.createElement('td');
//      tdthree2.innerText = maniObjectSecurity[n].email;
//      // let thisEmployee = maniObject.find(e =>
//      //     e.email == maniObject[j].email,
         
//      // );
//      // let index = maniObject.indexOf(thisEmployee);
//      //     console.log(index);
//      let tdfour2 = document.createElement('td');
//      tdfour2.innerHTML = `<button  class="btn shadow-none" ><i id="${maniObjectSecurity[n].email}" onclick="sendEmail(event,${i},${2})" class="fa fa-check fs-4" aria-hidden="true" style="color:#c57aff"></i></button>`;
 
//     // let tdfive = document.createElement('td');
//     // tdfive.innerHTML = `<button class="btn shadow-none" onclick="deleteRow(${i}) , deleteLocalStorage(${index})" ><i class="fa fa-times" aria-hidden="true"></i></button>`;
//      i++;
//      createdtr2.appendChild(thone2);
//      createdtr2.appendChild(tdtwo2);
//      createdtr2.appendChild(tdthree2);
//      createdtr2.appendChild(tdfour2);
//     // createdtr.appendChild(tdfive);
 
//      createdtbody2.appendChild(createdtr2)
//      selecedtable2.appendChild(createdtbody2);
 
//  }


function sendEmail(event,k){
   // console.log(event.target);
    console.log(event.target.id);
    let thisEmployee = mainArray.employee.find(e =>
             e.email == event.target.id,            
         );
         let updatedMainArray = mainArray.employee.filter(e =>
            e.email !== event.target.id,            
        );
        console.log(updatedMainArray);
        mainArray.employee= updatedMainArray;
        localStorage.setItem("userData",JSON.stringify(mainArray));
        //  let thisSecurity = maniObjectSecurity.find(e =>
        //     e.email == event.target.id,            
        // );
         console.log(thisEmployee);
         acceptedEmployees.push(thisEmployee);
         //acceptedSecuritis.push(thisSecurity);
         console.log(acceptedEmployees);
         //console.log(acceptedSecuritis);
         localStorage.setItem("acceptedEmployess" , JSON.stringify(acceptedEmployees));
         //localStorage.setItem("acceptedSecurities" , JSON.stringify(acceptedSecuritis));
         document.getElementById(k).remove(k);
         console.log(acceptedEmployees);
         //console.log(acceptedSecuritis);
         for(let m = 0 ; m < acceptedEmployees.length ; m++){
            acceptedEmployees[m].sendUserName = acceptedEmployees[m].UserName + m ;           
            console.log(acceptedEmployees);
            localStorage.setItem("acceptedEmployess" , JSON.stringify(acceptedEmployees));
         }
        //  for(let m = 0 ; m < acceptedSecuritis.length ; m++){
        //     acceptedSecuritis[m].sendUserName = acceptedSecuritis[m].UserName + m ;           
        //     console.log(acceptedSecuritis);
        //     localStorage.setItem("acceptedSecurities" , JSON.stringify(acceptedSecuritis));
        //  }

       //  e.preventDefault();
            
           console.log(thisEmployee.UserName); 
            let uniqueUserName = thisEmployee.sendUserName;
            // switch (h) {
            //     case 1:
            //         uniqueUserName = thisEmployee.sendUserName;
            //         break;
            //         case 2:
            //         uniqueUserName = thisSecurity.sendUserName;
            //         break;
            
            //     default:
            //         break;
            // }
            

// email function
        Email.send({
            SecureToken: "f963d93d-570e-4b9f-8cb5-addbb20d014a",
            // To : event.target.id,"tasneemayman2000@gmail.com"
            To: event.target.id,
            From: "tasneemayman2000@gmail.com",
            Subject: "Contact Form",
            Body: uniqueUserName 
        }).then(
            message => alert(message)
        );


        m++;

}



// function deleteLocalStorage(p){
//     //alert("gggg")
//     alert(p);
//     let x = maniObject.splice(p, 1);
//      console.log(maniObject);
//      mainArray.employee = maniObject;
//      console.log(mainArray);
//      localStorage.setItem("userData", JSON.stringify(mainArray));
// }

// function deleteRow(k) {
//     console.log(k);
    
//     document.getElementById(k).remove(k);
//     // let mainArray = JSON.parse(localStorage.getItem("userData"));

//     // console.log(mainArray);
//     // let maniObject = JSON.parse(localStorage.getItem("userData")).employee;
//     // console.log(maniObject);
// //    let deletedElement = maniObject.find(e =>
// //         e.email == JSON.parse(localStorage.getItem("userData")).employee[k].email,
        
// //     );
// //     console.log(deletedElement.UserName);
    
//     //  let index = maniObject.indexOf(deletedElement);
//     //  console.log(index);
//     //  let x = maniObject.splice(k, 1);
//     //  console.log(maniObject);
//     //  mainArray.employee = maniObject;
//     //  console.log(mainArray);

//      //localStorage.setItem("userData", JSON.stringify(maniObject));
// }

//  console.log(mainArray);
//  console.log(acceptedEmployees);

 

