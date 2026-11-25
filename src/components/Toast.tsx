type ToastProps = {
  message: string;
  type: "success" | "warning" | "error";
};

function ToastMessage({ message, type }: ToastProps) {
  const backgroundColor = type === "success" ? "bg-green-700" : "bg-red-700";
  return (
    <div
      role="status"
      className={`fixed top-5 right-4 z-50 rounded-lg px-4 py-2 text-white shadow-lg ${backgroundColor}`}
    >
      {message}
    </div>
  );
}

export default ToastMessage;
