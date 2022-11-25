const { useQuery } = require("@tanstack/react-query");

export const useCategories = () => {
  const url = `${process.env.REACT_APP_SERVER}/categories`;
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
    console.log(data);
};
