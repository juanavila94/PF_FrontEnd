import { useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Calendar from "./Views/Calendar/Calendar";
import Dashboard from "./Views/Dashboard";
import Employees from "./Views/Employees";
import EmployeesUser from "./Views/Employees/EmployeesUser";
import EmployeeDetail from "./Views/EmployeeDetail/EmployeeDetail";
import Home from "./Views/Home";
// import Register from "./Components/Register/Register.jsx"
import Register from "./Views/Register";
import EditEmployeeMyProfile from "./Views/MyProfile/EditEmployeMyProfile";
import MyProfile from "./Views/MyProfile/MyProfile";
import MyProfileAdmin from "./Views/MyProfile/MyProfileAdmin";
import MyProfileUser from "./Views/MyProfile/MyProfileUser";
import Notifications from "./Views/Notifications/Notifications";
import Organization from "./Views/Organization";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import SideBar from "./Components/SideBar/SideBar";
import Payment from "./Views/Payment/Payment";
import AddEmployee from "./Views/Employees/AddEmployee/AddEmployee";
import AddFisrtEmployee from "./Views/Employees/AddFirstEmployee/AddFirstEmployee";
import EditEmployee from "./Views/EmployeeDetail/EditEmployee/EditEmployee";
import Authorization from "./Views/Authorization/Authorization";
import Authorizationone from "./Views/Authorization/Authorization1";
import { useSelector } from "react-redux";
import { Squash as Hamburger } from "hamburger-react";
import Form from "./Components/Form/Form";
import CalendarUser from "./Views/CalendarUser/CalendarUser";

import { useCookies } from "react-cookie";
import MyProfileSuperAdmin from "./Views/MyProfile/MyProfileSuperAdmin/MyProfileSuperAdmin";

function App() {
  const [isOpen, setOpen] = useState(true);
  const { pathname } = useLocation();

  const user = useSelector((state) => state.currentEmployee);

  console.log(user);

  const refSideBar = useRef();

  const fn = () => {
    if (isOpen) {
      refSideBar.current.style.transform = "translateX(-100%)";
    } else {
      refSideBar.current.style.transform = "translateX(0)";
    }
  };
  // console.log(isOpen);

  return (
    <div className="flex bg-slate-100">
      <div
        onClick={fn}
        className=" ssm:fixed sm:hidden  ssm:left-4 ssm:top-1 z-20 "
      >
        {/* <button onClick={e => setOpen(true)}>aca</button> */}
        <Hamburger
          toggled={isOpen}
          toggle={() => setOpen(!isOpen)}
          color="#0369a1"
        />
      </div>
      <div
        ref={refSideBar}
        className=" ssm:m-0 z-10 fixed transition-all duration-200 sm:translate-x-0 ssm:-translate-x-full"
      >
        <div>
          {pathname === "/" ||
          pathname === "/home" ||
          pathname === "/home/login" ||
          pathname === "/home/login/register" ||
          pathname === "/addFirstEmployee" ||
          pathname === "/authorizationone" ||
          pathname === "/authorization" ? (
            ""
          ) : (
            <div className="bg-white">
              <SideBar isOpen={isOpen} />
            </div>
          )}
        </div>
      </div>
      {/* <div className="flex-1 pl-16"> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home/login" element={<Login />} /> */}
        <Route path="/home/login/register" element={<Payment />} />
        <Route path="/addFirstEmployee" element={<AddFisrtEmployee />} />
        {/* <Route path="/home/login/register/payment" element={<Payment />} /> */}
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/authorizationone" element={<Authorizationone />} />

        {/* +++++ SUPERADMIN ROUTES +++++ */}
        {!!user && user.role === "SuperAdmin" && (
          <>
            <Route path="/employees/:id" element={<Employees />} />
            <Route path="/employee/:id" element={<EmployeeDetail />} />
            <Route path="/addemployee" element={<AddEmployee />} />
            <Route path="/editemployee/:id" element={<EditEmployee />} />
            <Route
              path="/editemployeemyprofile/:id"
              element={<EditEmployeeMyProfile />}
            />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/myprofile/:id" element={<MyProfileSuperAdmin />} />
            {/* FALTA LA DE EDITAR DATOS DE LA EMPRESA */}
          </>
        )}

        {/* +++++ ADMIN ROUTES +++++ */}

        {!!user && user.role === "Admin" && (
          <>
            <Route path="/employees/:id" element={<Employees />} />
            <Route path="/employee/:id" element={<EmployeeDetail />} />
            <Route path="/addemployee" element={<AddEmployee />} />
            <Route path="/editemployee/:id" element={<EditEmployee />} />
            <Route
              path="/editemployeemyprofile/:id"
              element={<EditEmployeeMyProfile />}
            />
            {/* <Route path="/organization" element={<Organization />} /> */}
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/myprofile/:id" element={<MyProfileAdmin />} />
          </>
        )}

        {/* +++++ USER ROUTES +++++ */}

        {!!user && user.role === "User" && (
          <>
            <Route path="/employees/:id" element={<EmployeesUser />} />
            <Route path="/myprofile/:id" element={<MyProfileUser />} />
            <Route path="/calendar" element={<CalendarUser />} />
          </>
        )}

        {/* +++++ COMMON ROUTES +++++ */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<h1>Ruta equivocada</h1>} />
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;

// <Route element={<ProtectedRoute isAllowed={!!user} />}>
// <Route
//   element={
//     <ProtectedRoute
//       isAllowed={!!user
//         && (
//         user.role === "SuperAdmin"
//         )}
//       redirectTo="/home"
//     />
//   }
// >

/*----------------------------- Calendario User -----------------------------*/
{
  /* <Route path="/calendar" element={<CalendarUser />} /> */
}

/*----------------------------- MyProfile superadmin -----------------------------*/
/* <Route path="/myprofile/:id" element={<MyProfile />} /> */
