import { useState } from 'react'
import './addUser.css'

const AddUser = () => {

    const [user, setUser] = useState(null)
    


    //pod logike szukania użytkowników
    const handleSearch = async e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const username = formData.get("username")

        // tutaj dodać rzeczy z logiki w miarę potrzebności

        try {

            // tutaj dodać logike

        }catch (err) {
            console.log(err)
        }

    }

    const handleAdd = async () => {
        try {

            // logika dodawania

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='addUser'>
            <form onSubmit={handleSearch} >
                <input type="text" placeholder='Nazwa użytkownika' name='username' />
                <button>Szukaj</button>
            </form>
            <div className='user'>
                <div className='detail'>
                    <img src="./avatar.png" alt="" />
                    <span>Janek Pościela</span>
                </div>
                <button onClick={handleAdd} >Dodaj</button>
            </div>
        </div>
    )
}

export default AddUser

// to sie zamieni jak bedzie podpiete
/*
    {user && <div className='user'>
        <div className='detail'>
            <img src={user.avatar || "./avatar.png"} alt="" />
            <span>{user.username}</span>
        </div>
        <button>Dodaj</button>
    </div>}
*/