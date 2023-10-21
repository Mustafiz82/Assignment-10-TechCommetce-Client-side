import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import '../../App.css';
import image from '../../assets/5196871.jpg'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

// import { useNavigate } from "react-router-dom";


const Registration = () => {
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const [Eye, setEye] = useState(false);

	const handleEye = () => {
		setEye(!Eye);
	};

    const {EmailSignUp , profile , GoogleSignIn} = useContext(AuthContext)
    // console.log(EmailSignUp);

	const handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.Name.value;
		const Email = e.target.Email.value;
		const Pass = e.target.Pass.value;

		const patternPass =
		/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
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
				Swal.fire(
					'Rgestration Successfull!',
					``,
					'success'
				  )
				navigate('/')
				
            })
            .catch(error => setError(error.message))
		}
	};

    const handleGoogelLogin = () => {
       GoogleSignIn()
       .then(result => {
        const user = result.user
        console.log(user);
    })
    .catch(error => setError(error.message))
    }

	return (
		<div className="bg-image p-20">
			<div  className={`  bg-white	  bg-no-repeat`} >
				<div  className="grid grid-cols-2 ">
				<div className="text-center lg:text-left">
						<img src={image} className='h-[500px] ' alt="" />
						
					</div>
					<div className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
						<form
							onSubmit={handleSubmit}
							className="card-body"
						>
							<h1 className="text-2xl text-center"> Please Register</h1>
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
                            <div>
                                <p className="text-red-600">{error}</p>
                            </div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="btn btn-primary"
								>
									Registration
								</button>
							</div>
							<div className="form-control mt-2">
								<button onClick={handleGoogelLogin}
									
									className="btn btn-primary"
								>
									Cohntinue with google
								</button>
							</div>
							<div className="form-control mt-6">
								<h1>
									Already have an accoutn ?{" "}
									<Link className="font-bold py-4" to="/login">Sign in</Link>
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
