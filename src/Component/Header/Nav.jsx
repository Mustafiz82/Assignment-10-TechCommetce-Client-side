import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { AuthContext } from "../../Context/Context";

const Nav = () => {
	const { user, logOut } = useContext(AuthContext);
	console.log(user);

	const handleLogOut = () => {
		logOut();
	};
	const ul = (
		<div className="flex gap-5">
			

			<li>
				<NavLink
					to="/"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "text-pink " : ""
					}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/AddProduct"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "text-pink " : ""
					}
				>
					Add Product
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/cart"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "text-pink " : ""
					}
				>
					My Cart
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/Registration"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "text-pink " : ""
					}
				>
					Registration
				</NavLink>
			</li>
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
						<img
							src={logo}
							className="w-10 h-10"
							alt=""
						/>
						<a className="btn btn-ghost normal-case text-xl">
							TechCommerce
						</a>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{ul}</ul>
				</div>
				<div className="navbar-end">
					{!user ? (
						<Link
							to="/login"
							className="btn btn-primary text-white"
						>
							Login
						</Link>
					) : (
						<div className="flex gap-2 items-center">
							{/* {
								user.photoURL ? <img className="w-10 h-10 rounded-full"
								src={user.photoURL }
								alt="" 
							/> : <CgProfile size={40}></CgProfile>
							} */}
							<p>{user.displayName}</p>
							<button
								className="btn btn-primary text-white"
								onClick={handleLogOut}
							>
								LOgOUt{" "}
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Nav;
