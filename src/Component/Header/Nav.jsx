import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { AuthContext } from "../../Context/Context";
import profile from "../../assets/profile.jpg";

const Nav = () => {
	const { user, logOut } = useContext(AuthContext);
	console.log(user);

	const handleLogOut = () => {
		logOut();
	};
	const ul = (
		<div className=" flex flex-col lg:flex-row  ">
			<div className="w-full ">
				<NavLink
					to="/AddProduct"
					className={({ isActive, isPending }) =>
						isPending
							? "btn bg-red"
							: isActive
							? "btn  text-primary"
							: "btn bg-transparent font-normal border-none"
					}
				>
					Add Product
				</NavLink>
			</div>
			<div>
				<NavLink
					to="/cart"
					className={({ isActive, isPending }) =>
						isPending
							? ""
							: isActive
							? "btn text-primary"
							: "btn bg-transparent border-none font-normal"
					}
				>
					My Cart
				</NavLink>
			</div>
			<div>
				<NavLink
					to="/Registration"
					className={({ isActive, isPending }) =>
						isPending
							? "pending"
							: isActive
							? "btn  text-primary"
							: "btn bg-transparent border-none font-normal"
					}
				>
					Registration
				</NavLink>
			</div>
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
							className="flex  dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box "
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
						<NavLink
							to="/"
							className="btn btn-ghost normal-case text-xl"
						>
							TechCommerce
						</NavLink>
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

						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
								{user.photoURL ? (
								<img
									className="w-10 h-10 rounded-full"
									src={user.photoURL}
									alt=""
								/>
							) : (
								<div className="avatar">
									<div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
										<img src={profile} alt="" srcset="" />
									</div>
								</div>
							

							)}
								</div>
							</label>
							<ul
								tabIndex={0}
								className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
							>
								<li >
									<a className="text-xl justify-center mb-5">
									{user.displayName}
									</a>
								</li>
								<div>
								<button
									className="btn btn-primary w-full text-white"
									onClick={handleLogOut}
								>
									LOgOUt{" "}
								</button>
								</div>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Nav;
