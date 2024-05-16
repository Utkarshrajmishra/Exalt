import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { authRef } from "../firebase"
import { get } from "firebase/database";


class AuthSerivce{
    auth;
    
    constructor()
    {
        this.auth=getAuth;
    }

    async SignUp(email:string, password:string)
    {

        createUserWithEmailAndPassword(this.auth, email, password)
        .then(
          (userCredential) => {
            return true;
          }
        )
        .catch((error)=>{
            return error.message;
        });
    }


}