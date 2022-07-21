import React, { Component } from 'react'
import './styles.css'
import AddEmployee from './AddEmployee'
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddEmployeePage: false,
            employeeList: [
                {
                    firstName: "Venkat",
                    lastName: "Ravichandran",
                    dob: "18-Mar-1997",
                    designation: "Senior software engineer",
                    profilePhoto: "",
                    exp: "4"
                },
                {
                    firstName: "Sai",
                    lastName: "Krishna",
                    dob: "20-Jun-2002",
                    designation: "Associate",
                    profilePhoto: "",
                    exp: "2"
                },
                {
                    firstName: "Pranav",
                    lastName: "Dakshin",
                    dob: "12-Aug-2005",
                    designation: "Software engineer",
                    profilePhoto: "",
                    exp: "3"
                }
            ]
        }
    }

    showEmployeeHandler = () => {
        this.setState(
            this.state = {
                ...this.state,
                showAddEmployeePage: true
            })
    }

    addEmployeeHandler = (value) => {
        console.log("value-->", value)
        this.setState(
            this.state = {
                showAddEmployeePage: false,
                employeeList: [...this.state.employeeList, value]
            })
    }


    deletHandler = (data,index) => {
        console.log(data)
        this.setState(
            this.state = {
                showAddEmployeePage: false,
                employeeList:[...this.state.employeeList,this.state.employeeList.splice(index)]
            })
    }

    render() {

        return (<><h2 className="text-center">Home</h2>

            {(this.state.showAddEmployeePage) ?
                (<AddEmployee addEmployeeHandler={this.addEmployeeHandler} />)
                :
                <>
                    <button onClick={this.showEmployeeHandler}>Add Employee</button>
                    {this.state.employeeList.map((data, index) => {
                        return <div className='employeeDetail' key={data.firstName}>
                            <span>{data.firstName}</span>
                            <span>{data.lastName}</span>
                            <span>{data.dob}</span>
                            <span>{data.designation}</span>
                            <span>{data.profilePhoto}</span>
                            <span>{data.exp}</span>
                            <button onClick={()=>this.deletHandler(data,index)}>Delete</button>
                        </div>
                    })
                    }
                </>
            }

        </>

        );
    }

}

export default Home;