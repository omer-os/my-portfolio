"use client";

import { motion } from "framer-motion";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function page() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [OpenDialog, setOpenDialog] = useState(false);

  const HandleSubmit = () => {
    setOpenDialog(true);

    try {
      fetch(
        `${window.location.origin}/api/bot/sendmassege?type=contact&message=${message}&contacturl=${contact}&name=${name}`
      );
    } catch (e) {
      console.log(e);
    }

    setName("");
    setContact("");
    setMessage("");
  };

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
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col flex-1 gap-4 md:flex-row">
            <div className="relative flex-1">
              <input
                type="text"
                className="w-full p-2 pl-10 bg-white border rounded dark:bg-black border-zinc-600"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                maxLength={20}
                minLength={3}
              />
              <div className="absolute p-2 top-1 left-2 text-zinc-600">
                <BiSearch />
              </div>
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                className="w-full p-2 pl-10 bg-white border rounded dark:bg-black border-zinc-600"
                placeholder="a contact link, instagram, email etc..."
                maxLength={30}
                minLength={3}
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              />
              <div className="absolute p-2 top-1 left-2 text-zinc-600">
                <BiSearch />
              </div>
            </div>
          </div>

          <div className="relative flex-1">
            <div>
              <textarea
                id="review-text"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What did you like or dislike?"
                ref={textAreaRef}
                rows={1}
                value={message}
                className="w-full p-2 pl-10 whitespace-pre-wrap border resize-y rounded bg-white dark:bg-black border-zinc-600 min-h-max"
              />
            </div>

            <div className="absolute p-2 top-1 left-2 text-zinc-600">
              <BiSearch />
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-5">
          <Dialog.Root open={OpenDialog}>
            <Dialog.Trigger asChild>
              <button
                onClick={HandleSubmit}
                className="w-full px-4 py-2 dark:text-black text-white transition-all dark:bg-white bg-blue-600 border border-white rounded sm:w-max dark:hover:bg-white/10 hover:bg-blue-500 dark:hover:text-white active:scale-95"
              >
                Send
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/20 dark:bg-black/50" />

              <Dialog.Content className="fixed inset-0 flex items-center justify-center p-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="dark:bg-black dark:text-white bg-white  border border-zinc-700 p-4 rounded max-w-[30em]">
                    <Dialog.Title className="text-xl font-bold">
                      Thank you for your message
                    </Dialog.Title>

                    <Dialog.Description asChild className="mt-2">
                      <p>
                        ill contact you from the contact url that you provided
                        as soon as i can.
                      </p>
                    </Dialog.Description>

                    <div className="flex w-full gap-4">
                      <Dialog.Close asChild className="flex-1 mt-4">
                        <button
                          onClick={() => setOpenDialog(false)}
                          className="flex-1 px-4 py-2 text-center dark:text-black text-white transition-all dark:bg-white bg-blue-600 dark:border border-white rounded hover:bg-blue-500 dark:hover:bg-white/10 hover:text-white active:scale-95"
                        >
                          Close
                        </button>
                      </Dialog.Close>

                      <Dialog.Close asChild className="flex-1 mt-4">
                        <Link
                          href="/"
                          className="flex-1 px-4 py-2 text-center transition-all border rounded bg-white dark:text-white dark:bg-black dark:hover:bg-white dark:border-zinc-800 border-zinc-300 hover:text-black active:scale-95"
                        >
                          home
                        </Link>
                      </Dialog.Close>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
}

// Auto Gworing Input
