import React from "react";

//Styling
import { ListWrapper } from "../styles";

//Components
import DataItem from "./DataItem";

//Data
import data from "../data";

const DataList = () => {
  const dataList = data.map((data) => <DataItem data={data} key={data.id} />);
  return <ListWrapper>{dataList}</ListWrapper>;
};

export default DataList;
