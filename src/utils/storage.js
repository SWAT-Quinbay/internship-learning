const TOKEN_ROLE = "iam-rl";
const TOKEN_AUTH = "iam-at";
const TOKEN_USERID = "iam-uid";

export const getTokenUserId = () => {
  return atob(localStorage.getItem(TOKEN_USERID));
};

export const setTokenUserId = (value) => {
  localStorage.setItem(TOKEN_USERID, btoa(value));
};

export const deleteTokenUserId = () => {
  localStorage.removeItem(TOKEN_USERID);
};

export const getTokenRole = () => {
  return atob(localStorage.getItem(TOKEN_ROLE));
};

export const setTokenRole = (value) => {
  localStorage.setItem(TOKEN_ROLE, btoa(value));
};

export const deleteTokenRole = () => {
  localStorage.removeItem(TOKEN_ROLE);
};

export const getTokenAuth = () => {
  return atob(localStorage.getItem(TOKEN_AUTH));
};

export const setTokenAuth = (value) => {
  localStorage.setItem(TOKEN_AUTH, btoa(value));
};

export const deleteTokenAuth = () => {
  localStorage.removeItem(TOKEN_AUTH);
};
