import React from "react";
import Todos from "../Todos/Todos";
import TodosFooter from "../Todos/TodosFooter/TodosFooter";
import TodosHeader from "../Todos/TodosHeader/TodosHeader";

const App = () => {
  return (
    <div className="max-w-[600px] px-5 mx-auto">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-[#E9D9D8] text-7xl font-thin">todos</h1>
        <div className="w-full bg-[#FEFEFE] mt-6 box-shadow relative bg-plaza">
          <TodosHeader />
          <div className="flex flex-col">
            <Todos />
          </div>
          <TodosFooter />
        </div>
      </div>
    </div>
  );
};

export default App;
