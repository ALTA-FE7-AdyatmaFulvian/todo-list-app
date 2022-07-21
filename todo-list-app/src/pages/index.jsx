import { useEffect, useState } from "react";
import axios from "axios";

import { Layout } from "../components/Layout";
import AllTodoList from "../components/AllTodoList";
import SearchComponent from "../components/SearchComponent";

export default function Home() {
  const [todosData, setTodosData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    setIsLoading(true);
    axios
      .get("tasks")
      .then((response) => {
        const { data } = response;
        if (data) {
          setTodosData(data);
        }
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(setIsLoading(false));
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-between mb-12">
        <h1 className="mb-4 underline underline-offset-4 decoration-[#FFB700] font-extrabold text-2xl md:text-4xl">
          To Do List
        </h1>
        <SearchComponent data={todosData} />
      </div>
      <AllTodoList data={todosData} />
    </Layout>
  );
}
