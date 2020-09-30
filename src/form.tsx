import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import dataT, { actionT } from "./types";
// import TableName from "./Table";
// import onSubmit from "./func";
import { DataContext, OriginalData } from "./oData";
import { Link } from "react-router-dom";
import "./App";

function InsertData() {
  const { register, handleSubmit, errors } = useForm();

  // const OldData = useContext(DataContext);

  // const reducer = (state: dataT[], action: actionT) => {
  //   return [
  //     ...state,
  //     {
  //       id: action.payload.id,
  //       name: action.payload.name,
  //       mobile: action.payload.mobile,
  //       address: action.payload.address,
  //     },
  //   ];
  // };

  // const [NewData, dispatch] = useReducer(reducer, OldData);
  // console.log(NewData);
  //console.log(OldData);

  //e: React.ChangeEvent<HTMLInputElement>
  // const OldData = useContext(DataContext);
  const AddToDoItem = () => ({
    type: "add",
    payload: {
      id: EmData.id!,
      name: EmData.name!,
      mobile: EmData.mobile!,
      address: EmData.address!,
    },
  });
  // App();
  const { dispatch } = useContext(DataContext);

  const [EmData, setEmData] = React.useState<Partial<dataT>>({});

  const onSubmit = () => {
    dispatch(AddToDoItem());
  };

  const UpdateValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault;
    setEmData({ ...EmData, [e.target.name]: e.target.value });
    //console.log(EmData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="id"
        name="id"
        value={EmData.id}
        onChange={UpdateValues}
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        value={EmData.name}
        onChange={UpdateValues}
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="+962797777777"
        name="mobile"
        value={EmData.mobile}
        onChange={UpdateValues}
        ref={register({ required: true })}
      />
      {errors.mobile && <p>mobile is invalid</p>}
      <input
        type="text"
        placeholder="City-Country"
        name="address"
        value={EmData.address}
        onChange={UpdateValues}
        ref={register({ required: true })}
      />

      {/* <Link to="/table"> */}
      <button>Submit</button>
      {/* </Link> */}
    </form>
  );
}

export default InsertData;
