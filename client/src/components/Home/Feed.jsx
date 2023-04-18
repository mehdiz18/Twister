import ListTwist from "./Twist/ListTwist";
import NewTwist from "./Twist/NewTist";
const Feed = ({ twists, addTwist }) => {
  return (
    <>
      <NewTwist addTwist={addTwist} />
      <ListTwist twists={twists} />
    </>
  );
};

export default Feed;
