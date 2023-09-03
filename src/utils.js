import toast from 'react-hot-toast';

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const iconToast = (message, icon) => {
  toast(message, {
    icon,
  });
};

// Normal Toasts
const successToast = (message) => {
  toast.success(message);
};

const errorToast = (message) => {
  toast.error(message);
};

const splitString = (str, start, end) => {
  if (start < 0 || end > str.length || start >= end) {
    return str;
  }

  let newStr = `${str.substring(0, start)}...`;
  newStr += str.substring(end);

  return newStr;
};

const formatNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export {
  successToast, errorToast, splitString, iconToast, formatNumber,
};

export default openInNewTab;
