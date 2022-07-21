import { useState } from "react";
import axios from "axios";

import { Checkbox, Button, ButtonGroup } from "@chakra-ui/react";
import { MdDelete, MdModeEdit } from "react-icons/md";

export default function Task({ id, completed, content, date, priority }) {
  const [isClose, setIsClose] = useState(completed);

  const handleDelete = async () => {
    axios.delete(`tasks/${id}`);
  };

  return (
    <div className="w-full my-2 rounded-full bg-[#FFF8E5] dark:bg-[#221D10] inline-flex justify-between items-center py-2 px-4">
      <div className="w-48 lg:w-96 inline-flex items-center">
        <Checkbox
          checked={isClose}
          colorScheme="#FFB700"
          size="lg"
          className="bg-white dark:bg-black"
        />
        <h1
          className={
            isClose
              ? "line-through font-extrabold w-full mx-2"
              : "font-extrabold w-full mx-2"
          }
        >
          {content}
        </h1>
      </div>
      <div className="hidden md:w-1/4 md:flex justify-evenly items-center">
        <span>{date}</span>{" "}
        <span>
          {priority === 4
            ? "Level 4"
            : priority === 3
            ? "Level 3"
            : priority === 2
            ? "Level 2"
            : "Level 1"}
        </span>
      </div>
      <div className="">
        <ButtonGroup variant="solid" spacing={2} size="md">
          <Button
            _hover={"inherit"}
            _active={"inherit"}
            bg="#FFB700"
            px="2px"
            onClick={() => {
              handleDelete();
            }}
          >
            <MdDelete size={35} />
          </Button>
          <Button bg="#FFB700" px="2px" _hover={"inherit"} _active={"inherit"}>
            <MdModeEdit size={35} />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
