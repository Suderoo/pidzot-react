import './addUser.css'

const AddUser = () => {
    return (
        <div className='addUser'>
            <form>
                <input type="text" placeholder='Nazwa użytkownika' name='username' />
                <button>Szukaj</button>
            </form>
            <div className='user'>
                <div className='detail'>
                    <img src="./avatar.png" alt="" />
                    <span>Janek Pościela</span>
                </div>
                <button>Dodaj</button>
            </div>
        </div>
    )
}

export default AddUser

