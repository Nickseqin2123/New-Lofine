import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useauth'
import TextCenter from './other_componentsChat/textCenter'
import Title from './other_componentsChat/titleInSite'
import MessageForm from './other_componentsChat/formMessage'
import Messages from './other_componentsChat/messages'



export default function Chat() {
    const {user} = useAuth()
    const [message, setMessage] = useState('')
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const socket = new WebSocket('ws://127.0.0.1:7999/ws/chat/')

        socket.onopen = () => {
            setSocket(socket)
        }

        socket.onmessage = (event) => {
            const parse = JSON.parse(event.data)
            const {name, message} = parse

            const cls = document.getElementById('all_mess')
            cls.innerHTML += `<div className='alert alert-info'><b>${name}:</b> ${message}</div>`
        }

        return () => {
            socket.close()
        }

    }, [])
    
    function sendOnServer() {
        if (Boolean(message)) {
            socket.send(JSON.stringify({name: user.username, message: message}))
            setMessage('')
        } else {
            alert('Вы не можете отправить пустое сообщение!')
        }
    }

    return (
        <>

        <Title />

        <div className="container">

            <TextCenter />

            <div className="row">

                <div className="col-6">
                        
                    <MessageForm sendserver={sendOnServer} mess={message} sttMess={setMessage} />
        
                </div>

                <div className="col-6">
                    <Messages />
                </div>

            </div>
        </div>
        </>
        )
}