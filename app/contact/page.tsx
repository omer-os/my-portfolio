import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

export default function page() {
  return (
    <div className="max-w-5xl px-6 py-16 mx-auto">
      <div className="text-3xl font-bold">
        Feel free to contact me for any reason
      </div>
      <p className="mt-2 text-sm dark:text-zinc-400 text-zinc-600 sm:w-4/6">
        Please feel free to contact me for any questions or suggestions. Kindly
        refrain from spamming this working contact form and respect its purpose.
        Rest assured, I will get back to you as soon as possible via the contact
        URL you provide. Thank you.{" "}
      </p>
      <div className="p-3 mt-6 border rounded border-zinc-300 dark:border-zinc-600">
        <div className="text-xl font-bold">Send Me Massege</div>

        <div className="flex flex-col flex-1 gap-4 md:flex-row py-4">
          <Input />
          <Input />
          <Input />
        </div>

        <button className="text-white rounded active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-center w-max bg-zinc-900 hover:bg-zinc-800 px-4 py-2">
          send
        </button>
      </div>
    </div>
  );
}

const Input = () => {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        className="w-full p-2 pl-10 bg-white border rounded dark:bg-black border-zinc-600"
        placeholder="Your Name"
        maxLength={20}
        minLength={3}
        value=""
      />
      <div className="absolute p-2 top-1 left-2 text-zinc-600">
        <BsFillPersonFill />
      </div>
    </div>
  );
};
