import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

const Registration = () => {
	const [error, setError] = useState("");

    const {EmailSignUp , profile} = useContext(AuthContext)
    // console.log(EmailSignUp);

	const handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.Name.value;
		const Email = e.target.Email.value;
		const Pass = e.target.Pass.value;

		const patternPass =
			/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+~\-=/\\{}\[\]|;:'",.<>?`]).{6,}$/;
		const isValidPass = patternPass.test(Pass);

		if (!isValidPass) {
			setError(
				"The password must be a minimum of 6 characters in length, include at least one uppercase letter, and have at least one special character. "
			);
			return;
		} else {
			
            EmailSignUp(Email , Pass)
            .then(result => {
                const user = result.user
                profile(name)
						.then()
						.catch((error) => setError(error));
                console.log(user);
            })
            .catch(error => setError(error.message))
		}
	};

	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">
							Registration now!
						</h1>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form
							onSubmit={handleSubmit}
							className="card-body"
						>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									placeholder="Name"
									name="Name"
									className="input input-bordered"
									required
								/>
							</div>
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

								<input
									type="password"
									placeholder="password"
									className="input input-bordered"
									required
									name="Pass"
								/>
							</div>
                            <div>
                                <p>{error}</p>
                            </div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="btn btn-primary"
								>
									Registration
								</button>
							</div>
							<div className="form-control mt-6">
								<h1>
									Already have an accoutn ?{" "}
									<Link to="/login">Sign in</Link>
								</h1>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;
