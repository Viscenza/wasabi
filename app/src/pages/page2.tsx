import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import { useParams } from "react-router";
import "./Page.css";
import TodoContainer from "../components/todo";
import { arrowBack } from "ionicons/icons";

const Page2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <a href="/">
              <IonIcon icon={arrowBack} />
            </a>
          </IonButtons>
          <IonTitle>Todo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Todo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TodoContainer />
      </IonContent>
    </IonPage>
  );
};

export default Page2;
