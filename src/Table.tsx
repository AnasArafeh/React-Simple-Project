import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { dataT } from "./types";
import InsertData from "./form";
import { Link } from "react-router-dom";
import { LessonsContext } from "./InitialState";

function TableName() {
  const LessonContext = useContext(LessonsContext);

  const LessonState = LessonContext.state.statex;

  const [lessons, setLessons] = useState<dataT[]>([]);

  useEffect(() => {
    setLessons(LessonState);
  }, [LessonState]);

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
