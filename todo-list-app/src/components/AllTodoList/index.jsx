import { useRef } from "react";
import { useSelector } from "react-redux";

import { useDisclosure } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

import DetailForm from "../DetailForm";
import Task from "../Task";

export default function AllTodoList({ data }) {
  //  const search = useSelector((state) => state.todosSearch);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      {data.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          content={todo.content}
          date={todo.due !== undefined ? todo.due.date : "No Date"}
          priority={todo.priority}
        />
      ))}
      <button
        className="w-full my-4 rounded-full bg-[#FFF8E5] dark:bg-[#221D10] inline-flex items-center py-2 px-4"
        onClick={() => onOpen()}
      >
        <MdAdd color="#FFB700" size={35} />
        <p className="mx-2 font-medium text-xl">
          {data.length !== 0
            ? "Add new activities"
            : `You haven't any task yet. Add new task by click the + button.`}
        </p>
      </button>
      <DetailForm
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
