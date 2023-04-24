import axios from "axios";
import { useEffect, useState } from "react";

const useFeedTwists = (userId) => {
  let [twists, setTwists] = useState([]);

  const fetchMessages = async (userId) => {
    let messages = await axios.get(
      `http://127.0.0.1:5000/api/messages/${userId}`
    );
    return messages.data;
  };

  useEffect(() => {
    (async () => {
      try {
        let l = [];
        let friends = await axios.get(
          `http://127.0.0.1:5000/api/friends/${userId.current}`
        );
        if (friends.data.length !== 0) {
          for (let friendship of friends.data) {
            let arr = [];
            if (friendship.friend1._id !== userId.current) {
              arr = await fetchMessages(friendship.friend1._id);
            } else {
              arr = await fetchMessages(friendship.friend2._id);
            }
            l = l.concat(arr);
          }
          setTwists(l);
        }
      } catch (error) {}
    })();
  }, []);

  return twists;
};

export default useFeedTwists;
