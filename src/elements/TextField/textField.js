import * as React from "react";
import { TextField, Tooltip } from "@mui/material";
import useStyles from "./styles.js";

const INF_TextField = (props) => {
  const { name, type, value, onChange, tooltip, tooltipText } = props;
  const { inputText } = useStyles();
  return (
    <Tooltip
      title={tooltipText ? tooltipText : ""}
      arrow
      open={tooltip ? tooltip : false}
      placement={"top"}
    >
      <TextField
        className={inputText}
        variant="outlined"
        placeholder={name}
        type={type}
        onChange={onChange}
        value={value}
        size="small"
      />
    </Tooltip>
  );
};

export default INF_TextField;
