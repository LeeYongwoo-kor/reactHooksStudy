import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete-student":
      const obj = {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
      console.log(obj);
      return obj;
    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

const Reducer = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Attendance</h1>
      <h2>Total Students: {studentsInfo.count}</h2>
      <hr />
      <div>
        <input
          type="text"
          placeholder="Input name!"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            if (!name) return;
            setName("");
            dispatch({ type: "add-student", payload: { name } });
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {studentsInfo.students.map((student) => {
          return (
            <li key={student.id}>
              <span
                style={{
                  textDeoration: student.isHere ? "line-through" : "none",
                  color: student.isHere ? "gray" : "black",
                }}
                onClick={() =>
                  dispatch({ type: "mark-student", payload: student.id })
                }
              >
                {student.name}
                &nbsp;
                <button
                  onClick={() =>
                    dispatch({ type: "delete-student", payload: student.id })
                  }
                >
                  Delete
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reducer;
