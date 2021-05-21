import React, { useState, useEffect } from 'react'
import './main.css'
import Dropdown from '../dropdown/Dropdown'
import Chat from '../chat/chat'
import AddReply from '../addReply/AddReply'

export default function Main() {
    const users = ["Jerry Hess", "Elliot Fu", " Stevei Feliciano", "Christian", "Matt", "Justen Klitsune"]
    const [user, changeUser] = useState(users[0])
    const [chats, updateChat] = useState([])
    function addChat(comment) {
        let obj = {
            user,
            comment,
            time: new Date(),
            replies: []
        }
        updateChat(chats => [...chats, obj])
    }
    function updateUser(user) {
        changeUser(user)
    }
    function replyToComment(idx, replyText) {
        let obj = {
            user,
            comment: replyText,
            time: new Date(),
        }
        chats[idx].replies.push(obj)
        updateChat(chats => [...chats])
    }
    function deleteComment(idx){
        chats.splice(idx,1)
        updateChat(chats => [...chats])
    }
    useEffect(() => {
    }, [chats])

    return (
        <div>
            <Dropdown users={users} user={user} changeUser={updateUser} />
            <div className="all-chats">
                {chats?.map((ele, idx) => {
                    return <Chat key={idx} users={users} index={idx} obj={ele} CommentReply = {replyToComment} deleteComment={deleteComment}/>
                })}
            </div>
            <AddReply addComment={addChat} />
        </div>
    )
}
