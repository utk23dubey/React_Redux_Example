import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <h3 className={classes.value}>Utkarsh Dubey</h3>
    </main>
  );
};

export default UserProfile;
