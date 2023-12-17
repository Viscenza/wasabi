import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface ContainerProps {
  id: number;
}

interface ContainerProps {
  id_todo: number;
}
const TodoContainer: React.FC<ContainerProps> = ({ id }) => {
  const typeData = { id: 0, project_id: 0, content: "", stat: false };
  const [data, setData] = useState([typeData]);
  const content = useRef("");

  //create new project
  const subTodo = () => {
    axios
      .post(`http://127.0.0.1:3333/${id}/todo`, {
        content: content,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.error(res);
      });
  };

  //Delete Todo
  const deleteData = (id_todo: number) => {
    axios
      .delete(`http://127.0.0.1:3333/${id}/todo/${id_todo}`)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.error(res);
      });
  };

  // Display project
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3333/${id}`)
      .then((res) => {
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
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.content}</p>
          <button onClick={() => deleteData(item.id)}>fait</button>
        </div>
      ))}
    </div>
  );
};

export default TodoContainer;
