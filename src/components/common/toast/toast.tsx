// src/utils/toast.ts
import { toast, ToastOptions } from "react-toastify";

const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
};

export const ToastSuccess = (message: string, options?: ToastOptions) =>
  toast.success(message, { ...defaultOptions, ...options });

export const ToastError = (message: string, options?: ToastOptions) =>
  toast.error(message, { ...defaultOptions, ...options });

export const ToastInfo = (message: string, options?: ToastOptions) =>
  toast.info(message, { ...defaultOptions, ...options });
