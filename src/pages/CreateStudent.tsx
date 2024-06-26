import React from "react";
import { IStudent } from "../interface/Student";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateStudent: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IStudent>({ mode: "all" });

  

    // localStorage.setItem("Student", JSON.stringify(data));

    const createNewStudent = (data: IStudent) => {
      let students: IStudent[] = [];
      const newStudent = JSON.parse(localStorage.getItem("students") as string);
      if (newStudent) {
        data._id = (students.length + 1).toString();
        students = newStudent;
      } else {
        data._id = (0).toString();
      }
      students.push(data);
      console.log(data);
      
      localStorage.setItem("students", JSON.stringify(students));
      // navigate("/student");
    };
  
  return (
    <>
      <div className="create_student_section">
        Lorem, ipsum.
        <form onSubmit={handleSubmit(createNewStudent)}>
          <div>
            <label htmlFor="name"></label>
            <input
              title="name"
              type="text"
              id="name"
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
            />
            <div className="error_message">{errors.name?.message}</div>
          </div>
          <div>
            <div>
              <label htmlFor="age">AGE</label>
            </div>
            <input
              title="age"
              type="number"
              id="age"
              {...register("age", {
                required: { value: true, message: "Age is required" },
                valueAsNumber: true,
              })}
            />
            <div className="error_message">{errors.age?.message}</div>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              title="phone"
              type="number"
              id="phone"
              {...register("phone", {
                required: { value: true, message: "Phone is required" },
                valueAsNumber: true,
              })}
            />
            <div className="error_message">{errors.phone?.message}</div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              title="email"
              type="text"
              id="email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
            />
            <div className="error_message">{errors.email?.message}</div>
          </div>

          <button title="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateStudent;
