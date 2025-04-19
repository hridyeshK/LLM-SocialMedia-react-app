import { Fade, FormControlLabel, Grow, Switch } from "@mui/material";
import SinglePost from "./SinglePost";
import React from "react";
import { DevicesFoldSharp, Margin } from "@mui/icons-material";

const style1 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "27px",
};

export default function Profile() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    console.log("hello1");
    setChecked((prev) => !prev);
    console.log("hello2");
  };

  return (
    <div>
      <div style={style1}>
        <SinglePost />
      </div>
      <div style={style1}>
        <SinglePost />
      </div>
      <div style={style1}>
        <SinglePost />
      </div>
    </div>
  );
}

