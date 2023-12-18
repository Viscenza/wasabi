import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface ContainerProps {
  id: number;
}

interface ContainerProps {
  id_todo: number;
}

const TodoContainer: React.FC<ContainerProps> = ({ id }) => {
  interface typeData {
    id: number;
    project_id: number;
    content: string;
    stat: boolean;
  }
  const [data, setData] = useState<[typeData]>();
  const content = useRef("");
  console.log(id);

  //create new project
  const subTodo = () => {
    axios
      .post(`http://127.0.0.1:3333/${id}/todo`, {
        content: content.current,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.error(res);
      });
  };

  //Delete Todo
  const deleteData = (id_todo: number | undefined) => {
    axios
      .delete(`http://127.0.0.1:3333/${id}/todo/${id_todo}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((res) => {
        console.error(res);
      });
  };

  // Display todo
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3333/${id}/todo`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div id="container">
      <form onSubmit={subTodo}>
        <input
          placeholder="Donner la tache"
          onChange={(e) => (content.current = e.target.value)}
        />
        <button>Ajouter</button>
      </form>
      <h4>Liste des taches</h4>
      {data?.map((item) => (
        <div key={item.id} id="todo">
          <div>{item.content}</div>
          <button onClick={() => deleteData(item.id)}>fait</button>
        </div>
      ))}
    </div>
  );
};

export default TodoContainer;
