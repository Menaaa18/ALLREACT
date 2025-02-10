import React, { useState } from "react";
import UserCard from "../components/atoms/UserCard";
import UserForm from "../components/atoms/UserForm";

function Blog() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex p-8 items-center justify-center h-screen w-full">
      <div className="w-full sm:w-[70%] md:w-[65%] lg:w-[50%] x1:w-[45%] 2x1:w-[40%]">
      {!submitted ?(
        <UserForm
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        description={description}
        setDescription={setDescription}/>
      ) : (
        <UserCard userName={name} userAge={age} userDescription={description} />
        
      )}
      <h1 className="text-3xl font-bold underline">
      Hello world!</h1>
      </div>
    </div>
  );
}

export default Blog;
