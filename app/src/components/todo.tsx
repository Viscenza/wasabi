import { useState } from "react";
interface ContainerProps {
  name: string;
}
import { IonNavLink } from "@ionic/react";

const TodoContainer = () => {
  const [test, setTest] = useState(0);
  function changeValue() {
    setTest(test + 1);
  }
  return <div id="container">Test</div>;
};

export default TodoContainer;
