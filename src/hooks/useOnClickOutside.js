import React from "react";
import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {

    const listener = (event) => {
      console.log(ref.current);
      if (ref.current.contains(event.target)){
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
