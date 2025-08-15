import { toast } from "react-toastify";

/**
 * Custom notification component
 * @param {string} message - The message to display in the notification
 */
export const notifySuccess = (message: string) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    style: {
      backgroundColor: "#1E87F0",
    },
  });

/**
 * Custom notification component
 * @param {string} message - The message to display in the notification
 */
export const notifyFailure = (message: string) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    style: {
      backgroundColor: "#F74658",
    },
  });
