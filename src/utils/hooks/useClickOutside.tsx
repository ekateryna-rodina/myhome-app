import { useEffect } from "react";

const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handler: any
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
  }, [ref, handler]);
};

export default useClickOutside;
