import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/myapps" element={<Navigate to="/learn" />}></Route>
        <Route path="/learn" element={<Learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":courseid" element={<CourseId />}>
              <Route path=":courseincourse" element={<CourseInCourse />} />
            </Route>
          </Route>
          <Route path="bundles" element={<Bundles />}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <h1>Home route</h1>
    </div>
  );
}

function Learn() {
  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>Learn route</h1>
      <h2>All courses are here</h2>
      <Link style={{ marginRight: "20px" }} to="/learn/courses">
        courses
      </Link>
      <Link to="/learn/bundles">bundle</Link>
      <br />
      <br />
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ["React", "Angular", "Vue", "Nodejs"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Course list</h1>
      <h4>Course card</h4>
      <NavLink to={`/learn/courses/${randomCourseName}`} > {randomCourseName} </NavLink>
      <Outlet />
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundles list</h1>
      <h4>Bundle card</h4>
    </div>
  );
}

function CourseId() {
  const navigate = useNavigate()
  const { courseid } = useParams();
  return (
    <div>
      <h1>URL Params is: {courseid}</h1>
      <h4>Bundle card</h4>
      <button onClick={() => {
        return navigate('/dashboard', {state:'Belgilangan sahifaga state dan data janatyapmiz'})
      }}> Navigate </button>
      <Link to='courseincourse'>CourseinCourse </Link>
      <br/>
      <br/>
      <Link to='/dashboard' state={'Django'}>Django</Link>
      <Outlet/>
    </div>
  );
}

function CourseInCourse() {
  return (
    <div>
      <h1>URL Params is: CourseinCourse</h1>
      <h4>CourseinCourse card</h4>
    </div>
  );
}

function Dashboard() {
  const location = useLocation()
  return (
    <div>
      <h1>Dashboard malumot olyapti statedan: {location.state}</h1>
      <h4>Dashboard card</h4>
    </div>
  );
}



reportWebVitals();
