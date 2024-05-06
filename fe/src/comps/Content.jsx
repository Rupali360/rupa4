import React from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  const handleSignOut = async() => {
  };
  return (
    <div className="h-dvh flex justify-center items-center p-4 flex-col container mx-auto">
      <iframe
        className="rounded-lg aspect-video w-full"
        src="https://www.youtube.com/embed/ErMSHiQRnc8"
        title="FRIENDS"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="flex mt-2">
        <button className="bg-blue-gem-500 px-4 py-2 rounded-md font-bold text-blue-gem-50 mr-2" onClick={handleSignOut}>
          Sign out
        </button>
        <button
          className="bg-blue-gem-500 px-4 py-2 rounded-md font-bold text-blue-gem-50"
          onClick={() => {
            navigate("/more");
          }}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Content;
