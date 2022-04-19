export const loginValidation = (username, password) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (username === '') {
        return {
            valid: false,
            errors: username === '' ? "Please Enter Your Email" : null
        }
    }
    else if (reg.test(username) === false) {
        return {
            valid: false,
            errors: reg.test(username) === false ? "Email format is invalid" : null
        }
    }

    else if (password === '') {
        return {
            valid: false,
            errors: password === '' ? "Please Enter Your Password" : null
        }
    }
    else if (password.length < 6) {
        return {
            valid: false,
            errors: password.length < 6 ? "Password must should contain 6 digits" : null
        }
    }
    else {
        return { valid: true, errors: null }
    }
}
export const Signup_validation = (name, useremail, username,useraddress, userpassword,userconfirmpassword) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let Reg = /^\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./;
    if (name === '') {
        return {
            valid: false,
            errors: name === "" ? "Please Enter Your Name" : null
        }
    }
    else if (name.length < 3) {
        return {
            valid: false,
            errors: name.length < 3 ? "Name must should contain 3 letters" : null
        }
    }
      else if (useremail === '') {
        return {
            valid: false,
            errors: useremail === '' ? "Please Enter Your Email" : null
        }
    }
    else if (reg.test(useremail) === false) {
        return {
            valid: false,
            errors: reg.test(useremail) === false ? "Email format is invalid" : null
        }
    }

    else if (username === '') {
        return {
            valid: false,
            errors: username === "" ? "Please Enter Your User Name" : null
        }
    }
    else if (username.length < 3) {
        return {
            valid: false,
            errors: username.length < 3 ? "User Name Minimum atleast 3 letters" : null
        }
    } 
     else if (useraddress === '') {
        return {
            valid: false,
            errors: useraddress === "" ? "Please Enter Your Address" : null
        }
    }
    // else if (Reg.test(useraddress) === false) {
    //     return {
    //         valid: false,
    //         errors: Reg.test(useraddress) === false ? "Address format is invalid" : null
    //     }
    // }
    
    else if (userpassword === '') {
        return {
            valid: false,
            errors: userpassword === '' ? "Please Enter Your Password" : null
        }
    }
    else if (userpassword.length < 6) {
        return {
            valid: false,
            errors: userpassword.length < 6 ? "Password must should contain 6 digits" : null
        }
    }
    else if (userconfirmpassword === ''){
        return{
            valid: false,
            errors: userconfirmpassword === '' ? "Please Enter Your Confirm Password" : null
        }
    }else if (userpassword !== userconfirmpassword){
        return{
            valid: false,
            errors: userpassword !== userconfirmpassword ? "Password doesn't match" : null
        }
    }

    else {
        return { valid: true, errors: null }
    }
}

export const addTime = (time) => {
    if (time === '') {
        return {
            valid: false,
            errors: time === '' ? "Please Add Time" : null
        }
    }    
    else {
        return { valid: true, errors: null }
    }
}


export const updateValidation = (name, lastname, email,) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (name === "") {
        return {
            valid: false,
            errors: name === "" ? "Please Enter Your Name" : null
        }
    }
     if (name.length < 3) {
        return {
            valid: false,
            errors: name.length < 3 ? "Name must should contain 3 letters" : null
        }
    }

     if (lastname === "") {
        return {
            valid: false,
            errors: lastname === "" ? "Please Enter Your Last Name" : null
        }
    }
     if (lastname.length < 3) {
        return {
            valid: false,
            errors: lastname.length < 3 ? "Name should contain 3 letters" : null
        }
    }

    if (email === '') {
        return {
            valid: false,
            errors: email === '' ? "Please Enter Your Email" : null
        }
    }
     else if (reg.test(email) === false) {
        return {
            valid: false,
            errors: reg.test(email) === false ? "Email format is invalid" : null
        }
    }

    else {
        return { valid: true, errors: null }
    }
}


export const passwordValidation = (password,confirmPassword) => {

    if (password === "") {
        return {
            valid: false,
            errors: password === "" ? "Please Enter Your Password" : null
        }
    }
    else if (password.length < 6) {
        return {
            valid: false,
            errors: password.length < 6 ? "Password must should contain 6 digits" : null
        }
    }

    else if (confirmPassword === "") {
        return {
            valid: false,
            errors: confirmPassword === "" ? "Please Enter Your Confirm Password" : null
        }
    }
     else if (confirmPassword !== password) {
        return {
            valid: false,
            errors: confirmPassword !== password? "Enter Confirm Password" : null
        }
    }
    else {
        return { valid: true, errors: null }
    }
}

export const forgetPasswordValidation = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email === '') {
        return {
            valid: false,
            errors: email === '' ? "Please Enter Your Email" : null
        }
    }
     else if (reg.test(email) === false) {
        return {
            valid: false,
            errors: reg.test(email) === false ? "Email format is invalid" : null
        }
    }

    else {
        return { valid: true, errors: null }
    }
}

