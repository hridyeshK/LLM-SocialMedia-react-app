export interface userType {
    name: string;
    username: string;
    id: number;
  }
  
  export interface commentType {
    comment_id: number;
    comment_by: number;
    comment_text: string;
    likes: number;
    retweets: number;
    replies: number;
    commentsArray: commentType[];
  }
  
  export interface postType {
    post_id: number;
    post_by: number;
    post_text: string;
    likes: number;
    retweets: number;
    comments: number;
    time: string;
    commentsArray: commentType[];
  }
  
  export interface likeSet {
    post_id: number;
    user_id: number;
  }
  
  export interface BookmartSet {
    post_id: number;
    user_id: number;
  }


 