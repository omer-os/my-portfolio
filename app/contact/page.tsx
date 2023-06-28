import { headers } from "next/headers";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

export default function page() {
  const headersList = headers();
  const fullUrl =
    headersList.get("x-forwarded-proto") + "://" + headersList.get("host");

  async function SendMsg(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const contactUrl = formData.get("contactUrl");
    const msg = formData.get("msg");

    if (!name || !contactUrl || !msg) {
      return "Please fill all fields";
    }

    const res = await fetch(
      `${fullUrl}/api/telegram?type=contact&name=${name}&contacturl=${contactUrl}&message=${msg}`
    );
  }
  return (
    <div className="max-w-5xl px-6  py-16 mx-auto">
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

        <form
          // @ts-ignore
          action={SendMsg}
          className="flex flex-col flex-1 gap-4 md:flex-row py-4"
        >
          <Input
            placeholder="Name"
            name="name"
            maxLength={30}
            minLength={3}
            type="text"
          />
          <Input
            placeholder="Contact URL"
            name="contactUrl"
            maxLength={100}
            minLength={3}
            type="text"
          />
          <Input
            placeholder="Message"
            name="msg"
            maxLength={500}
            minLength={3}
            type="text"
          />

          <button
            type="submit"
            className="text-white rounded active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-center w-max bg-zinc-900 hover:bg-zinc-800 px-4 py-2"
            title="Send Message"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}

const Input = ({
  type = "text",
  placeholder,
  maxLength,
  minLength,
  name,
}: {
  type?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  name: string;
}) => {
  return (
    <div className="relative flex-1">
      <input
        type={type}
        className="w-full p-2 pl-10 bg-white border rounded dark:bg-black border-zinc-600"
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
      />
      <div className="absolute p-2 top-1 left-2 text-zinc-600">
        <BsFillPersonFill />
      </div>
    </div>
  );
};
