const cl = console.log;
const emailControl = document.getElementById("email");
const passwardControl = document.getElementById("passward");
const signInForm = document.getElementById("signInForm");

const sweetAlert =(msg, iconStr)=>{
    Swal.fire({
        title:msg,
        timer:2500,
        icon:iconStr
    })
}


const login = (email, pass) =>{
    return new Promise ((resolve, reject)=>{
       setTimeout(()=>{
        if (email === "deepti30@gmail.com" && pass === "dipu"){
            resolve("Successfully login, userRole, Token (JWT, Bearer)")
        }else{
            reject("Invalid Email or Passward!!!")
        }
       }, 1500);
    })
}

const onSignIn = async (eve) =>{
    eve.preventDefault();
    let emailVal = emailControl.value;
    let passVal = passwardControl.value;

    try{
        let res = await login(emailVal, passVal);
        sweetAlert(res, "success")
    }catch(err){
        sweetAlert(err, "error")
    }finally{
        signInForm.reset();
    }
      
}



signInForm.addEventListener("submit", onSignIn)