import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { dataT, stateX } from "./types";
import "./App";
import { AddItem } from "./action_types";
import { LessonsContext } from "./InitialState";
import TableName from "./Table";

function InsertData() {
  const { register, handleSubmit, errors } = useForm();

  const { dispatch } = useContext(LessonsContext);

  const [FormsData, setFormData] = React.useState<Partial<dataT>>({});

  const UpdateValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...FormsData, [e.target.name]: e.target.value });
  };
  const AddToDoItem = () => ({
    type: AddItem,
    payload: FormsData,
  });

  const onSubmit = () => {
    dispatch(AddToDoItem());
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="id"
          name="id"
          value={FormsData.id}
          onChange={UpdateValues}
          ref={register({ required: true })}
        />
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={FormsData.name}
          onChange={UpdateValues}
          ref={register({ required: true })}
        />
        <input
          type="text"
          placeholder="+962797777777"
          name="mobile"
          value={FormsData.mobile}
          onChange={UpdateValues}
          ref={register({ required: true })}
        />
        {errors.mobile && <p>mobile is invalid</p>}
        <input
          type="text"
          placeholder="City-Country"
          name="address"
          value={FormsData.address}
          onChange={UpdateValues}
          ref={register({ required: true })}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default InsertData;
