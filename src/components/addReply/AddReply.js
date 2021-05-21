import React, { useState } from 'react'
import './addReply.css'

export default function AddReply(props) {
    const [reply, setReply] = useState("")
    return (
        <div className="reply-box">
            <textarea value={reply} onChange={(e) => setReply(e.target.value)} className="reply-text" type="textarea"></textarea>
            <button className="btn" onClick={() => {props.addComment(reply); setReply("")}}>Add Reply</button>
        </div>
    )
}
