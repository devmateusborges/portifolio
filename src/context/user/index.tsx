
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../service/service";
import { useEffect, useState } from "react";

const provider = new GoogleAuthProvider();

interface User{
  nome?:string;
  gmail?:string;
  img?:string;
  uid?:string;
}

interface StateUser{
  TypeLogin:Boolean;
}

export function FButtonSingIn() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
      return console.log(">>>>>>> LOGIN")
}


// interface singOut{
//   auth: FunctionConstructor
// }
// export function SignOutUser() {
//       signOut(auth).then(() => {
//         console.log("Saiu")
//         return {nome:"",gmail:"",img:"",uid:""}
//       }).catch((error) => {
//         console.log("error")
//       });
//   }


