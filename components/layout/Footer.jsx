import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="relative bg-gradient-to-b from-zinc-900 border-t border-zinc-700 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Omar chatin
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                creative Ui/Ux designer and front end web developer.
              </h5>
              <div className="mt-6 lg:mb-0 flex mb-6">
                <Link
                  href="/"
                  className="flex bg-zinc-800 hover:bg-zinc-700 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <svg
                    width="20"
                    height="30"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.2455 9.85973C14.5017 9.85973 9.86876 14.4927 9.86876 20.2365C9.86876 25.9803 14.5017 30.6133 20.2455 30.6133C25.9893 30.6133 30.6223 25.9803 30.6223 20.2365C30.6223 14.4927 25.9893 9.85973 20.2455 9.85973ZM20.2455 26.9827C16.5337 26.9827 13.4993 23.9573 13.4993 20.2365C13.4993 16.5157 16.5247 13.4902 20.2455 13.4902C23.9663 13.4902 26.9918 16.5157 26.9918 20.2365C26.9918 23.9573 23.9573 26.9827 20.2455 26.9827ZM33.4671 9.43527C33.4671 10.7809 32.3834 11.8556 31.0468 11.8556C29.7011 11.8556 28.6264 10.7719 28.6264 9.43527C28.6264 8.09866 29.7101 7.01493 31.0468 7.01493C32.3834 7.01493 33.4671 8.09866 33.4671 9.43527ZM40.3398 11.8917C40.1863 8.64956 39.4457 5.77766 37.0705 3.41151C34.7044 1.04535 31.8325 0.3048 28.5903 0.14224C25.2488 -0.0474134 15.2333 -0.0474134 11.8917 0.14224C8.65859 0.295769 5.78669 1.03632 3.41151 3.40248C1.03632 5.76863 0.3048 8.64053 0.14224 11.8827C-0.0474134 15.2242 -0.0474134 25.2397 0.14224 28.5812C0.295769 31.8234 1.03632 34.6953 3.41151 37.0615C5.78669 39.4276 8.64956 40.1682 11.8917 40.3307C15.2333 40.5204 25.2488 40.5204 28.5903 40.3307C31.8325 40.1772 34.7044 39.4367 37.0705 37.0615C39.4367 34.6953 40.1772 31.8234 40.3398 28.5812C40.5294 25.2397 40.5294 15.2332 40.3398 11.8917ZM36.0229 32.1666C35.3185 33.9367 33.9548 35.3004 32.1756 36.0139C29.5115 37.0705 23.1897 36.8267 20.2455 36.8267C17.3014 36.8267 10.9706 37.0615 8.31541 36.0139C6.54531 35.3094 5.18161 33.9457 4.46815 32.1666C3.41151 29.5024 3.65535 23.1806 3.65535 20.2365C3.65535 17.2923 3.42054 10.9615 4.46815 8.30638C5.17258 6.53628 6.53628 5.17258 8.31541 4.45912C10.9796 3.40248 17.3014 3.64632 20.2455 3.64632C23.1897 3.64632 29.5205 3.41151 32.1756 4.45912C33.9457 5.16355 35.3094 6.52725 36.0229 8.30638C37.0795 10.9706 36.8357 17.2923 36.8357 20.2365C36.8357 23.1806 37.0795 29.5115 36.0229 32.1666Z"
                      fill="white"
                    />
                  </svg>{" "}
                </Link>
                <Link
                  href="/"
                  className="flex bg-zinc-800 hover:bg-zinc-700 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 50 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48.2914 5.42617C47.7242 3.29031 46.0529 1.60817 43.9308 1.03731C40.0845 0 24.661 0 24.661 0C24.661 0 9.23767 0 5.39122 1.03731C3.26918 1.60826 1.59788 3.29031 1.03063 5.42617C0 9.29754 0 17.3748 0 17.3748C0 17.3748 0 25.4521 1.03063 29.3234C1.59788 31.4593 3.26918 33.0713 5.39122 33.6422C9.23767 34.6795 24.661 34.6795 24.661 34.6795C24.661 34.6795 40.0844 34.6795 43.9308 33.6422C46.0529 33.0713 47.7242 31.4593 48.2914 29.3234C49.322 25.4521 49.322 17.3748 49.322 17.3748C49.322 17.3748 49.322 9.29754 48.2914 5.42617ZM19.6167 24.7083V10.0413L32.5076 17.375L19.6167 24.7083Z"
                      fill="white"
                    />
                  </svg>{" "}
                </Link>
                <Link
                  href="/"
                  className="flex bg-zinc-800 hover:bg-zinc-700 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.5695 0H2.88093C1.29145 0 0 1.30951 0 2.91705V37.5424C0 39.1499 1.29145 40.4594 2.88093 40.4594H37.5695C39.159 40.4594 40.4594 39.1499 40.4594 37.5424V2.91705C40.4594 1.30951 39.159 0 37.5695 0ZM12.2281 34.6795H6.23148V15.371H12.2372V34.6795H12.2281ZM9.22981 12.7339C7.30618 12.7339 5.75283 11.1715 5.75283 9.2569C5.75283 7.3423 7.30618 5.77992 9.22981 5.77992C11.1444 5.77992 12.7068 7.3423 12.7068 9.2569C12.7068 11.1805 11.1534 12.7339 9.22981 12.7339ZM34.7066 34.6795H28.7099V25.2871C28.7099 23.0474 28.6648 20.1665 25.5942 20.1665C22.4694 20.1665 21.9908 22.6049 21.9908 25.1246V34.6795H15.9941V15.371H21.7469V18.0081H21.8282C22.632 16.4908 24.5918 14.8923 27.5088 14.8923C33.5777 14.8923 34.7066 18.8931 34.7066 24.095V34.6795Z"
                      fill="white"
                    />
                  </svg>{" "}
                </Link>
                <Link
                  href="/"
                  className="flex bg-zinc-800 hover:bg-zinc-700 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.92687 46.2394V25.5581H0V17.3398H6.92687V10.8644C6.92687 3.8292 11.2257 0 17.5023 0C20.5097 0 23.0926 0.225778 23.8422 0.32512V7.67646H19.4892C16.0754 7.67646 15.4161 9.30206 15.4161 11.6772V17.3398H23.1197L22.063 25.5581H15.4161V46.2394"
                      fill="white"
                    />
                  </svg>{" "}
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full mt-2 lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled flex flex-col gap-1 mt-2">
                    <li>
                      <Link className="font-semibold  w-max text-sm" href="/">
                        About me
                      </Link>
                    </li>
                    <li>
                      <Link className="font-semibold  w-max text-sm" href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-semibold  w-max text-sm"
                        href="https://www.github.com/omer-os"
                      >
                        Github
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-semibold  w-max text-sm"
                        href="/projects"
                      >
                        my projects
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full mt-8 lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="font-semibold  w-max text-sm"
                        href="/contact"
                      >
                        Contact Me
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-zinc-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright ©{" "}
                <span id="get-current-year">{new Date().getFullYear()}</span>
                <Link
                  href="https://github.com/omer-os"
                  className="hover:text-zinc-400 mx-1"
                  target="_blank"
                >
                  omar chatin
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
