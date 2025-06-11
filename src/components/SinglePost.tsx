import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";
import {
  Bookmark,
  BookmarkBorderOutlined,
  ChatBubbleOutlineOutlined,
  Favorite,
  FavoriteBorder,
  Repeat,
  Send,
} from "@mui/icons-material";
import CommentDialog from "./CommentDialog";
import { useContext, useState } from "react";
import { postType } from "../Types/all.interface";
import { BigContext } from "./GlobalContext";

export default function SinglePost(post: postType) {
  const [open, setOpen] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [bookmarkClicked, setBookmarkClicked] = useState(false);
  const { currUser, allUsers } = useContext(BigContext);

  return (
    <div>
      <Card
        sx={{
          maxWidth: 630,
          minWidth: 630,
          // boxShadow: 0,
          // border: 1,
          borderRadius: "27px",
          // borderColor: "primary.main"
        }}
      >
        {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      /> */}
        <CardContent>
          <div style={{ display: "flex" }}>
            <Avatar
              src="https://mui.com/static/images/avatar/1.jpg"
              style={{ marginRight: "16px" }}
              sx={{ width: 60, height: 60 }}
            />

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              // display={"-ms-inline-flexbox"}
              style={{
                marginTop: "7px",
                fontWeight: "bold",
                // display: "flex",
                // flexDirection: "row",
                // wordWrap: "break-word",
              }}
              sx={
                {
                  // whiteSpace: "break-spaces",
                }
              }
            >
              <div>{currUser.name.split(" ")[0]}</div>
              {/* {currUser.name[1]} */}
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              // display={"-ms-inline-flexbox"}
              style={{
                marginTop: "7px",
                marginLeft: "3px",
                fontWeight: "bold",
                // display: "flex",
                // flexDirection: "row",
                // wordWrap: "break-word",
              }}
              sx={
                {
                  // whiteSpace: "break-spaces",
                }
              }
            >
              <div>{currUser.name.split(" ")[1]}</div>
              {/* {currUser.name[1]} */}
            </Typography>

            <Typography
              gutterBottom
              component="div"
              color="#1c1b1d"
              style={{
                marginTop: "9px",
                paddingLeft: "5px",
                fontSize: "15px",
                paddingTop: "4px",
                fontStyle: "italic",
              }}
            >
              {/* @{post.post_by} */}@{currUser.username}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                style={{ paddingTop: "20px", paddingRight: "30px" }}
                sx={{ color: "#1c1b1d", fontSize: "12px" }}
              >
                {post.time}
              </Typography>
            </div>
          </div>
          <Typography
            variant="body2"
            sx={{ color: "#1c1b1d", fontSize: "16px" }}
            style={{ marginLeft: "76px" }}
          >
            {post.post_text}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton
            onClick={() => {
              setLikeClicked((x) => !x);
            }}
          >
            {likeClicked ? (
              <Favorite color="primary" sx={{ fontSize: "35px" }}></Favorite>
            ) : (
              <FavoriteBorder
                color="primary"
                sx={{ fontSize: "35px" }}
              ></FavoriteBorder>
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
          >
            <ChatBubbleOutlineOutlined
              color="primary"
              sx={{ fontSize: "35px" }}
            ></ChatBubbleOutlineOutlined>
          </IconButton>
          <IconButton>
            <Repeat color="primary" sx={{ fontSize: "35px" }}></Repeat>
          </IconButton>
          <IconButton>
            <Send color="primary" sx={{ fontSize: "35px" }}></Send>
          </IconButton>
          <IconButton
            onClick={() => {
              setBookmarkClicked((x) => !x);
            }}
          >
            {bookmarkClicked ? (
              <Bookmark color="primary" sx={{ fontSize: "35px" }}></Bookmark>
            ) : (
              <BookmarkBorderOutlined
                color="primary"
                sx={{ fontSize: "35px" }}
              ></BookmarkBorderOutlined>
            )}
          </IconButton>
        </CardActions>
      </Card>
      <CommentDialog open={open} setOpen={setOpen}></CommentDialog>
    </div>
  );
}
