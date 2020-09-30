import React, { useEffect, useState, useContext } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import dataT from "./types";
import InsertData from "./form";
import { Link } from "react-router-dom";
import { OriginalData, DataContext } from "./oData";

//const id1: number = uuid();

function TableName() {
  const try100 = useContext(DataContext);

  // console.log(try100);
  console.log("try this");
  console.log(try100.state.statex);
  const x = try100.state.statex;

  // if (x) {
  //   console.log(x.id);
  // }

  const [lessons, setLessons] = useState<dataT[]>([]);

  useEffect(() => {
    // console.log("useEffect");
    // console.log(x);

    {
      x.map((c) =>
        setLessons((prevLessons) => [
          ...prevLessons,
          {
            id: c.id,
            name: c.name,
            mobile: c.mobile,
            address: c.address,
          },
        ])
      );
    }
  }, [try100]);

  // const addData = () => {
  //   setLessons((prevLessons) => [
  //     ...prevLessons,
  //     { id: 0, name: "", mobile: "", address: "" },
  //   ]);
  // };

  //fix these
  // const xxx = useContext(DataContext);

  // useEffect(() => {
  //   console.log(xxx);
  // });
  // console.log(xxx);
  return (
    <div className="new">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            <TableCell>Employee Name</TableCell>
            <TableCell>Employee Mobile</TableCell>
            <TableCell>Employee Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lessons.map((lesson) => (
            <TableRow key={lesson.id}>
              <TableCell>{lesson.id}</TableCell>
              <TableCell>{lesson.name}</TableCell>
              <TableCell>{lesson.mobile}</TableCell>
              <TableCell>{lesson.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Link to="/form">
        <Button className="btn btn-primary">Add Employee</Button>
      </Link>
      <InsertData />
    </div>
  );
}

export default TableName;
