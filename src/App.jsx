import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout
import MainLayout from './layout/MainLayout';

// pages
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/SIgnup';
import Counter from './pages/Counter';

// components
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

  const user = true

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoutes user={user}>
        <MainLayout />
      </ProtectedRoutes>,
      children: [
        {
          index: true,
          element: <Counter />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ],
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
  ])

  return <RouterProvider router={routes} />
}

export default App