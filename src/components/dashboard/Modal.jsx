const Modal = ({ isOpen, setIsOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black bg-opacity-50">
      <div className="relative w-full max-w-md mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none dark:bg-[#071114]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
