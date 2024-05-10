import { useEffect, useRef, useState } from 'react';
import './Chat.css'
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
const [open, setOpen] = useState(false);
const [text, setText] = useState("");
const [img, setImg] =useState({
    file: null,
    url: "",
})

const endRef = useRef(null)

useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
}, []);

const handleEmoji = e => {
    setText(prev => prev + e.emoji );
    setOpen(false)
}

const handleImg = e => {
    if(e.target.files[0]) {
    setImg({
        file:e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
    })
    }
}


const handleSend = async () => {
    if(text === "") return;

    let imgUrl = null

    try {
        
        if(img.file){
            imgUrl = await upload(img.file);
        }

        // logika wysyłania wiadomości oraz jej wyświetlanie w okienku czatu

    } catch(err){
        console.log(err)
    }

    setImg({
        file:null,
        url:"",
    })

    setText("")
}



    return (
        <div className="chat">
            <div className='top'>
                <div className='user'>
                    <img src="./avatar.png" alt="" />
                    <div className='texts'>
                        <span>Janek Pościela</span>
                        <p>Apes dont kill apes</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src="./more.png" alt="" />
                </div>
            </div>
            <div className='center'>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className='texts'>
                        <p>
                        Było dwóch braci, Żuraw i Czapla. Żuraw był zdrowy, a czapla chorował na cukrzyce. Żaden nie poszedł do sanatorium. 
                        Zgadnij, który z nich przeżył. Czapla przeżył, ale dlatego bo był cwany, upierdoliło mu tylko nogę. A Żurawia zjedli.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className='texts'>
                        <img src="https://images.freeimages.com/images/large-previews/b70/pigeon-1315528.jpg" alt="" />
                        <p>
                        Było dwóch braci, Żuraw i Czapla. Żuraw był zdrowy, a czapla chorował na cukrzyce. Żaden nie poszedł do sanatorium. 
                        Zgadnij, który z nich przeżył. Czapla przeżył, ale dlatego bo był cwany, upierdoliło mu tylko nogę. A Żurawia zjedli.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className='texts'>
                        <p>
                        Było dwóch braci, Żuraw i Czapla. Żuraw był zdrowy, a czapla chorował na cukrzyce. Żaden nie poszedł do sanatorium. 
                        Zgadnij, który z nich przeżył. Czapla przeżył, ale dlatego bo był cwany, upierdoliło mu tylko nogę. A Żurawia zjedli.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className='texts'>
                        <p>
                        Było dwóch braci, Żuraw i Czapla. Żuraw był zdrowy, a czapla chorował na cukrzyce. Żaden nie poszedł do sanatorium. 
                        Zgadnij, który z nich przeżył. Czapla przeżył, ale dlatego bo był cwany, upierdoliło mu tylko nogę. A Żurawia zjedli.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                {img.url && (<div className='message own'>
                    <div className='texts'>
                        <img src={img.url} alt="" />
                    </div>
                </div>)}
                <div ref={endRef} ></div>
            </div>
            <div className='bottom'>
                <div className='icons'>
                    <label htmlFor="file">
                        <img src="./img.png" alt="" />
                    </label>
                    <input type="file" id='file' style={{display:"none"}} onChange={handleImg} />
                </div>
                <input type="text" 
                placeholder='Napisz wiadomość do kochanki...'
                value={text} 
                onChange={e=>setText(e.target.value)} 
                />
                <div className='emoji'>
                    <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                    
                </div>
                <button className='sendButton' onClick={handleSend}>Wyślij</button>
            </div>
        </div>
    )
}

export default Chat

// to w div user
/* 
    <img src={user?.avatar || "./avatar.png"} alt="" />
    <h2>{user?.username"}</h2>
*/
//to niżej zamiast tych div z wiadomosciami

/*
{chat?.messages?.map((message) => (
    <div className={message.senderId === currentUser?.id ? "message own" : "message" } key={message?.createAt}>
        <div className='texts'>
            {message.img &&
            <img src={message.img} alt="" />
            }
            <p>
                {message.text}
            </p>
            //<span>{message}</span>
        </div>
    </div>
))}
*/