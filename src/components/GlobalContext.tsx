import { createContext, ReactNode, useState } from "react";
import {
  actualCommentType,
  BookmartSet,
  likeSet,
  postType,
  userType,
} from "../Types/all.interface";

interface GlobalContextType {
  currUser: userType;
  setCurrUser: React.Dispatch<React.SetStateAction<userType>>;
  allPosts: postType[];
  setAllPosts: React.Dispatch<React.SetStateAction<postType[]>>;
  SetOfLikes: Set<likeSet>;
  SetSetOfLikes: React.Dispatch<React.SetStateAction<Set<likeSet>>>;
  SetOfBookmarks: Set<BookmartSet>;
  SetSetOfBookmarks: React.Dispatch<React.SetStateAction<Set<BookmartSet>>>;
  allUsers: userType[];
  setAllUsers: React.Dispatch<React.SetStateAction<userType[]>>;
  allCommentsMap: Map<number, actualCommentType>;
  setAllCommentsMap: React.Dispatch<
    React.SetStateAction<Map<number, actualCommentType>>
  >;
}

// const BigContext = createContext();

export const BigContext = createContext<GlobalContextType>({
  currUser: { name: "", username: "", id: 0 },
  setCurrUser: () => {}, // Default no-op function for the setter
  allPosts: [], // Default empty array for posts
  setAllPosts: () => {}, // Default no-op function for the setter
  SetOfLikes: new Set(),
  SetSetOfLikes: () => {}, // Default no-op function for the setter
  SetOfBookmarks: new Set(),
  SetSetOfBookmarks: () => {}, // Default no-op function for the setter
  allUsers: [],
  setAllUsers: () => {},
  allCommentsMap: new Map(), // index of a comment in this array will be same as its comment ID
  setAllCommentsMap: () => {}, // for changing/creating a comment
});

export default function GlobalContext({ children }: { children: ReactNode }) {
  const [currUser, setCurrUser] = useState<userType>({
    name: "",
    username: "",
    id: 0,
  });

  const [allPosts, setAllPosts] = useState<postType[]>([]);
  const [SetOfLikes, SetSetOfLikes] = useState<Set<likeSet>>(new Set());
  const [SetOfBookmarks, SetSetOfBookmarks] = useState<Set<BookmartSet>>(
    new Set()
  );
  const [allUsers, setAllUsers] = useState<userType[]>([]);
  const [allCommentsMap, setAllCommentsMap] = useState<
    Map<number, actualCommentType>
  >(new Map());

  return (
    <div>
      <BigContext.Provider
        value={{
          currUser,
          setCurrUser,
          allPosts,
          setAllPosts,
          SetOfLikes,
          SetSetOfLikes,
          SetOfBookmarks,
          SetSetOfBookmarks,
          allUsers,
          setAllUsers,
          allCommentsMap,
          setAllCommentsMap,
        }}
      >
        {children}
      </BigContext.Provider>
    </div>
  );
}

// export const useGlobalContext = () => {
//   const context = useContext(BigContext);
//   if (context === undefined) {
//     throw new Error(
//       "useGlobalContext must be used within a GlobalContext.Provider"
//     );
//   }
//   return context;
// };
