import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';

const router = createBrowserRouter(
  //Pass an array of route definition objects
  [
    {path: '/', element: <HomePage/> }
  ]
)


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
