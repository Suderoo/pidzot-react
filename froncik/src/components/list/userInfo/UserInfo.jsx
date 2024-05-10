import './userInfo.css'


const UserInfo = () => {
    /*
    const {currentUser} = useUserStore(); // jeśli użyjemy reduxa lub zustanda to zostanie
    */

    return (
        <div className="userInfo">
            <div className='user'>
                 <img src="./avatar.png" alt="" />
                <h2>Belligol</h2>
            </div>
            <div className='icons'>
                <img src="./more.png" alt="" />
                <img src="./edit.png" alt="" />
            </div>
        </div>
    )
}

export default UserInfo

// rzeczy poniżej zamienimy jak będzie podpięte by brało dane użytkownika
// <img src={currentUser.avatar || "./avatar.png"} alt="" />
// <h2>{currentUser.username}</h2>