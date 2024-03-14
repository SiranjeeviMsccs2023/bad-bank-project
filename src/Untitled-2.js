import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./context";
import "./styles.css";

export default function Signin() {
  const [show, setShow] = useState(true);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const ctx = useContext(UserContext);

  function validate(field, label) {
    // Validation logic remains the same
  }

  function handleCreate() {
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    if (!validate(age, 'age')) return;
    if (!validate(gender, 'gender')) return;

    ctx.users.push({ name, email, password, age, gender, balance: 0 });
    setShow(false);
    alert('Successfully Created');
  }

  function refreshForm() {
    setName('');
    setEmail('');
    setPassword('');
    setAge('');
    setGender('');
    setShow(true);
  }

  return (
    <>
      <div className="card" id="form">
        {show ? (
          <>
            <div className="wholepage">
              <div className="card1">
                <div className="colfont">Create User Account</div>
                <div className="cardbody ">
                  <form>
                    <div className="cardtext">
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                        required
                      />
                    </div>
                    <br />
                    <div className="cardtext">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        required
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <br />
                    {/* <div className="cardtext">
                      <label htmlFor="age">Age</label>
                      <input
                        type="number"
                        className="form-control"
                        id="age"
                        placeholder="Enter Age"
                        value={age}
                        onChange={(e) => setAge(e.currentTarget.value)}
                        required
                      />
                    </div>
                    <br />
                    <div className="cardtext">
                      <label htmlFor="gender">Gender</label>
                      <select
                        className="form-control"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.currentTarget.value)}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <br /> */}
                    <div className="cardtext">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        required
                      />
                    </div>
                    <br />
                    
                   
                    <center>
                      <button
                        type="submit"
                        className="btn-primary1"
                        disabled={!name || !email || !password || !age || !gender}
                        onClick={handleCreate}
                      >
                        Submit
                      </button>
                    </center>
                  </form>
                  <br />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h5>Successfully Account Created</h5>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={refreshForm}
            >
              Add another account
            </button>
            <br />
          </>
        )}
      </div>
    </>
  );
}