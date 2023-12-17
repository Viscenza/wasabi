import "./ExploreContainer.css";
import { useState } from "react";
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [test, setTest] = useState(0);
  function changeValue() {
    setTest(test + 1);
  }
  return (
    <div id="container">
      <strong>{name}</strong>
      <p>Change ici</p>
      <button onClick={changeValue}>add 1</button>
      <p>{test}</p>
    </div>
  );
};

export default ExploreContainer;
