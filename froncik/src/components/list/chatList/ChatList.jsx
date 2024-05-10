import { useState } from 'react'
import './chatList.css'
import AddUser from '../../addUser/addUser';

const ChatList = () => {

    const [chat, setChat] = useState()
    const [addMode, setAddMode] = useState(false)
    const [input, setInput] = useState("")
    const [chats, setChats] = useState("")

    // const filteredChats = chats.filter((c) => c.user.username.toLowerCase().includes(input.toLowerCase())) // filtrowanie z małej na duża itp
    


    // tutaj dodać logike listy czatów z boku

    // logika wybierania wraz z obsługą czy najnowsza wiadomość była wyświetlona
    const handleSelect = async (chat) => {

        

        changeChat(chat.chatId, chat.user)

    }

    return (
        <div className="chatList">
            <div className='search'>
                <div className='searchBar'>
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder='Search' onChange={(e)=>setInput(e.target.value)} />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} 
                className='add' 
                alt="" 
                onClick={() => setAddMode((prev) => !prev )}
                />
            </div>
            <div className='item'>
                <img src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Janek Pościela</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Janek Pościela</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Janek Pościela</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Janek Pościela</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Janek Pościela</span>
                    <p>Hello</p>
                </div>
            </div>
            {addMode && <AddUser />}
        </div>
    );
};

export default ChatList

// w 27 lini jak wsadzimy logikę list czatu i podłączymy backend wsadzimy takie coś takiego zamiast tych div
/*
    {filteredChats.map((chat) => ( 
        <div className='item' key={chat.chatId} onClick={()=>handleSelect(chat)} 
        style={{
            backgroundColor: chat?.isSeen? "transparent" : "#5183fe",
        }}>
            <img src={chat.user.avatar || "./avatar.png"} alt="" />
            <div className='texts'>
                <span>{chat.user.username}</span>
                <p>{chat.lastMessage}</p>
            </div>
        </div>
    ))}
 */