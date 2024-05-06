import React, { useEffect, useState } from "react";

const Toast = ({ content }) => {
  const [toastShowing, setToastShowing] = useState(true);
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setToastShowing(false);
  //     }, 3000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [content]);

  return (
    content && (
      <div
        className={`absolute mx-auto top-4 border border-solid border-slate-200 rounded-lg p-2 bg-neutral-100 max-w-[400px] ${
          toastShowing ? "" : "hidden"
        }`}
      >
        <span>{content}</span>
        <span
          className="icon cursor-pointer"
          onClick={() => {
            setToastShowing(false);
            content = null;
          }}
        >
          close
        </span>
      </div>
    )
  );
};

export default Toast;
