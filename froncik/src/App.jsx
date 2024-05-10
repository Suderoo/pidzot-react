import './App.css'
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import Login from './components/login/Login'
import Notification from './components/Notification'
import { useEffect } from 'react'




const App = () => {

  /*  jeśli false pokazuje ekran logowania/rejestracji, jeśli true to przechodzi dalej tak jaby dawanie że użytkownik jest zalogowany */
  const user = true

  /*  
  // obsługa statusu zalogowania (nie wiem czy pod springa będzie pod php działa wiec idk) ale tutaj nie wiem czy redux czy zustand podejdzie pod basic auth xdd
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);

    })

    return () => {
      unSub()
    }
  },[])
  */

  return (
    <div className='container'>
      {user ? (
          <>
          <List/>
          <Chat/> 
          <Detail/>
          </>
        ) : (
        <Login/>
      )}
      <Notification />
    </div>
  )
}

export default App;

//po połączeniu zmienić
/* 
{chatId && <Chat />}
{chatId && <Detail />}
*/
