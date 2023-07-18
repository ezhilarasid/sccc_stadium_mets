import React from "react";
import Button from "@mui/material/Button";

const ButtonBox = ({ variant, disabled, handleClick, buttonName }) => {
  return (
    <Button variant={variant} disabled={disabled} onClick={handleClick}>
      {buttonName}
    </Button>
  );
};

export default ButtonBox;
