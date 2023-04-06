import { React } from "react";

const ToastMessage = (props) => {
  const { textColor, message } = props;

  return (
    <>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          color: textColor ? textColor : "#fff",
          marginBlock: "10px",
        }}
      >
        {message}
      </span>
    </>
  );
};

export default ToastMessage;
