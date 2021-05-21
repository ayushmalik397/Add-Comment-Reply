import React, { useState } from 'react'
import './chat.css'
import Avatar2 from '../../images/avatar-2.png'
import Avatar3 from '../../images/avatar-3.png'
import Avatar4 from '../../images/avatar-4.png'
import Avatar1 from '../../images/avatar.png'

export default function Chat(props) {
    const arr = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar2, Avatar3, Avatar4];
    let imageUrl = arr[props.index % 4];
    const [replyText, updateReplyText] = useState("");
    const [showInput, updateShow] = useState(false);
    function handleReplyClick() {
        updateShow(true);
    }
    return (
        <div className="card">
            <div className="chat">
                <div className="avatar"><img className="image" alt="avatar" src={imageUrl} /></div>
                <div className="message"><span className="name">{props.obj.user}<span className="time">{(props.obj.time.toString()).slice(0, 24)}</span></span><span className="">{props.obj.comment}</span></div>
            </div>
            {props.obj.replies.map((ele, idx) => {
                props.users.forEach((element, idx) => {
                    if(element === ele.user){
                        imageUrl = arr[idx];     
                    }
                });
                return (
                <div className="in-chat" key={idx}>
                    <div className="av">
                        <div className="avatar"><img className="image" alt="avatar" src={imageUrl} /></div>
                        {idx !== props.obj.replies.length-1 ? <div className="bar">|</div> : ""}
                    </div>
                    <div className="message"><span className="name">{ele.user}<span className="time">{(ele.time.toString()).slice(0, 24)}</span></span><span className="">{ele.comment}</span></div>
                </div>)
            })}
            {showInput ? "" : <><span className="reply" onClick={() => handleReplyClick()}>Reply</span><span className="delete" onClick={() => props.deleteComment(props.index)}>Delete</span></> }
            {showInput ? <><textarea value={replyText} onChange={(e) => updateReplyText(e.target.value)} className="reply-input" type="text"></textarea> <button className="reply-btn" onClick={() => {props.CommentReply(props.index, replyText); updateShow(false); updateReplyText("")}}>Reply</button></> : ""}
        </div>
    )
}
