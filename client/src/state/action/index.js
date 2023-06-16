import axios from "axios";
const url = "http://localhost:5000/";
// let profile = localStorage.getItem("profile");
// profile = JSON.parse(profile);
const register = (data) => async (dispatch) => {
  try {
    const result = await axios.post(url + "user/register", data);
    dispatch({
      type: "REGISTER",
      payload: result?.data,
    });
  } catch {
    dispatch({
      type: "REGISTER",
      payload: "Error Occured",
    });
  }
};

const login = (data) => async (dispatch) => {
  try {
    const result = await axios.post(url + "user/login", data);
    dispatch({
      type: "LOGIN",
      payload: result?.data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN",
      payload: "Error Occured",
    });
  }
};

const addPost = (data, token) => async (dispatch) => {
  try {
    const result = await axios.post(url + "post/", data, {
      headers: {
        "x-access-token": token,
      },
    });
    dispatch({
      type: "ADDPOST",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "ADDPOST",
      payload: { message: error.message },
    });
  }
};

const getPost = (data) => async (dispatch) => {
  try {
    const result = await axios.get(url + "post");
    dispatch({
      type: "GETPOST",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "GETPOST",
      payload: { message: error.message },
    });
  }
};

const deletePost = (data, token) => async (dispatch) => {
  console.log(data);
  try {
    const result = await axios.delete(url + `post/${data}`, {
      headers: {
        "x-access-token": token,
      },
    });
    dispatch({
      type: "DELETEPOST",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "DELETEPOST",
      payload: { message: error.message },
    });
  }
};

const editPost = (data, id, token) => async (dispatch) => {
  try {
    const result = await axios.patch(url + `post/${id}`, data, {
      headers: {
        "x-access-token": token,
      },
    });
    dispatch({
      type: "EDITPOST",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "EDITPOST",
      payload: { message: error.message },
    });
  }
};

export { editPost, deletePost, addPost, getPost, register, login };
