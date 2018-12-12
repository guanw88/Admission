export const signup = (payload) => {
  if (payload.first_name === undefined) {
    payload.first_name = "Guest"
  }
  if (payload.last_name === undefined) {
    payload.last_name = "Guest"
  }
  if (payload.email === undefined) {
    payload.email = "temporary@eventful.com"
  }
  return $.ajax({
    type: "POST",
    url: "/api/users",
    data: {user: payload}
  });
};

export const login = (payload) => {
  return $.ajax({
    type: "POST",
    url: "/api/session",
    data: {user: payload}
  });
};

export const logout = () => {
  return $.ajax({
    type: "DELETE",
    url: "/api/session"
  });
};
