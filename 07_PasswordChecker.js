// 7. Password Checker.
// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.


class User{
    username
    password

    constructor(username, password){
        this.username = username
        this.password = password
    }

    /**
     * @param {any} newPassword
     */
    set setPassword(newPassword){

        if(newPassword.length >= 8 && /\d/.test(newPassword) && /[A-Z]/.test(newPassword)){
            this.password = newPassword
        }
        else{
            console.log("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }

    get getPassword(){
        // return this.password.replace(/./g, "*")
        return this.password
    }
}

const user = new User("Raj", "Password123")
console.log(user.getPassword);

user.setPassword = "Password"

user.setPassword = "Newpassword123"
console.log(user.getPassword);