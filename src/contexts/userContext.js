import { useEffect, useState } from "react";

export const useUser = (email) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  const url = ` ${process.env.REACT_APP_SERVER}/users/${email}`;
  // const url = ` http://localhost:1357/users/fbrabiullah@gmail.com`;
  useEffect(() => {
    if (email) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setUserInfo(data);
          setUserLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [email]);
    console.log(userInfo);
  return [userInfo,userLoading];
};
