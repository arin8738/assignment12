/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthorizationPage/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";
import { Bars } from "react-loader-spinner";


const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loader){
        return <div className="flex justify-center items-center mt-20 min-h-[45vh]">
        <Bars
          height="80"
          width="80"
          color="#ff6799"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    }

    if (user) {
        return children;
      }
    
      return <Navigate to="/login" state={{ from: location.pathname }} replace></Navigate>;
};

export default PrivateRoute;