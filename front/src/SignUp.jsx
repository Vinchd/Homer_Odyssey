import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("Saisissez votre email");
  return (
    <>
      <h1>{email}</h1>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
}
