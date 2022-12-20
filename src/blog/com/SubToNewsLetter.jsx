import Image from "next/image";

export default function SubToNewsLetter() {
  return (
    <>
      <div className="sign-n-box relative flex items-center justify-center sm:h-[20em] mb-4 w-full sm:px-0 px-5 sm:py-0 py-10 ">
        <Image
          placeholder="blur"
          blurDataURL="/images/blur.webp"
          layout="fill"
          src="/images/walpaper.jpg"
          className="w-full h-full absolute top-0 left-0 rounded-xl h-full object-cover z-10"
          alt="s"
        />
        <div className="box gap-2 z-20 flex flex-col bg-black rounded-xl sm:p-10 p-7 md:px-14  md:w-[33em] sm:w-[28em] w-full ">
          <div className="sm:text-3xl text-center text-white text-lg">
            Subscribe to get notifided
          </div>

          <div className="sm:text-xl text-center text-gray-500 text-md">
            Sign up to our newsletters and we{"'"}ll keep you in the loop.
          </div>

          <div className="flex items-stretch justify-center sm:text-sm text-xs gap-2">
            <input
              type="text"
              className="bg-zinc-800 text-zinc-500 sm:p-3 p-1 rounded sm:rounded-xl  sm:flex-1 sm:max-w-none max-w-[10em]"
              placeholder="Your Email..."
            />
            <button
              className="bg-zinc-800 text-zinc-500 rounded sm:px-3 px-2 active:scale-[.95] active:bg-zinc-900"
              onClick={() => {
                alert("this function is not yet implemented");
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
