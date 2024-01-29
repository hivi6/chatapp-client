import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    loadStuff();
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        navigate("/chats");
      }, 800);
    }
  }, [progress]);

  const loadStuff = () => {
    // for now mocking loading functionality
    const len = 2;
    for (let i = 0; i < len; i++)
      setTimeout(() => {
        setProgress((i + 1) * (100 / 2 + 1));
      }, (i + 1) * 1000);
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col justify-center items-center gap-10">
      <ChatBubbleOvalLeftEllipsisIcon className="w-16 h-16 text-indigo-600" />

      <div className="border border-indigo-500 rounded-md">
        <div className="w-72 rounded-md h-1">
          <div
            className="bg-indigo-600 max-w-full h-1 rounded-md transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
