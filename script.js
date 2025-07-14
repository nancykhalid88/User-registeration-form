const userName=document.getElementById("username");
const cont=document.getElementById("container");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirm-password")
function validate(e){
    e.preventDefault(); 
    const existingErrors = cont.querySelectorAll(".error");
    existingErrors.forEach(err => err.remove());
    if(userName.value===""){
        const p=document.createElement("p");
        p.classList.add("error");
        p.textContent="Username cannot be empty";
        cont.appendChild(p);
    }
    if(password.value.length<9){
        const p=document.createElement("p");
        p.classList.add("error");
        p.textContent="Password should be at least 9 characters long";
        cont.appendChild(p);
    }
    if(password.value!==confirmPassword.value){
        const p=document.createElement("p");
        p.classList.add("error");
        p.textContent="Passwords do not match";
        cont.appendChild(p);
    }    
}
const reBtn=document.getElementById("register-btn");
reBtn.addEventListener("click",validate);