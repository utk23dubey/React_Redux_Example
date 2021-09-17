import classes from "./UserProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as actionTypes from "../store/employee/action";

const UserProfile = () => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employees);
  console.log(employee);
  useEffect(() => {
    dispatch({ type: actionTypes.employees_requested });
  }, []);
  return (
    <main className={classes.profile}>
      <h2>My Users</h2>
      <ul className={classes.value}>
        {employee.employees.map((emp) => (
          <li key={emp.id}>{emp.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default UserProfile;
