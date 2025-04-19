import {
  BookmarkBorderOutlined,
  ChatBubbleOutlineOutlined,
  FavoriteBorder,
  Repeat,
  Send,
} from "@mui/icons-material";
import {
  Avatar,
  CardActions,
  Dialog,
  Grow,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import SingleComment from "./SingleComment";
// import { useState } from "react";


export default function CommentDialog(props: {
  open: boolean, 
  setOpen:  React.Dispatch<React.SetStateAction<boolean>>,
}) {
  // const [open, setOpen] = useState(props.open);

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
        <DialogContent style={{ height: "80vh", display: "flex" }}>
          {/* <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText> */}
          <div style={{ width: "50%", padding: "3px" }}>
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
                Lizard
              </Typography>
            </div>
            <Typography
              variant="body2"
              sx={{ color: "#1c1b1d", fontSize: "24px" }}
              style={{ marginLeft: "76px" }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
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
                <Repeat
                  color="primary"
                  sx={{ fontSize: "35px" }}
                ></Repeat>
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

          <div style={{ width: "50%" }}>
            <SingleComment></SingleComment>
            <SingleComment></SingleComment>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
           onClick={()=>{props.setOpen(false)}}
           >
            Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
