import React, { useRef, useEffect } from "react";

/**
 * Hook that closes the popup when clicked outside of it
 */
export function useOutsideAlerter(ref, onClose) {
  useEffect(() => {
    /**
     * Close the popup if clicked outside of it
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose(); // Call the onClose function to close the popup
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose]);
}