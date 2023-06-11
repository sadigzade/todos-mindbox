import React from "react";
import Todos from "../Todos/Todos";
import TodosFooter from "../Todos/TodosFooter/TodosFooter";
import TodosHeader from "../Todos/TodosHeader/TodosHeader";

const App = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-[#E9D9D8] text-7xl font-thin">todos</h1>
      <div className="max-w-[600px] w-full bg-[#FEFEFE] mt-6">
        <TodosHeader />
        <div className="flex flex-col">
          <Todos />
        </div>
        <TodosFooter />
      </div>
    </div>
  );
};

export default App;
