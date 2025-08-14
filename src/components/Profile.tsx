import {
  // AppBar,
  Avatar,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  // Toolbar,
  Typography,
} from "@mui/material";
import SinglePost from "./SinglePost";
import {
  AddCircleOutlineRounded,
  Favorite,
  Person,
  // Person2Rounded,
  ReplyAll,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { BigContext } from "./GlobalContext";

const style1 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "27px",
};

export default function Profile() {
  const { currUser, allPosts } = useContext(BigContext);
  const [tabvalue, setTabvalue] = useState(0);
  const handleChangeTab = (_event: React.SyntheticEvent, x: number) => {
    setTabvalue(x);
  };
  // const [checked, setChecked] = React.useState(false);
  // const handleChange = () => {
  //   console.log("hello1");
  //   setChecked((prev) => !prev);
  //   console.log("hello2");
  // };
  // const drawerWidth = 240;

  return (
    <div>
      <div style={{ height: "180px", background: "grey" }}></div>

      <Tabs variant="fullWidth" value={tabvalue} onChange={handleChangeTab}>
        <Tab icon={<Person></Person>} label="All posts"></Tab>
        <Tab icon={<ReplyAll></ReplyAll>} label="Replies" />
        <Tab icon={<Favorite></Favorite>} label="Likes" />
      </Tabs>

      {tabvalue == 0 && (
        <>
          <div style={style1}>
            <Textbox></Textbox>
          </div>
          {allPosts
            .filter((x) => x.post_by === currUser.id)
            .slice(0)
            .reverse()
            .map((x, i) => (
              <div key={i} style={style1}>
                <SinglePost
                  post_id={1}
                  post_by={currUser.id}
                  post_text={x.post_text}
                  time={x.time}
                  likes={0}
                  retweets={0}
                  comments={0}
                  commentsArray={[]}
                ></SinglePost>
              </div>
            ))}
        </>
      )}

      {tabvalue == 1 && <div> hello 2 again</div>}
      {tabvalue == 2 && <div> hello 3</div>}
    </div>
  );
}

export const Textbox = () => {
  const { currUser, setAllPosts, allPosts } = useContext(BigContext);
  const [value, setValue] = useState("");
  let formattedDate: string;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   formattedDate = getFormattedDateTime();
  // }, [value]);

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
              style={{ marginTop: "16px", fontWeight: "bold" }}
            >
              {currUser.name}
            </Typography>
            <Typography
              gutterBottom
              component="div"
              color="#1c1b1d"
              style={{
                marginTop: "16px",
                paddingLeft: "5px",
                fontSize: "15px",
                paddingTop: "4px",
                fontStyle: "italic",
              }}
            >
              @{currUser.username}
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
                style={{ paddingTop: "15px", paddingRight: "30px" }}
                sx={{
                  color: "#1c1b1d",
                  fontSize: "12px",
                }}
              >
                <IconButton
                  onClick={() => {
                    if (value != "") {
                      formattedDate = getFormattedDateTime();
                      let maxPostID = allPosts.length;
                      setAllPosts((x) => [
                        ...x,
                        {
                          post_id: maxPostID + 1,
                          post_by: currUser.id,
                          post_text: value,
                          likes: 0,
                          retweets: 0,
                          comments: 0,
                          time: formattedDate,
                          commentsArray: [],
                        },
                      ]);
                      setValue("");
                      setOpen(true);
                    }
                  }}
                >
                  <AddCircleOutlineRounded
                    color="primary"
                    sx={{ fontSize: "35px" }}
                  ></AddCircleOutlineRounded>
                </IconButton>
              </Typography>
            </div>
          </div>
          <Typography
            // variant="body2"
            // sx={{ color: "#1c1b1d", fontSize: "50px" }}
            style={{ marginLeft: "63px" }}
          >
            <TextField
              id="outlined-basic"
              label=""
              fullWidth
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant="outlined"
              multiline={true}
              rows={3}
              placeholder="Post someting!"
              sx={{
                border: "none",
                "& fieldset": { border: "none" },
                ".MuiInputBase-input": { fontSize: "1.2rem" },
              }}
            />
          </Typography>
        </CardContent>
      </Card>
      {/* <CommentDialog open={open} setOpen={setOpen}></CommentDialog> */}

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Post added!"
        // action={action}
      />
    </div>
  );
};

export function getFormattedDateTime(): string {
  const now = new Date();

  // Format components
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12

  const formattedTime = `${day}.${month}.${year}, ${hours}:${minutes} ${ampm}`;
  return formattedTime;
}
