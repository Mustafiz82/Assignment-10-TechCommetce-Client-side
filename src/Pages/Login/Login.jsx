import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import "../../App.css";
import image from "../../assets/5196871.jpg";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
	const { EmailSignIn, GoogleSignIn } = useContext(AuthContext);
	const [error, setError] = useState("");
	const location = useLocation();
	const Navigate = useNavigate();
	const [Eye, setEye] = useState(false);

	const handleEye = () => {
		setEye(!Eye);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const Email = e.target.Email.value;
		const Pass = e.target.Pass.value;

		console.log(Email, Pass);

		EmailSignIn(Email, Pass)
			.then((result) => {
				const user = result.user;
				console.log(user);
				Navigate(location.state || "/");
			})
			.catch((error) => setError(error.message));
	};
	const handleGoogelLogin = () => {
		GoogleSignIn()
			.then((result) => {
				const user = result.user;
				Navigate(location.state || "/");
				console.log(user);
			})
			.catch((error) => setError(error.message));
	};

	return (
		<div className="bg-image md:p-20">
			<div className={`  bg-white	  bg-no-repeat`}>
				<div className="grid md:grid-cols-2 ">
					<div className="text-center lg:text-left">
						<img
							src={image}
							className="h-[500px] "
							alt=""
						/>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
						<form
							onSubmit={handleSubmit}
							className=" card-body"
						>
							<h1 className="text-2xl text-center ">
								Please Login{" "}
							</h1>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="email"
									name="Email"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>

								<div className="relative flex ">
									<input
										type={Eye ?   "text": "password"}
										placeholder="password"
										className="input w-full input-bordered"
										required
										name="Pass"
									/>
									<div onClick={handleEye} className="absolute right-5 top-3">
										{Eye ? (
											<AiOutlineEye
												size={28}
											></AiOutlineEye>
										) : (
											<AiOutlineEyeInvisible
												size={28}
											></AiOutlineEyeInvisible>
										)}
									</div>
								</div>

								<p className="text-red-500 mt-6">{error}</p>
							</div>
							<div className="form-control mt-2">
								<button
									type="submit"
									className="btn btn-primary"
								>
									Login
								</button>
							</div>
							<div className="form-control mt-2">
								<button
									onClick={handleGoogelLogin}
									className="btn btn-primary"
								>
									Cohntinue with google
								</button>
							</div>
							<div className="form-control mt-6">
								<h1>
									Don't have an accoutn ?{" "}
									<Link
										className="font-bold py-4"
										to="/Registration"
									>
										Sign Up
									</Link>
								</h1>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
