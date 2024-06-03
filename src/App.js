import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

const router = createBrowserRouter(
  //Pass an array of route definition objects
  [
    {
      path: '/', element: <RootLayout />, children: [
        { index: true, element: <HomePage /> },
        { path: '/products', element: <ProductsPage /> },
        // to pass dynamic parameters, we use the ":" followed by the parameter name
        { path: '/products/:productId', element: <ProductDetailPage /> },
      ], errorElement: <ErrorPage />
    },

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
