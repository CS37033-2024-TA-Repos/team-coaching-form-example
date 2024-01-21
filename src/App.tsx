import React from 'react';
import './App.css';
import EmployeeFeedbackForm from "./routes/EmployeeFeedbackForm";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Homepage from "./routes/Homepage";

function App() {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Root />,
            children: [
                {
                    path:"",
                    element: <Homepage />,
                },
                {
                    path:"EmployeeFeedbackForm",
                    element: <EmployeeFeedbackForm />
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router}/>
    );

    function Root() {
        return (
          <div className={"root"}>
              <Outlet />
          </div>
        );
    }
}

export default App;
