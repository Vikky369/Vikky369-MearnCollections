// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import './LoginStyle.css';
import  {getElementById} from 'react-dom'

function App() {
  return (
    <div className="App">

    
	<div class="container-fluid">
		<div class="row main-content bg-success text-center">
			<div class="col-md-4 text-center company__info">
				<span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
				<h4 class="company_title">Your Company Logo</h4>
			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div class="container-fluid">
					<div class="row">
						<h2>Log In</h2>
					</div>
					<div class="row">
						<form control="" class="form-group" onSubmit={(e)=>login(e)}>
							<div class="row">
								<input type="email" name="email" id="email" class="form__input" placeholder="Enter email"/>
							</div>
							<div class="row">
								
								<input type="password" name="password" id="password" class="form__input" placeholder="Password"/>
							</div>
							{/* <div class="row">
								<input type="checkbox" name="remember_me" id="remember_me" class=""/>
								<label for="remember_me">Remember Me!</label>
							</div> */}
							<div class="row">
								<input type="submit" value="Submit" class="btn"/>
							</div>
							{/* <div class="row">

      <button className="btn btn-primary"> SignUp</button>
</div> */}
						</form>
					</div>
					{/* <div class="row">
						<p>Don't have an account? <a href="#">Register Here</a></p>
					</div> */}
				</div>
			</div>
		</div>
	</div>
	
	{/* <div class="container-fluid text-center footer">
		Coded with &hearts; by <a href="https://bit.ly/yinkaenoch">Yinka.</a>
	</div> */}

   
    </div>
  );
}

function login(e){
	e.preventDefault();
	let request=
		{
			email:document.getElementById('email').value,
			password:document.getElementById('password').value
		}
		axios.post('http://localhost:4000/login',request)
		.then(resp=>{
			alert(resp.data.message);
		})
		.catch(err=>{
			console.log(err);
		})
	
}

export default App;
