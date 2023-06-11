import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "../../hooks/useSelector";
import { TodoStatus } from "../../services/types/data";
import TodosItem from "./TodosItem/TodosItem";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Todos = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const filterStatus = useSelector((state) => state.todos.filterStatus);
  const filteredTodoList = todoList.filter((todo) =>
    filterStatus === TodoStatus.ALL ? true : filterStatus === todo.status ? true : false,
  );

  return (
    <motion.div className="" variants={containerVariant} initial="hidden" animate="visible">
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length ? (
          filteredTodoList.map((todo, index) => (
            <TodosItem
              key={todo.id}
              todo={todo}
              underline={index !== filteredTodoList.length - 1}
            />
          ))
        ) : (
          <motion.p className="p-4 flex items-center justify-center" variants={childVariant}>
            No tasks yet
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Todos;
