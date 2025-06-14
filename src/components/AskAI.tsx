import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { BigContext } from "./GlobalContext";
import { useNavigate } from "react-router";
import { getFormattedDateTime } from "./Profile";

export default function AskAI() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const {
    setCurrUser,
    setAllUsers,
    allUsers,
    setAllPosts,
    setAllCommentsMap,
    allCommentsMap,
  } = useContext(BigContext);
  const navigate = useNavigate();

  // initialize dummy data
  const initialize = (name: string, username: string) => {
    const maxid = allUsers.length;
    // console.log("maxid ", maxid);
    setAllUsers((x) => [
      ...x,
      { id: maxid + 1, name: name, username: username },
      { id: maxid + 2, name: "Parth", username: "parth123" },
      { id: maxid + 3, name: "Puneet", username: "puneet_23" },
      { id: maxid + 4, name: "Chinmay", username: "che9945" },
      { id: maxid + 5, name: "Rohit Sharma", username: "rohit47" },
      { id: maxid + 6, name: "Light Yagami", username: "iamgod" },
    ]);

    const max_com = allCommentsMap.size;
    setAllCommentsMap((x) => {
      const newMap = new Map(x);
      newMap.set(max_com + 1, {
        comment_by: 2,
        comment_text: "this is a comment",
        likes: 0,
        replies: 0,
        retweets: 0,
        parent_id: null,
        parent_post_id: 2,
      });
      newMap.set(max_com + 2, {
        comment_by: 2,
        comment_text: "this is a comment",
        likes: 0,
        replies: 0,
        retweets: 0,
        parent_id: null,
        parent_post_id: 2,
      });
      newMap.set(max_com + 3, {
        comment_by: 2,
        comment_text: "this is a comment in a comment",
        likes: 0,
        replies: 0,
        retweets: 0,
        parent_id: max_com + 2,
        parent_post_id: null,
      });
      newMap.set(max_com + 4, {
        comment_by: 2,
        comment_text: "this is a comment in a comment which is in a comment",
        likes: 0,
        replies: 0,
        retweets: 0,
        parent_id: max_com + 3,
        parent_post_id: null,
      });
      return newMap;
    });

    const maxid_post = allUsers.length;
    setAllPosts((x) => [
      ...x,
      {
        post_id: maxid_post + 1,
        post_by: maxid + 2,
        post_text: "Gods of death love apples",
        comments: 0,
        commentsArray: [],
        likes: 0,
        retweets: 0,
        time: getFormattedDateTime(),
      },
      {
        post_id: maxid_post + 2,
        post_by: maxid + 3,
        post_text:
          "Second rule: A name and a face are required to kill a person",
        comments: 0,
        commentsArray: [],
        likes: 0,
        retweets: 0,
        time: getFormattedDateTime(),
      },
      {
        post_id: maxid_post + 3,
        post_by: maxid + 4,
        post_text: "I will become the God of the new world",
        comments: 0,
        commentsArray: [],
        likes: 0,
        retweets: 0,
        time: getFormattedDateTime(),
      },
      {
        post_id: maxid_post + 4,
        post_by: maxid + 5,
        post_text:
          "First rule: any person whose name is written in the deathnote shall die",
        comments: 0,
        commentsArray: [],
        likes: 0,
        retweets: 0,
        time: getFormattedDateTime(),
      },
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
            setCurrUser({
              id: 1, // currUser will have id = 1
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
