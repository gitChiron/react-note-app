import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Input = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const { addNote } = useContext(FirebaseContext)

    const submitHandler = (event) => {
        event.preventDefault()
        if (value.trim()) {
            addNote(value.trim()).then(() => {
                alert.show('Note is added', 'success')
            }).catch(() => {
                alert.show('Something goes wrong', 'danger')
            })
            setValue('')
        } else {
            alert.show('Fill the title', 'warning')
        }
    }

    return (
        <div className="navbar navbar-light bg-light header">
            <div className="navbar-brand">Note App</div>
            <form className="input-group ml-5" onSubmit={submitHandler}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Text"
                    aria-label="Text"
                    aria-describedby="button-addon2"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary"
                        type="button"
                        id="button-addon2"
                        onClick={submitHandler}
                    >Add</button>
                </div>
            </form>
        </div>
    )
}