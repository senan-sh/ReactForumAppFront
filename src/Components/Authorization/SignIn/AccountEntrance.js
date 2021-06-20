import Login from "./Login";
import Register from "./Register";

// Conditional Rendering
export default function AccountEntrance({ register }) {
  if (register === true) {
    return <Login />;
  } else {
    return <Register />;
  }
}
