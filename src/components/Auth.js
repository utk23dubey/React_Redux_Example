import classes from "./Auth.module.css";
import { Component } from "react";
import { useDispatch, connect } from "react-redux";
import * as actionTypes from "../store/auth/action";

// const Auth = () => {
//   const dispatch = useDispatch();
//   const login = (e) => {
//     e.preventDefault();
//     dispatch(authActions.login());
//   };
//   return (
//     <main className={classes.auth}>
//       <section>
//         <form>
//           <div className={classes.control}>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" />
//           </div>
//           <div className={classes.control}>
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />
//           </div>
//           <button onClick={login}> Login</button>
//         </form>
//       </section>
//     </main>
//   );
// };

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  login(e) {
    e.preventDefault();
    this.props.login();
  }

  componentDidMount() {
    console.log("Component is mounted");
  }
  componetWillUnmount() {
    console.log("Component is unmounted");
  }
  render() {
    return (
      <main className={classes.auth}>
        <section>
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button onClick={this.login.bind(this)}> Login</button>
          </form>
        </section>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({ type: actionTypes.login }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
