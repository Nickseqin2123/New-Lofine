export default function MessageForm({mess, sttMess, sendserver}) {
    return (
        <>
        <h3>Форма сообщений</h3>
        <div id="messForm">
            <label htmlFor="message">Сообщение</label>
                <textarea
                value={mess}
                onChange={(event) => sttMess(event.target.value)}
                name="message"
                id="message"
                className="form-control"
                placeholder="Введите сообщение"
                ></textarea>
            <br/>
            
            <button onClick={sendserver} className="btn btn-danger">
                Отправить
            </button>
        
        </div>
        </>
    )
}