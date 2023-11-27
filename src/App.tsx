import { Suspense, lazy } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Quiz from "./pages/Quiz";
import Loader from "./components/loaders/Loader";
// import NotFoundPage from "./pages/NotFoundPage";


function App() {
  
  const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
  const RegistrationPage = lazy(() => import("./pages/auth/RegistrationPage"));
  


  const router = createBrowserRouter([
   
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loader/>}>
          <LoginPage />
        </Suspense>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader/>}>
          <RegistrationPage />
        </Suspense>
      ),
      errorElement: <ErrorPage />,
    },
    
    {
      path: "/quiz",
      element: (
        <Suspense fallback={<Loader/>}>
          <Quiz />
        </Suspense>
      ),
      errorElement: <ErrorPage />,
    },
    
  ])

  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}

export default App
