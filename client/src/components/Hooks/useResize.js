import { useEffect, useState } from "react";


export const useResize = () => {
const [show, setShow] = useState(false);

const hideHeader = () => {
  if (window.scrollY > 90) {
    setShow(true);
  }
};

useEffect(() => {
  window.addEventListener("scroll", hideHeader);
  return () => window.removeEventListener("scroll", hideHeader);
}, []);

return { show }
};