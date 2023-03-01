
import classes from "./AddUser.module.css"
import Card from "../UI/Card"
import Button from "../UI/Button"
import { useState } from "react"
const AddUser=(props)=>{
    const[enteredUserName,setEnteredUserName]=useState("");
    const[enteredUserAge,setEnteredUserAge]=useState("");
    const addUserHandler=(event)=>{
        event.preventDefault();
        let userInfo={
            username:enteredUserName,
            age:enteredUserAge
        }
        console.log(userInfo);
        setEnteredUserAge("");
        setEnteredUserName("");
    }
    const updateUsername=(event)=>{
        setEnteredUserName(event.target.value);
    }
    const updateUserAge=(event)=>{
        setEnteredUserAge(event.target.value);
    }


    return(
        <Card  className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={updateUsername} value={enteredUserName}></input>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" onChange={updateUserAge} value={enteredUserAge}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;