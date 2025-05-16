export const saveUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  
  export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };
  
  export const logout = () => {
    localStorage.removeItem("user");
  };
  
  export const isAuthenticated = () => {
    return !!getUserFromLocalStorage();
  };