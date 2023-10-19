import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
// import Home from "../Pages/MyCart/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/AddProduct",
				element: <AddProduct></AddProduct>,
			},
			{
				path: "/cart",
				element: <MyCart> </MyCart>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/:Name",
				element: <Products></Products>,
			},
			{
				path: "/:Name/:id",
				element: <ProductDetail></ProductDetail>,
			},
		],
	},
]);