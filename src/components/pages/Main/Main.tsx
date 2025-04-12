import React, { use, useState } from "react";
import './Main.css'
import { Form } from "../../comps/Form/Form";
import DataList from "../../views/local/DataList/DataList";
import { TItem } from "../../../utils/types";

export const Main = () => {

const [items, setItems] = useState<TItem[]>([]);

const addItem = (item: TItem) => {
  setItems([...items, item]);
    console.log(items);
};

    return (
      <>
        <div>
          <Form action={addItem} /> 
          <DataList data={items} />
        </div>
      </>
    )
  }