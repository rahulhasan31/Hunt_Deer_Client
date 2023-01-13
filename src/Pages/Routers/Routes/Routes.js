import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import Details from "../../Details/Details";
import Jobs from "../../Home/Jobs/Jobs";
import Login from "../../Login/Login";
import Signup from "../../Signup/Signup";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Jobs></Jobs>,
      },
      
        {
          path:'/details',
          element:<Details/>
        }
      
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
 
]);

export default Routes;
