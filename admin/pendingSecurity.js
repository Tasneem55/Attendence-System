fetch('/header&footer/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
    });

fetch('/header&footer/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });
let m = 1;
let i = 1;


//let acceptedSecuritis = [];

if(localStorage.getItem("acceptedSecuritis")==null){
    acceptedSecuritis = [];
}else{
    acceptedSecuritis = JSON.parse(localStorage.getItem("acceptedSecuritis"));
}

let mainArray = JSON.parse(localStorage.getItem("userData"));
   
//let maniObject = JSON.parse(localStorage.getItem("userData")).employee;
   
let maniObjectSecurity = JSON.parse(localStorage.getItem("userData")).security;


let selecedtable1 = document.getElementsByTagName('table')[0];



let createdtbody1 = document.createElement('tbody');


for (let j = 0; j <= maniObjectSecurity.length; j++) {
   // console.log(JSON.parse(localStorage.getItem("userData")).employee[j]);
    let createdtr = document.createElement('tr');
    createdtr.setAttribute("id", i);
    let thone = document.createElement('th');
    thone.innerText = i;
    

    let tdtwo = document.createElement('td');
    tdtwo.innerText = maniObjectSecurity[j].UserName;

    let tdthree = document.createElement('td');
    tdthree.innerText = maniObjectSecurity[j].email;
    
    let tdfour = document.createElement('td');
    tdfour.innerHTML = `<button  class="btn shadow-none" ><i id="${maniObjectSecurity[j].email}" onclick="sendEmail(event,${i})" class="fa fa-check fs-4" aria-hidden="true" style="color:#c57aff"></i></button>`;

    i++;
    createdtr.appendChild(thone);
    createdtr.appendChild(tdtwo);
    createdtr.appendChild(tdthree);
    createdtr.appendChild(tdfour);
   

    createdtbody1.appendChild(createdtr)
    selecedtable1.appendChild(createdtbody1);

}



function sendEmail(event,k){
   // console.log(event.target);
    console.log(event.target.id);
    let thisSecurity = mainArray.security.find(e =>
             e.email == event.target.id,            
         );
         let updatedMainArray = mainArray.security.filter(e =>
            e.email !== event.target.id,            
        );
        console.log(updatedMainArray);
        mainArray.security= updatedMainArray;
        localStorage.setItem("userData",JSON.stringify(mainArray));
        
         console.log(thisSecurity);
         acceptedSecuritis.push(thisSecurity);
         
         console.log(acceptedSecuritis);
         
         localStorage.setItem("acceptedSecuritis" , JSON.stringify(acceptedSecuritis));
         
         document.getElementById(k).remove(k);
         console.log(acceptedSecuritis);
         
         for(let m = 0 ; m < acceptedSecuritis.length ; m++){
            acceptedSecuritis[m].sendUserName = acceptedSecuritis[m].UserName + m ;           
            console.log(acceptedSecuritis);
            localStorage.setItem("acceptedSecuritis" , JSON.stringify(acceptedSecuritis));
         }
        

       //  e.preventDefault();
            
           console.log(thisSecurity.UserName); 
            let uniqueUserName = thisSecurity.sendUserName;
            
            

// email function
        // Email.send({
        //     SecureToken: "f963d93d-570e-4b9f-8cb5-addbb20d014a",
        //     // To : event.target.id,"tasneemayman2000@gmail.com"
        //     To: event.target.id,
        //     From: "tasneemayman2000@gmail.com",
        //     Subject: "Contact Form",
        //     Body: uniqueUserName 
        // }).then(
        //     message => alert(message)
        // );


        m++;

}





 

