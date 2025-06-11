import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { BigContext } from "./GlobalContext";
import { useNavigate } from "react-router";

export default function AskAI() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { setCurrUser, setAllUsers, allUsers, currUser } =
    useContext(BigContext);
  const navigate = useNavigate();

  // initialize dummy data
  const initialize = (name: string, username: string) => {
    const maxid = allUsers.length;
    setAllUsers((x) => [
      ...x,
      { id: maxid + 1, name: name, username: username },
      { id: maxid + 2, name: "Parth", username: "parth123" },
      { id: maxid + 3, name: "Puneet", username: "puneet_23" },
      { id: maxid + 4, name: "Chinmay", username: "che9945" },
      { id: maxid + 5, name: "Rohit Sharma", username: "rohit47" },
      { id: maxid + 6, name: "Light Yagami", username: "iamgod" },
    ]);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // width: "25%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />
        <TextField
          id="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          size="large"
          style={{ borderRadius: "20px" }}
          onClick={() => {
            const maxid = allUsers.length;
            setCurrUser({
              id: maxid,
              name: name,
              username: username,
            });
            initialize(name, username);
            navigate("/Profile");
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
