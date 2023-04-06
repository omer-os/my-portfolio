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
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="text-3xl font-bold">
        Feel free to contact me for any reason
      </div>

      <p className="text-zinc-400 sm:w-4/6 text-sm mt-2">
        Please feel free to contact me for any questions or suggestions. Kindly
        refrain from spamming this working contact form and respect its purpose.
        Rest assured, I will get back to you as soon as possible via the contact
        URL you provide. Thank you.{" "}
      </p>

      <div className="p-3 rounded border border-zinc-600 mt-6">
        <div className="text-xl font-bold">Send Me Massege</div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex md:flex-row flex-col flex-1 gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                className="w-full border pl-10 bg-black border-zinc-600 rounded p-2"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                maxLength={20}
                minLength={3}
              />
              <div className="absolute top-1 left-2 p-2 text-zinc-600">
                <BiSearch />
              </div>
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                className="w-full border pl-10 bg-black border-zinc-600 rounded p-2"
                placeholder="a contact link, instagram, email etc..."
                maxLength={30}
                minLength={3}
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              />
              <div className="absolute top-1 left-2 p-2 text-zinc-600">
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
                className="w-full border pl-10 whitespace-pre-wrap resize-y bg-black border-zinc-600 min-h-max rounded p-2"
              />
            </div>

            <div className="absolute top-1 left-2 p-2 text-zinc-600">
              <BiSearch />
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-5">
          <Dialog.Root open={OpenDialog}>
            <Dialog.Trigger asChild>
              <button
                onClick={HandleSubmit}
                className="bg-white text-black py-2 sm:w-max w-full px-4 rounded hover:bg-white/10 border border-white hover:text-white transition-all active:scale-95"
              >
                Send
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />

              <Dialog.Content className="fixed p-10 inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-black border border-zinc-700 p-4 rounded max-w-[30em]">
                    <Dialog.Title className="text-xl font-bold">
                      Thank you for your message
                    </Dialog.Title>

                    <Dialog.Description asChild className="mt-2">
                      <p>
                        ill contact you from the contact url that you provided
                        as soon as i can.
                      </p>
                    </Dialog.Description>

                    <div className="flex  gap-4 w-full">
                      <Dialog.Close asChild className="mt-4 flex-1">
                        <button
                          onClick={() => setOpenDialog(false)}
                          className="bg-white flex-1 text-center text-black py-2 px-4 rounded hover:bg-white/10 border border-white hover:text-white transition-all active:scale-95"
                        >
                          Close
                        </button>
                      </Dialog.Close>

                      <Dialog.Close asChild className="mt-4 flex-1">
                        <Link
                          href="/"
                          className="bg-black flex-1 text-center text-white py-2 px-4 rounded hover:bg-white border border-white hover:text-black transition-all active:scale-95"
                        >
                          Back To Home Page
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
