import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const Login = () => {
    const {EmailSignIn , GoogleSignIn} = useContext(AuthContext)
    const [error , setError] = useState("")
    const location = useLocation()
    const Navigate = useNavigate()





    const handleSubmit = (e) => {
        e.preventDefault()
        const Email = e.target.Email.value
        const Pass = e.target.Pass.value

        console.log( Email , Pass )

        EmailSignIn(Email , Pass )
        .then(result => {
            const user = result.user
            console.log(user);
            Navigate(location.state || "/")
        })
        .catch(error => setError(error.message))

       
    }
    const handleGoogelLogin = () => {
        GoogleSignIn()
        .then(result => {
         const user = result.user
         Navigate(location.state || "/")
         console.log(user);
     })
     .catch(error => setError(error.message))
     }

    return (
        <div>
            
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Login now!</h1>
						
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={handleSubmit} className="card-body">
							
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

                                <p className='text-red-500'>{error}</p>
							
							</div>
							<div className="form-control mt-6">
								<button type="submit" className="btn btn-primary">
									Login
								</button>
                                
							</div>
                            <div className="form-control mt-6">
								<button onClick={handleGoogelLogin}
									
									className="btn btn-primary"
								>
									Cohntinue with google
								</button>
							</div>
							<div className="form-control mt-6">
								<h1>Don't have an accoutn ? <Link to="/Registration">Sign Up</Link></h1>
							</div>
						</form>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Login;