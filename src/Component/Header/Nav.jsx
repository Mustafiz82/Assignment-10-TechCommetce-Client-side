import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg"

const Nav = () => {
	const ul = (
		<div className="flex gap-5">
			<Link to="/">
				<li>Home</li>
			</Link>
			<Link to="/AddProduct">
				<li>Add Product</li>
			</Link>
			<Link to="/cart">
				<li>My Cart</li>
			</Link>
			<Link to="/login">
				<li>Login</li>
			</Link>
			<Link to="/Registration">
				<li>Registration</li>
			</Link>
		</div>
	);
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{ul}
						</ul>
					</div>
					<div className="flex items-center ">
            <img src={logo} className="w-10 h-10" alt="" />
            <a className="btn btn-ghost normal-case text-xl">TechCommerce</a>
          </div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{ul}</ul>
				</div>
				<div className="navbar-end">
					<a className="btn">Button</a>
				</div>
			</div>
		</div>
	);
};

export default Nav;
