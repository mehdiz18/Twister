import axios from "axios";
import { useEffect, useState } from "react";
import axiosConfig from "./consts";
const useFeedTwists = (userId) => {
  let [twists, setTwists] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const addTwist = async (content) => {
    console.log(content);
    if (content) {
      try {
        let response = await axios.post(
          "http://127.0.0.1:5000/api/messages",
          {
            content: content,
            userId: userId.current,
          },
          axiosConfig
        );
        let user = await axios.get(
          `http://127.0.0.1:5000/api/users/${userId.current}`
        );

        let newItem = {
          _id: response.data._id,
          content: content,
          user: {
            firstName: user.data.firstName,
            lastName: user.data.lastName,
          },
          likes: 0,
        };
        setTwists([newItem, ...twists]);
      } catch (err) {
        setErrMsg("Erreur Lors de connexion au serveur 0");
        console.log(err);
      }
    } else {
      setErrMsg("Message content should not be Void");
      console.log(errMsg);
    }
  };

  

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
  }, [userId]);

  return [twists, addTwist];
};

export default useFeedTwists;
