import {
  BookmarkBorderOutlined,
  FavoriteBorder,
  Repeat,
  Reply,
  Send,
  SubdirectoryArrowRightRounded,
} from "@mui/icons-material";
import { Avatar, CardActions, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { BigContext } from "./GlobalContext";

export default function SingleComment(props: { comment_id: number }) {
  const { allUsers, allCommentsMap } = useContext(BigContext);
  // const actualComment = allCommentsMap.get(props.comment.comment_id);
  const name = allCommentsMap.has(props.comment_id)
    ? allUsers.filter(
        (x) => x.id === allCommentsMap.get(props.comment_id)?.comment_by
      )[0]?.name
    : "";
  const username = allCommentsMap.has(props.comment_id)
    ? allUsers.filter(
        (x) => x.id === allCommentsMap.get(props.comment_id)?.comment_by
      )[0]?.username
    : "";

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Avatar
          src="https://mui.com/static/images/avatar/1.jpg"
          style={{ marginRight: "16px", marginTop: "15px" }}
          sx={{ width: 30, height: 30 }}
        />

        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{ marginTop: "16px" }}
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color="#1c1b1d"
          style={{
            marginTop: "15px",
            paddingLeft: "5px",
            fontSize: "15px",
            paddingTop: "4px",
            fontStyle: "italic",
          }}
        >
          @{username}
        </Typography>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ paddingTop: "22px", paddingRight: "30px" }}
            sx={{ color: "#1c1b1d", fontSize: "12px" }}
          >
            14:00 PM, 4 April 2025
          </Typography>
        </div>
      </div>
      <Typography
        variant="body2"
        sx={{ color: "#000000", fontSize: "14px" }}
        style={{ marginLeft: "46px" }}
      >
        {allCommentsMap.get(props.comment_id)?.comment_text ||
          "[Comment Deleted]"}
      </Typography>

      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <IconButton>
          <FavoriteBorder
            color="primary"
            sx={{ fontSize: "25px" }}
          ></FavoriteBorder>
        </IconButton>
        <IconButton>
          <Reply color="primary" sx={{ fontSize: "25px" }}></Reply>
        </IconButton>
        <IconButton>
          <Repeat color="primary" sx={{ fontSize: "25px" }}></Repeat>
        </IconButton>
        <IconButton>
          <Send color="primary" sx={{ fontSize: "25px" }}></Send>
        </IconButton>
        <IconButton>
          <BookmarkBorderOutlined
            color="primary"
            sx={{ fontSize: "25px" }}
          ></BookmarkBorderOutlined>
        </IconButton>
      </CardActions>
    </div>
  );
}
