import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

const router = createBrowserRouter(
  //Pass an array of route definition objects
  [
    { path: '/', element: <HomePage /> },
    { path: '/products', element: <ProductsPage /> }
  ]
);

// Alternative routes definition
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// );


function App() {
  return <RouterProvider router={router} />;
}

export default App;
