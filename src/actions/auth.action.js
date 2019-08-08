import tasks from "../api/tasks";
import { REGISTER, LOGIN, AUTH, LOGOUT, CLEAR_PROGRAMS } from "../types";
//import { clearPrograms } from "./programsActions";
import history from "../history";

export const registerAction = register => {
  return async dispatch => {
    try {
      const res = await tasks.post("/register", register);
      const result = res.data.data;
      if (result) {
        const data = {
          username: result.email,
          password: register.password
        };
        //loginAction(data);
        try {
          const res = await tasks.post("/login", data);
          const result = res.data.access_token;
          console.log(result);

          localStorage.setItem("access_token", result);
          const AUTH_TOKEN = result;
          tasks.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN
          dispatch({
            type: LOGIN,
            payload: result
          });
          if (result) {


            try {

              const res = await tasks.get("/user");
              const result = res.data.data;

              console.log(result);

              dispatch({
                type: AUTH,
                payload: result
              });
            } catch (error) {
              console.log(error);
            }
          }

          history.push("/");
        } catch (error) {
          console.log(error);
        }
      }

      console.log(result);

      dispatch({
        type: REGISTER,
        payload: result
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const loginAction = login => {
  console.log(login);

  return async dispatch => {
    try {
      const res = await tasks.post("/login", login);
      const result = res.data.access_token;
      localStorage.setItem("access_token", result);
      console.log(result);

      dispatch({
        type: LOGIN,
        payload: result
      });
      try {
        const AUTH_TOKEN = localStorage.getItem("access_token");
        tasks.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN
        const res = await tasks.get("/user");
        const result = res.data.data;

        console.log(result);

        dispatch({
          type: AUTH,
          payload: result
        });
      } catch (error) {
        console.log(error);
      }
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
export const userAction = () => {
  console.log("called");

  return async dispatch => {
    try {
      const AUTH_TOKEN = localStorage.getItem("access_token");
      tasks.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN
      const res = await tasks.get("/user");
      const result = res.data;

      console.log(result);

      dispatch({
        type: AUTH,
        payload: result
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const logOut = () => {
  return async dispatch => {
    try {
      const AUTH_TOKEN = localStorage.getItem("access_token");
      tasks.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN
      await tasks.post("/logout");

      dispatch({
        type: LOGOUT
      });
      dispatch({
        type: CLEAR_PROGRAMS
      });
      localStorage.removeItem("access_token");
      history.push("/auth");
    } catch (error) {
      console.log(error);
    }
  };
};
