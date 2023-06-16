const post = (state = {}, action) => {
  switch (action.type) {
    case "DELETEPOST":
      return action.payload;
    case "ADDPOST":
      return action.payload;
    case "GETPOST":
      return action.payload;
    case "EDITPOST":
      return action.payload;
    default:
      return state;
  }
};

export default post;
