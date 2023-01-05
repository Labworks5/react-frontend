import React from "react";

const Person = () => {
  return (
    <>
      <h1>Name: John</h1>
      <h2>LastName: Doe</h2>
      <h2>Age: 20 </h2>  
    </>
  )
}

export default function App() {
  return (
    <div className="container">
      <Person />
    </div>
  );
}

