import axios from "axios";

//to get all students from db
export const getAllStudents = async () => {
  try {
    const result = await axios.get(`http://localhost:8000/data`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

//to insert new student record
export const insertStudent = async(student)=>{
  try {
   const result = await axios.post(`http://localhost:8000/data`,student)
   return result
  } catch (error) {
    console.log(error);
  }
}
//to delete student record
export const deleteStudent=async(id)=>{
  try {
    const result =await axios.delete(`http://localhost:8000/data/${id}`)
    return result
  } catch (error) {
    console.log(error);
  } 
}

//to update student record
export const updateStudent = async(id)=>{
    try {
      const result = await axios.get(`http://localhost:8000/data/${id}`);
      return result.data;
    } catch (error) {
      console.log(error);
    }
}

export const updateStudentData = async(formData)=>{
  let id = formData.id
 
 const data = {
    name:formData.name,
    email:formData.email,
    mobile:formData.mobile
 }
  try {
   const result = await axios.put(`http://localhost:8000/data/${id}`,data)
   console.log(result);
  } catch (error) {
    console.log(error);
  }
}