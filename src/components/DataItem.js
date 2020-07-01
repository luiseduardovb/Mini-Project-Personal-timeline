import React from "react";

//Styling
import { DataWrapper } from "../styles";

const DataItem = (props) => {
  return (
    <DataWrapper>
      <p className="event-year">{props.data.year}</p>
      <p>{props.data.message}</p>
    </DataWrapper>
  );
};

export default DataItem;
