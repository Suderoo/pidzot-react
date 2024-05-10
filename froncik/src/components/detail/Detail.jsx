import './Detail.css'

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Janek Pościela</h2>
                <p>Apes dont kill apes</p>
            </div>
            <div className='info'>
                <div className="option">
                    <div className="title">
                        <span>Ustawienia czatu</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Pomoc i prywatność</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Udostępnione zdjęcia</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://wykop.pl/cdn/c3201142/comment_Zn0ncvu7RH0s75gLUi8vuNNSAl7JhixO.jpg" alt="" />
                                <span>zdjecei jakies</span>
                            </div>
                            <img src="./download.png" alt="" className='icon' />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://wykop.pl/cdn/c3201142/comment_Zn0ncvu7RH0s75gLUi8vuNNSAl7JhixO.jpg" alt="" />
                                <span>zdjecei jakies</span>
                            </div>
                            <img src="./download.png" alt="" className='icon' />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://wykop.pl/cdn/c3201142/comment_Zn0ncvu7RH0s75gLUi8vuNNSAl7JhixO.jpg" alt="" />
                                <span>zdjecei jakies</span>
                            </div>
                            <img src="./download.png" alt="" className='icon' />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://wykop.pl/cdn/c3201142/comment_Zn0ncvu7RH0s75gLUi8vuNNSAl7JhixO.jpg" alt="" />
                                <span>zdjecei jakies</span>
                            </div>
                            <img src="./download.png" alt="" className='icon' />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Udostępnione pliki</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button className='logout' onClick={()=>auth.logout()} >Wyloguj</button>
            </div>
        </div>
    )
}

export default Detail

//w div user
/*
    <img src={user?.avatar || "./avatar.png"} alt="" />
    <h2>{user?.username"}</h2>
*/