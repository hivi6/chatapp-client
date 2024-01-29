import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  ArrowLeftStartOnRectangleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  Cog6ToothIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { Link, Route, Routes } from "react-router-dom";

const MoreOptions = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const optionsButtonRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (
      optionsButtonRef.current &&
      !optionsButtonRef.current.contains(e.target)
    ) {
      setIsOptionsOpen(false);
    }
  };

  return (
    <div className="relative z-10">
      <button
        ref={optionsButtonRef}
        onClick={() => setIsOptionsOpen((prev) => !prev)}
        className={twMerge(
          "w-10",
          "h-10",
          "flex",
          "items-center",
          "justify-center",
          "rounded-full",
          !!isOptionsOpen ? "bg-gray-700" : "",
          "hover:bg-gray-700",
          "transition-all"
        )}
      >
        <EllipsisVerticalIcon className="w-7 h-7 text-gray-400" />
      </button>
      <div
        className={twMerge(
          "absolute",
          "right-0",
          !!isOptionsOpen ? "mt-2" : "mt-1",
          !!isOptionsOpen ? "max-h-[200px]" : "max-h-0",
          !!isOptionsOpen ? "border" : "border-0",
          "border-gray-600",
          "bg-gray-800",
          "rounded-sm",
          "overflow-clip",
          "transition-all",
          "ease-linear",
          "duration-200",
          "min-w-48"
        )}
      >
        <div // TODO: handle settings
          onClick={() => {}}
          className="p-2 m-1 cursor-pointer text-gray-400 hover:gap-2 hover:text-white hover:bg-gray-900 transition-all flex gap-1 rounded-sm active:bg-gray-950"
        >
          <Cog6ToothIcon className="w-6 h-6" /> Settings
        </div>
        <div // TODO: handle logout
          className="p-2 m-1 cursor-pointer text-gray-400 hover:gap-2 hover:text-white bg-red-800 hover:bg-red-900 transition-all flex gap-1 rounded-sm active:bg-red-950"
        >
          <ArrowLeftStartOnRectangleIcon className="w-6 h-6" /> Log out
        </div>
      </div>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="h-full w-full p-2 gap-1 flex flex-col overflow-y-auto overflow-x-clip">
      {Array(10)
        .fill(0)
        .map(() => (
          <>
            <div className="cursor-pointer flex w-full pt-2.5 pb-2.5 pl-1 pr-1 rounded-lg gap-2 items-center hover:bg-gray-800">
              <div className="block">
                <Link className="w-10 h-10 border rounded-full flex justify-center items-center text-gray-300 border-indigo-900 hover:bg-gray-900 transition-all">
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)]}
                </Link>
              </div>
              <div className="pl-1 w-full overflow-hidden text-nowrap">
                <div className="text-gray-300 flex justify-between">
                  <div className="overflow-hidden text-ellipsis">Username</div>
                  <div className="text-xs text-gray-500 overflow-hidden text-ellipsis pr-2">
                    12:21
                  </div>
                </div>
                <div className="text-gray-400 text-sm overflow-hidden text-ellipsis">
                  {
                    ["Long Sample Messageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "Short msg"][Math.floor(Math.random() * 2)]
                  }
                </div>
              </div>
            </div>
            <div className="h-1 w-full border-t border-indigo-800 border-opacity-40"></div>
          </>
        ))}
    </div>
  );
};

const Settings = () => {
  return (
    <div className="border flex h-full before:top-full top-0 transition-all">
      Settings
    </div>
  );
};

const Chats = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-indigo-600 to-indigo-900 flex overflow-clip">
        <div className="h-full w-1/3 max-w-lg min-w-96 bg-gray-900 flex flex-col border-r-[1px] border-r-gray-700">
          <header className="bg-gray-800 h-16 flex w-full justify-between items-center p-3">
            <Link className="w-10 h-10 border rounded-full flex justify-center items-center text-gray-300 border-gray-600 hover:bg-gray-900 transition-all">
              T
            </Link>
            <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 text-indigo-600" />
            <MoreOptions />
          </header>
          <Routes>
            <Route index element={<Contacts />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
        <div className="flex-grow">Chat area</div>
      </div>
    </>
  );
};

export default Chats;
