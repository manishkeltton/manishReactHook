import React from "react";
import ParentComponent from "./ContextComponent";
import Courses from "./ReducerComponent";

const renderReducerHook = () => {
  console.log("Reducer hook pressed");
  return <Courses />;
};

const renderContextHook = () => {
  console.log("Context hook pressed");
  return <ParentComponent />;
};

const ReducerContext = () => {
  return (
    <div className="box">
      {renderReducerHook()}
      {renderContextHook()}
    </div>
  );
};

export default ReducerContext;
