import axios from "axios";
import { useEffect, useState } from "react";

const useFriends = (userId) => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let l = [];
        let response = await axios.get(
          `http://127.0.0.1:5000/api/friends/${userId.current}`
        );
        for (let fr of response.data) {
          if (fr.friend1._id !== userId.current) {
            l.push(fr.friend1);
          } else {
            l.push(fr.friend2);
          }
        }
        setFriends(l);
      } catch (error) {}
    })();
  }, []);
  return [friends];
};

export default useFriends;
