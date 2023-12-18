import "./ExploreContainer.css";
import { useState } from "react";
import Page2 from "../pages/page2";
import { IonNavLink } from "@ionic/react";
import axios from "axios";
import { useEffect, useRef } from "react";

interface ContainerProps {
  name: string;
}
const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  interface typeData {
    id: number;
    nom: string;
  }
  const [data, setData] = useState<[typeData]>();
  if (name == "Projet") {
    let nom = useRef("");

    //create new project
    const subProject = () => {
      axios
        .post(`http://127.0.0.1:3333/`, {
          nom: nom.current,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.error(res);
        });
    };

    //Delete project
    const deleteData = (id: number) => {
      axios
        .delete(`http://127.0.0.1:3333/${id}`)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((res) => {
          console.error(res);
        });
    };

    // Display project
    useEffect(() => {
      axios
        .get("http://127.0.0.1:3333/")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
    return (
      <div id="container">
        <form onSubmit={subProject}>
          <input
            placeholder="Nom du projet"
            onChange={(e) => (nom.current = e.target.value)}
          />
          <button id="est">Ajouter</button>
        </form>
        <h4>Liste de projets</h4>
        <div style={{ marginTop: 20 }}>
          <div id="projet">
            {data?.map((item) => (
              <div key={item.id}>
                <IonNavLink component={() => <Page2 id={item.id} />}>
                  {item.nom}
                </IonNavLink>
                <button onClick={() => deleteData(item.id)}>Fait</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Mauvaise requete</div>;
  }
};

export default ExploreContainer;
