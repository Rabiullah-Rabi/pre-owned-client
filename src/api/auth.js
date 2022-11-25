export const setAuthToken = (user) => {
  const currentUser = {
    name: user.name,
    email: user.email,
    role: user.role,
    verified: user.verified,
  };
  //save user in database
// console.log(process.env.REACT_APP_SERVER);
  fetch(`${process.env.REACT_APP_SERVER}/user/${user?.email}`, {
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
