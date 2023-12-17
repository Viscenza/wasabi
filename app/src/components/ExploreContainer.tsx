import "./ExploreContainer.css";
import { useState } from "react";
interface ContainerProps {
  name: string;
}
import Page2 from "../pages/page2";
import { IonNavLink } from "@ionic/react";

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  if (name == "Projet") {
    const [test, setTest] = useState(0);
    function changeValue() {
      setTest(test + 1);
    }
    return (
      <div id="container">
        <div>
          <input placeholder="Nom du projet" />
          <button onClick={""}>Ajouter</button>
        </div>
        <div>
          <div>
            <IonNavLink component={() => <Page2 />}>test</IonNavLink>
            <button>fait</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Mauvaise requete</div>;
  }
};

export default ExploreContainer;
