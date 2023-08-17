import React, { useEffect, useState } from 'react'
import { deleteStudent, getAllStudents, updateStudent } from '../../Controller/StudentController'

const StudentTable = (props) => {
  
    const [student,setStudent]=useState([])

    const getData =async()=>{
      const result = await getAllStudents()
      setStudent(result.data)
  }

    useEffect(()=>{
        getData()
    },[])

    const onDeleteStudent = (id)=>{
     deleteStudent(id)
      getData()
    }

    const onUpdateStudent=async(id)=>{
      const result = await updateStudent(id)
      props.sendDataToParent(result)
    }

  return (
   <>
   <h3 className="text-center">Student Table</h3>
        <div className="container">
        <table className="table table-striped border text-center">
        <thead>
          <tr>
            <th >ID</th>
            <th >Name</th>
            <th >Email</th>
            <th>Mobile</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
        {
            student.map((item,i)=>
            <tr key={i}>
            <th>{item.id}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td className="d-flex justify-content-evenly">
            <button className="btn btn-outline-warning" onClick={()=>onUpdateStudent(item.id)}><i className="bi bi-pencil-fill"/></button>
            <button className="btn btn-outline-danger" onClick={()=>onDeleteStudent(item.id)}> <i className="bi bi-archive"/></button>
            </td>
            </tr>
            )
            
        }
        </tbody>
      </table>
        </div>
   </>
  )
}

export default StudentTable