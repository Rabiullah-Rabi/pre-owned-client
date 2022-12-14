import { useEffect, useState } from "react";

export const useUser = (email) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  const url = ` ${process.env.REACT_APP_SERVER}/users/${email}`;
  useEffect(() => {
    if (email) {
      fetch(url, {
        authorization: `bearar ${localStorage.getItem("pre-owned_token")}`,
      })
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
  // console.log(userInfo);
  return [userInfo, userLoading];
};
