import {} from "@mui/material";
import SinglePost from "./SinglePost";
import {} from "@mui/icons-material";
import { useContext } from "react";
import { BigContext } from "./GlobalContext";
import { Textbox } from "./Profile";

const style1 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "27px",
};

export default function HomePage() {
  const { allPosts } = useContext(BigContext);
  // const [checked, setChecked] = React.useState(false);
  // const handleChange = () => {
  //   console.log("hello1");
  //   setChecked((prev) => !prev);
  //   console.log("hello2");
  // };

  return (
    <div>
      <div style={style1}>
        <Textbox></Textbox>
      </div>
      {allPosts
        // .filter((x) => x.post_by === currUser.id)
        .slice(0)
        .reverse()
        .map((x, i) => (
          <div key={i} style={style1}>
            <SinglePost
              post_id={x.post_id}
              post_by={x.post_by}
              post_text={x.post_text}
              time={x.time}
              likes={x.likes}
              retweets={x.retweets}
              comments={x.comments}
              commentsArray={x.commentsArray}
            ></SinglePost>
          </div>
        ))}
      {/* <div style={style1}>
        <SinglePost />
      </div>
      <div style={style1}>
        <SinglePost />
      </div>
      <div style={style1}>
        <SinglePost />
      </div> */}
    </div>
  );
}
