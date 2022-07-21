import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Textarea,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

import { BiCalendar } from "react-icons/bi";
import { FaSortAmountUp } from "react-icons/fa";

export default function DetailForm({ initialRef, isOpen, onClose }) {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [priorityLevel, setPriorityLevel] = useState(1);
  const [dateTime, setDateTime] = useState(new Date());
  const [isOpenDateTime, setIsOpenDateTime] = useState(false);

  const handleSubmit = async () => {
    await axios
      .post("tasks", {
        content: content,
        description: description,
        priority: priorityLevel,
        due_date: format(dateTime, "yyyy-MM-dd"),
      })
      .then((response) => {})
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {});
  };

  const handleChangeDateTime = (e) => {
    setIsOpenDateTime(!isOpenDateTime);
    setDateTime(e);
  };
  const handleClickDateTime = (e) => {
    e.preventDefault();
    setIsOpenDateTime(!isOpenDateTime);
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      size={"xl"}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="bg-white dark:bg-black text-black dark:text-white">
          Add New Task
        </ModalHeader>
        <ModalBody
          pb={6}
          className="bg-white dark:bg-black text-black dark:text-white"
        >
          <FormControl>
            <InputGroup>
              <Input
                placeholder="Write something you want to do..."
                onChange={(e) => setContent(e.target.value)}
              />
              <InputRightElement
                mr={10}
                children={
                  <BiCalendar
                    color="#FFB700"
                    size={25}
                    onClick={(e) => {
                      handleClickDateTime(e);
                    }}
                  />
                }
              />
              <InputRightElement
                mr={2}
                children={
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={<FaSortAmountUp color="#FFB700" size={25} />}
                      bg="inherit"
                      _hover={"inherit"}
                      _active={"inherit"}
                    />
                    <MenuList bg="inherit" border={"none"} _hover={"inherit"}>
                      <MenuItem
                        bg="#FF4D00"
                        borderRadius={"full"}
                        _hover={"inherit"}
                        hover
                        _active={"inherit"}
                        onClick={() => setPriorityLevel(4)}
                      >
                        Level 4
                      </MenuItem>
                      <MenuItem
                        bg="#FF7A00"
                        borderRadius={"full"}
                        _hover={"inherit"}
                        _active={"inherit"}
                        onClick={() => setPriorityLevel(3)}
                      >
                        Level 3
                      </MenuItem>
                      <MenuItem
                        bg="#FFB700"
                        borderRadius={"full"}
                        _hover={"inherit"}
                        _active={"inherit"}
                        onClick={() => setPriorityLevel(2)}
                      >
                        Level 2
                      </MenuItem>
                      <MenuItem
                        bg="#FFDE59"
                        borderRadius={"full"}
                        _hover={"inherit"}
                        _active={"inherit"}
                        onClick={() => setPriorityLevel(1)}
                      >
                        Level 1
                      </MenuItem>
                    </MenuList>
                  </Menu>
                }
              />
            </InputGroup>
            {isOpenDateTime && (
              <DatePicker
                selected={dateTime}
                onChange={(e) => handleChangeDateTime(e)}
                minDate={new Date()}
                inline
              />
            )}
          </FormControl>
          <FormControl my={6}>
            <Textarea
              placeholder="Description"
              resize={"none"}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <span className="py-2 px-4 rounded-full bg-[#FFF8E5] dark:bg-[#221D10]">
            {format(dateTime, "dd-MM-yyyy")}
          </span>
          <span className="py-2 px-4 mx-4 rounded-full bg-[#FFF8E5] dark:bg-[#221D10]">
            {priorityLevel === 4
              ? "Level 4"
              : priorityLevel === 3
              ? "Level 3"
              : priorityLevel === 2
              ? "Level 2"
              : "Level 1"}
          </span>
        </ModalBody>

        <ModalFooter className="bg-white dark:bg-black text-black dark:text-white">
          <Button colorScheme="yellow" mr={3} onClick={() => handleSubmit()}>
            Submit
          </Button>
          <Button colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
