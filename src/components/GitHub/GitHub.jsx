import { useEffect, useState } from "react";

function GitHub() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary", {
//       headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

  return (
    <div className="bg-gray-700 text-white text-3xl p-4 w-full flex justify-center">
      Followers:
    </div>
  );
}

export default GitHub;
