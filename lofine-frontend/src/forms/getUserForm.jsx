export default function GetUserForm({value, vlsSet, subm}) {
    return (
        <form method="GET" style={{ textAlign: 'center', marginTop: '15rem', fontSize: '40px'}} onSubmit={subm}>
            <label htmlFor="pkuser">ID пользователя:</label>
            <input type="text"
             name='pkuser'
              value={value}
               onChange={(event) => vlsSet(event.target.value)}
                style={{ fontSize: '20px' }}/>
            <button 
            type="submit"
            style={{ fontSize: '30px', display: 'block', margin: '20px auto' }}
            >Найти
            </button>
        </form>
    )
}