import InputField from "./formComponents/inpuT"



export default function LoginForm({values, sett, subm}) {
    return (
    <>
    <h1 style={{ textAlign: 'center', fontSize: '100px', marginTop: '100px' }}>Login</h1>
    <form method='post' style={{ textAlign: 'center', marginTop: '9rem', fontSize: '40px'}} onSubmit={subm}>
        <div className="usernameInp">
            <InputField name='username' labelName='Имя пользователя' type='text' formVals={values.username} sett={sett} fontSize='30px'/>
        </div>

        <div className="passwordinp" style={{display: 'block', margin: '20px auto' }}>
            <InputField name='password' labelName='Пароль' type='password' formVals={values.password} sett={sett} fontSize='30px'/>
        </div>

        <button type="submit" style={{ fontSize: '30px' }}>Войти</button>
    </form>
    </>
    )
}