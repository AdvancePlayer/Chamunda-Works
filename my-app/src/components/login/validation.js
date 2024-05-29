const validation =({signup})=>{
    let error={};
    if(signup.password == signup.re_password){
        error.password = "password not match"
    }
    else{
        error.password = ""
    }
    return error;
}
export default validation;