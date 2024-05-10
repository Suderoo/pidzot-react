import { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'

const Login = () => {

    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    })

    const handleAvatar = e => {
        if(e.target.files[0]) {
        setAvatar({
            file:e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
        }
    }

    const handleLogin = e => {
        e.preventDefault()
    }

    return (
        <div className="login">
            <div className="item">
                <h2>Witaj ponownie</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder='Email' name="email" />
                    <input type="password" placeholder='Hasło' name="password" />
                    <button>Zaloguj</button>
                </form>
            </div>
            <div className="seperator"></div>
            <div className="item">
                <h2>Utwórz konto</h2>
                <form>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Prześlij awatar
                    </label>
                    <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar} />
                    <input type="text" placeholder='Login' name="login" />
                    <input type="text" placeholder='Email' name="email" />
                    <input type="password" placeholder='Hasło' name="password" />
                    <button>Zarejestruj</button>
                </form>
            </div>
        </div>
    )
}

export default Login