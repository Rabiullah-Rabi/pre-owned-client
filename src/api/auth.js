export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
    role: user.role,
  };
  //save user in database
console.log(process.env.REACT_APP_SERVER);
  fetch(`http://localhost:1357/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("pre-owned_token", data.token);
    });
};
