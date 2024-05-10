import { useEffect, useRef, useState } from 'react';
import './Chat.css'
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
const [open, setOpen] = useState(false);
const [text, setText] = useState("");

const endRef = useRef(null)

useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
}, []);

const handleEmoji = e => {
    setText(prev => prev + e.emoji );
    setOpen(false)
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
                        <img src="https://images.freeimages.com/images/large-previews/b70/pigeon-1315528.jpg" alt="" />
                        <p>
                        Było dwóch braci, Żuraw i Czapla. Żuraw był zdrowy, a czapla chorował na cukrzyce. Żaden nie poszedł do sanatorium. 
                        Zgadnij, który z nich przeżył. Czapla przeżył, ale dlatego bo był cwany, upierdoliło mu tylko nogę. A Żurawia zjedli.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef} ></div>
            </div>
            <div className='bottom'>
                <div className='icons'>
                    <img src="./img.png" alt="" />
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
                <button className='sendButton'>Wyślij</button>
            </div>
        </div>
    )
}

export default Chat