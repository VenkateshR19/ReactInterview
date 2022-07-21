import React, { useRef } from "react"
const AddEmployee = (props) => {

    const fn = useRef();
    const ln = useRef();
    const dob = useRef();
    const desig = useRef();
    const pi = useRef();
    const exp = useRef();
    const handleFormSubmit = (e) => {
        console.log("props",props)

        props.addEmployeeHandler(
            {
                firstName: fn.current.value,
                lastName: ln.current.value,
                dob: dob.current.value,
                designation: desig.current.value,
                profilePhoto: pi.current.value,
                exp: exp.current.value,
            },
        )
        e.preventDefault();
    }

    return (
        <form>
            <div>
                <label>First Name</label>
                <input ref={fn} type="text" />
            </div>
            <div>
                <label>Last Name</label>
                <input ref={ln} type="text" />
            </div>
            <div>
                <label>DOB</label>
                <input ref={dob} type="text" />
            </div>
            <div>
                <label>Designation</label>
                <input ref={desig} type="text" />
            </div>
            <div>
                <label>Profile</label>
                <input ref={pi} type="text" />
            </div>
            <div>
                <label>Exp</label>
                <input ref={exp} type="text" />
            </div>
            <div>
                <button onClick={handleFormSubmit}>Add Employee</button>
            </div>
        </form>
    )
}

export default AddEmployee