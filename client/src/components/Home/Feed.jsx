import ListTwist from "./Twist/ListTwist";
import NewTwist from "./Twist/NewTist";
const Feed = ({ twists, addTwist, userId }) => {
  return (
    <>
      <NewTwist addTwist={addTwist} userId={userId} />
      <ListTwist twists={twists} userId={userId}/>
    </>
  );
};

export default Feed;
