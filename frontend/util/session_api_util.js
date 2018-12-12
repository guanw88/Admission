export const signup = (payload) => {
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
