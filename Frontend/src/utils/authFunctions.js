// src/utils/authFunctions.js
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const handleLogout = async () => {
  try {
    await signOut(auth);
    alert("Logged out successfully!");
  } catch (error) {
    console.error("Error logging out: ", error);
    alert("Failed to log out!");
  }
};
