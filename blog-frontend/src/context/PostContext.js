import React, { createContext, useReducer } from "react";

export const postContext = createContext();

export const postsReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        posts: action.payload,
      };
    case "CREATE_POST":
      return {
        posts: [action.payload, ...state.posts],
      };
    // case "DELETE_POST":
    //   return {
    //     posts: state.posts.filter((p) => p._id !== action.payload._id),
    //   };

    default:
      return state;
  }
};

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, {
    posts: [],
  });

  console.log("PostContext state:", state);

  return (
    <postContext.Provider value={{ ...state, dispatch }}>
      {children}
    </postContext.Provider>
  );
};
