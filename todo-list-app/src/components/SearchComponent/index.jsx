import { useState } from "react";
import { useDispatch } from "react-redux";
import { reduxAction } from "../../utils/redux/actions/action";

import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

export default function SearchComponent({ data }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    data.filter((todo) => {
      if (query === "") {
        dispatch(reduxAction("SEARCH", data));
      } else if (todo.content.toLowerCase().includes(query.toLowerCase())) {
        dispatch(reduxAction("SEARCH", todo));
      }
    });
  };
  return (
    <>
      <div className="bg-[#FFF8E5] dark:bg-[#221D10] inline-flex items-center py-1 px-4 rounded-full">
        <InputGroup>
          <InputLeftElement children={<MdSearch color="#FFB700" size={15} />} />
          <Input
            border={"inherit"}
            variant="flushed"
            type="text"
            placeholder="Search your task here..."
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </InputGroup>
      </div>
    </>
  );
}
