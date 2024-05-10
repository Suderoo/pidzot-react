import { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'

const Login = () => {


    const [loading, setLoading] = useState(false);


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

    // obsługa logowania

    const handleLogin = e => {
        e.preventDefault() // zapobiega odświeżaniu strony potem to wyjebie sie
        setLoading(true)

        const formData = new FormData(e.target);

        const { email, password } = Object.fromEntries(formData);

        /* 
        try {

            // logika logowania
            
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
        */

    }

    // obsługa rejestracji

    const handleRegister = async e => {
        e.preventDefault()
        setLoading(true) // blokowanie wciśniecia przycisku po pierwszym wciśnięciu żeby backend przemielił dane

        const formData = new FormData(e.target);

        const { login, email, password } = Object.fromEntries(formData);

        /* wyswietlenie w konsoli czy git 

        console.log(login)
        console.log(email)
        console.log(password)
        
        */

        /*

        try {
            
            // logika rej


            toast.success("Konto zostało utworzone pomyślnie!")
        } catch(err) {
            toast.error(err.message) //obsługa powiadomienia błędu
        } finally {
            setLoading(false)
        }

        */
    }


    return (
        <div className="login">
            <div className="item">
                <h2>Witaj ponownie</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder='Email' name="email" />
                    <input type="password" placeholder='Hasło' name="password" />
                    <button disabled={loading}>{loading ? "Ładowanie":"Zaloguj"}</button>
                </form>
            </div>
            <div className="seperator"></div>
            <div className="item">
                <h2>Utwórz konto</h2>
                <form onSubmit={handleRegister} >
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Prześlij awatar
                    </label>
                    <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar} />
                    <input type="text" placeholder='Login' name="login" />
                    <input type="text" placeholder='Email' name="email" />
                    <input type="password" placeholder='Hasło' name="password" />
                    <button disabled={loading}>{loading ? "Ładowanie":"Zarejestruj"}</button>
                </form>
            </div>
        </div>
    )
}

export default Login