import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import UpdateProduct from "../MainLayout/UpdateProduct/UpdateProduct";
import Carts from "../Pages/MyCart/Carts";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

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
				element: <PrivateRoute><Carts></Carts></PrivateRoute>
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/Registration",
				element: <Registration></Registration>
			},
			{
				path: "/:Name",
				element: <Products></Products>,
			},
			{
				path: "/:Name/:id",
				element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>
			},
			{
				path: "/:Name/update/:id",
				element: <UpdateProduct></UpdateProduct>
			},
		],
	},
]);
