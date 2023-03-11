import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const domElement = document.getElementById('portal');

  return (
    createPortal(children, domElement)
  );
}

export default Portal;
