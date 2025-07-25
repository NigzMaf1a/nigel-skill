export function register(userObject, existingUserArray){
    const newUserArray = existingUserArray.push(userObject);
    if(!newUserArray || !Array.isArray(newUserArray)){
        console.log("User registration failed");
    }
    return newUserArray;
}
export function validate(password, confirmPassword){
    if(password !== confirmPassword){
        return false;
    } else{
        return password;
    }
}