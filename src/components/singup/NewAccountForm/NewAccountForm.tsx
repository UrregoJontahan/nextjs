"use client";
import { useState } from "react";
import { handleCreateUser } from "app/actions";


export const NewAccountForm = () => {

  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e:any) =>{
    const formData = new FormData(e.target);
    await handleCreateUser(formData)
  }

  return (
    <div className="block mx-auto mt-20 max-w-screen-md">
      <h1 className="text-2xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">New Account</h1>
      <form className="grid gap-x-4 gap-y-8" onSubmit={handleSubmit} method="POST">
        <input type="text" name="firstName" placeholder="Name" disabled={loading} className="h-12 rounded-lg p-8 focus:border-green-500 text-black" />
        <input type="text" name="lastName" placeholder="Lastname" disabled={loading} className="h-12 rounded-lg p-8 text-black" />
        <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" disabled={loading} className="h-12 rounded-lg p-8 text-black " />
        <input type="text" name="phone" placeholder="phone number" pattern="^[0-9]*$" disabled={loading} className="h-12 rounded-lg p-8 text-black " />
        <input type="password" name="password" placeholder="password" disabled={loading} className="h-12 p-8 rounded-lg text-black" />
        <input type="password" name="password_confirmation" placeholder="re-type password" disabled={loading} className="h-12  rounded-lg p-8 text-black" />
        <input type="submit" name="submit" value="Crear cuenta" disabled={loading} className="bg-violet-neon hover:bg-blue-500 cursor-pointer h-12"/>
      </form>
      {errors.length > 0 && 
        <div className="submit border border-indigo-600 text-black font-bold py-4 px-6 uppercase rounded-full">
          {errors.map((error, index) => {
            return <p key={index} className="text-red-500 font-light mt-4">{error}</p>
          })}
        </div>
      }
    </div>
  );
}