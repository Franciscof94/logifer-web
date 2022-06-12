import { useEffect, useState } from "react";


export const useResize = () => {
const [show, setShow] = useState(false);
const [isPhone, setIsPhone] = useState(
  window.innerWidth < 768 ? true : false
)


const hideHeader = () => {
  if (window.scrollY > 90) {
    setShow(true);
  } else {
    setShow(false);
  }
};

useEffect(() => {
  window.addEventListener("scroll", hideHeader);
  return () => window.removeEventListener("scroll", hideHeader);
}, []);


const handleResize = () => {
  if (window.innerWidth < 768) setIsPhone(true)
  else setIsPhone(false)
}

useEffect(() => {
  handleResize()
  window.addEventListener("resize", handleResize)
  return () => window.removeEventListener("resize", handleResize)
})

return { show, isPhone }
};