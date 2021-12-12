import { store } from "react-notifications-component";

export const renderNotification = (title, message, t) => {
  store.addNotification({
    title: title,
    message: message,
    type: t,
    insert: "top",
    container: "bottom-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
    },
  });
};

export const epochToDate = (epoch) => {
  if (epoch < 10000000000) epoch *= 1000;
  var epoch = epoch + new Date().getTimezoneOffset() * -1;
  return new Date(epoch);
};

export const readToken = () => {
  return sessionStorage.getItem("token")
    ? sessionStorage.getItem("token")
    : localStorage.getItem("token");
};
