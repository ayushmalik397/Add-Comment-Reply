import React from 'react'
import './dropdown.css'

export default function Dropdown(props) {
    return (
        <div>
            <select value={props.user} onChange={(e) => props.changeUser(e.target.value)} className="dropdown">
                {props.users?.map((ele, idx) => {
                    return <option value={ele} key={idx}>{ele}</option>
                })}
            </select>
        </div>
    )
}
