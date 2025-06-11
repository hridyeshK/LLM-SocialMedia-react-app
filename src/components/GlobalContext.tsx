import { createContext, ReactNode, useContext, useState } from "react";
import {
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
