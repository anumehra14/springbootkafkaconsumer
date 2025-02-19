import React, { useEffect ,useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"

export default function ViewStudents() {

  const [students,setStudents]=useState([])
    useEffect(()=>{
    axios.get('http://localhost:8080/api/etutor/getstudents').then(response=>
        {

        setStudents(response.data)
       })

    },[]);
   const  handleEdit=(id)=>{

    }
    const handleDelete = async(id) => {
        console.log("1111111111111");
        
            await axios.delete(`http://localhost:8080/api/etutor/deleteStudent/${id}`)
            setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
        
      };
  return (
    <div className="container mt-5">
        <table className="table table-stripped table-bordered">
         <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department name</th>
            <th>Department location</th>
        </thead>
        <tbody> {students.map((student)=>
          (
            <tr key={student.id}>

                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.mail}</td>
                <td> {student.department?.department_Name || ''}</td>
                <td> {student.department?.location || ''}</td>
                
               <td><button onClick={handleEdit((student.id))}>Edit</button></td> 
               <td><button onClick={()=>handleDelete((student.id))}>Delete</button></td> 
               
         
               </tr> ))}
            </tbody>
        </table>
        
    </div>
  )
}
