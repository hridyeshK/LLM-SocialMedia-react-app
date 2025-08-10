import {
  ArrowDownward,
  ArrowUpward,
  BookmarkBorderOutlined,
  ChatBubbleOutlineOutlined,
  FavoriteBorder,
  Repeat,
  Send,
  // SubdirectoryArrowRightRounded,
} from "@mui/icons-material";
import {
  Avatar,
  CardActions,
  Dialog,
  Grow,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import SingleComment from "./SingleComment";
import { useContext, useState } from "react";
import {
  actualCommentType,
  // commentType,
  postType,
} from "../Types/all.interface";
import { BigContext } from "./GlobalContext";
// import { useState } from "react";

export default function CommentDialog(props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  post: postType;
}) {
  // const [open, setOpen] = useState(props.open);
  const { allUsers, allCommentsMap } = useContext(BigContext);
  const [commentsClicked, setCommentsClicled] = useState<boolean>(true);
  const name = allUsers.filter((x) => x.id === props.post.post_by)[0]?.name;
  // const username = allUsers.filter((x) => x.id === props.post.post_by)[0]?.username;
  console.log(props.post);
  // const AllComments = props.post.commentsArray.map((x, i) => (
  //   <RecursiveDialog key={i} comment={x}></RecursiveDialog>
  // ));
  const newCommentArray = Array.from(allCommentsMap).filter(
    (x) => x[1].parent_id == null && x[1].parent_post_id == props.post.post_id
  );
  const AllComments = newCommentArray.map((x, i) => (
    <RecursiveDialog key={i} parentID={x[0]} comment={x[1]}></RecursiveDialog>
  ));

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="lg"
        open={props.open}
        // TransitionComponent={Grow}
        slots={{ transition: Grow }} // Use slots.transition for the Grow effect
        slotProps={{
          transition: {
            // timeout: 1000,
          },
        }}
      >
        {/* <DialogTitle>Comments</DialogTitle> */}
        {/* for comments section and post side-by-side, use flex */}
        {/* <DialogContent style={{ height: "80vh", display: "flex" }}> */}
        <DialogContent style={{ height: "80vh" }}>
          {/* <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText> */}
          {/* <div style={{ width: "50%", padding: "3px" }}> */}
          <div style={{ padding: "3px" }}>
            <div style={{ display: "flex" }}>
              <Avatar
                src="https://mui.com/static/images/avatar/1.jpg"
                style={{ marginRight: "16px" }}
                sx={{ width: 60, height: 60 }}
              />
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                style={{ marginTop: "16px" }}
              >
                {name}
              </Typography>
            </div>
            <Typography
              variant="body2"
              sx={{ color: "#1c1b1d", fontSize: "24px" }}
              style={{ marginLeft: "76px" }}
            >
              {props.post.post_text}
            </Typography>

            <CardActions
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <IconButton>
                <FavoriteBorder
                  color="primary"
                  sx={{ fontSize: "35px" }}
                ></FavoriteBorder>
              </IconButton>
              <IconButton>
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
              <IconButton>
                <BookmarkBorderOutlined
                  color="primary"
                  sx={{ fontSize: "35px" }}
                ></BookmarkBorderOutlined>
              </IconButton>
            </CardActions>
          </div>

          <TextField
            size="small"
            style={{ borderRadius: "50%" }}
            InputProps={{
              style: {
                borderRadius: "50px",
              },
            }}
          ></TextField>

          <div>
            <Button
              variant="text"
              style={{ fontWeight: "bold" }}
              endIcon={
                commentsClicked ? (
                  <ArrowDownward />
                ) : (
                  <ArrowUpward></ArrowUpward>
                )
              }
              onClick={() => {
                setCommentsClicled(!commentsClicked);
              }}
            >
              COMMENTS
            </Button>

            {commentsClicked ? AllComments : ""}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              props.setOpen(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const RecursiveDialog = (props: {
  parentID: number;
  comment: actualCommentType;
}) => {
  const { allCommentsMap } = useContext(BigContext);
  const [commentsClicked, setCommentsClicled] = useState<boolean>(false);
  const OneCommentArray = Array.from(allCommentsMap).filter(
    (x) => x[1].parent_id == props.parentID
  );

  return (
    <>
      {/* <div style={{ width: "50%" }}> */}
      <div>
        <SingleComment comment_id={props.parentID}></SingleComment>

        <TextField
          size="small"
          style={{ marginLeft: "30px" }}
          InputProps={{
            style: {
              borderRadius: "50px",
            },
          }}
        ></TextField>

        <div style={{ display: "flex" }}>
          <div
            style={{
              // height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: "inherit",
            }}
          >
            {/* <IconButton>
              <SubdirectoryArrowRightRounded
                color="primary"
                sx={{ fontSize: "45px" }}
              ></SubdirectoryArrowRightRounded>
            </IconButton> */}
          </div>

          <Button
            variant="text"
            style={{
              fontWeight: "bold",
              paddingLeft: "30px",
              height: "50%",
              marginRight: "10px",
            }}
            endIcon={
              commentsClicked ? <ArrowDownward /> : <ArrowUpward></ArrowUpward>
            }
            onClick={() => {
              setCommentsClicled(!commentsClicked);
            }}
          >
            Show Replies
          </Button>

          {commentsClicked ? (
            <div style={{ marginLeft: "30x" }}>
              {OneCommentArray.map((x, i) => (
                <RecursiveDialog
                  key={i}
                  parentID={x[0]}
                  comment={x[1]}
                ></RecursiveDialog>
              ))}
            </div>
          ) : (
            ""
          )}

          {/* <div style={{ marginLeft: "30px" }}>
            {props.comment.commentsArray.map((x, i) => (
              <RecursiveDialog key={i} comment={x}></RecursiveDialog>
            ))} */}
        </div>
      </div>
    </>
  );
};
