import React, { useContext } from "react";
export default function Home() {
  
  return (
    <div className=" flex items-center justify-center min-h-[99vh] bg-[#b1ebc5]">
      <div className="text-center p-4 border-solid pb-14 w-max bg-[#7adda0]">
        <h1 aria-label="Heading Digital Accessible Form" tabIndex={1}>Digital Accessibile Form</h1>
        <form className="mx-auto space-y-4 w-1/2 border-solid w-96 p-4">
          <div>
            <label htmlFor="Name" className="block text-sm font-medium w-max" tabIndex={2} aria-label="Name" >Name</label>
            <input type="text" id="name" name="name" className="mt-1 w-full p-2 border border-solid-300 rounded-md box-border" tabIndex={3} aria-label="enter your name" aria-required="true" placeholder="enter your name" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium w-max" tabIndex={4} aria-label="Email">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-solid-300 rounded-md box-border" tabIndex={5} aria-label="enter your email" aria-required="true" placeholder="enter your email"  />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium w-max" tabIndex={6} aria-label="message">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full p-2 border border-solid-300 rounded-md box-border" tabIndex={7} aria-label="enter your message" aria-required="true" placeholder="enter your message"></textarea>
          </div>

          <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md box-border" tabIndex={8} aria-label="Submit Form">Submit</button>
        </form>
      </div>
    </div>
  );
}
