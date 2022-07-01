import React from "react";
import { useStateValue } from "react-state-provider";
import { auth } from "./firebase";
function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
  
	const handleAuthenticaton = () => {
	  if (user) {
		auth.signOut();
	  }
	}
}
  export default handleAuthenticaton;