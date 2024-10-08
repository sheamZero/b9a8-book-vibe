import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import ListedBooks from './pages/ListedBooks/ListedBooks'
import PageToRead from './pages/PageToRead/PageToRead'
import BookDetails from './components/BookDetails/BookDetails'
import { Toaster } from 'react-hot-toast';
import ReadBooks from './components/ReadBooks/ReadBooks'
import WishlistBooks from './components/WishlistBooks/WishlistBooks'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,

      },

      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "",
            element: <ReadBooks></ReadBooks>
          },
          {
            path: "wishlist",
            element: <WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path: "/pageToRead",
        element: <PageToRead></PageToRead>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster
      toastOptions={{
        position: 'top-right',
      }}
    ></Toaster>
  </StrictMode>,
)
