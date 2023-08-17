import React, { Fragment, useState } from "react";
import StudentTable from "./StudentTable";
import { Home } from "../Home";
import { insertStudent, updateStudentData } from "../../Controller/StudentController";

export const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [status, setStatus] = useState(false);
  const [flag,setFlag]= useState(0)
  // Function to receive the object from the child
  const receiveObjectFromChild = (object) => {
    setFlag(1)
    setStudent({
      ...student,
      id:object.id,
      name: object.name,
      email: object.email,
      mobile: object.mobile,
    });
  };

  const onChangeFeild = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitStudent = async (student) => {
   
    if(flag===0){
       await insertStudent(student);
      setStatus(true);
    }else{
     await updateStudentData(student)
     setStatus(true)
    }
   
  };

  if (status) {
    return <Home />;
  }

  return (
    <>
      <h1 className="text-center p-3 mb-2 bg-primary text-white">
        Student CRUD Application
      </h1>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-4 ">
            <h3 className="text-center">Student Form</h3>
            <div class="container p-2">
              <input
                type="text"
                className="form-control"
                value={student.name}
                placeholder="Name"
                name="name"
                onChange={(e) => onChangeFeild(e)}
              />
            </div>
            <div class="container p-2">
              <input
                type="email"
                className="form-control"
                value={student.email}
                placeholder="Email"
                name="email"
                onChange={(e) => onChangeFeild(e)}
              />
            </div>
            <div class="container p-2">
              <input
                type="text"
                className="form-control"
                value={student.mobile}
                placeholder="Mobile"
                name="mobile"
                onChange={(e) => onChangeFeild(e)}
              />
            </div>
            <div class="p-2 text-center">
              <button
                className="btn btn-outline-primary btn-lg"
                onClick={() => onSubmitStudent(student)}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="col-md-8 ">
            <StudentTable sendDataToParent={receiveObjectFromChild} />
          </div>
        </div>
      </div>
    </>
  );
};
