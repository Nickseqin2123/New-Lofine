import { useState } from "react"
import InputField from "./formComponents/inpuT"
import {dataRegistartion} from './formData/registartionData'


export default function RegistartionForm() {
    const [form, setForm] = useState({
        email: '',
        username: '',
        password: '',
        telephone_number: '',
        first_name: '',
        last_name: '',
        tag_user: '',
        birthday: ''
    })


    function change(target) {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    function getSendForm(event) {
        event.preventDefault()
        console.log(form)
    }


    return (
        <>
        <h1 style={{ textAlign: 'center', fontSize: '50px', marginTop: '50px' }}>Registartion</h1>
        <form method='post' style={{ textAlign: 'center', marginTop: '1rem', fontSize: '40px'}} onSubmit={getSendForm}>
            {
                dataRegistartion.map((data) => {
                    return (
                    <div className={data.name} key={data.id} style={{display: 'block', margin: '20px auto'}}>

                        <InputField
                        name={data.name}
                        labelName={data.labelName}
                        type={data.type}
                        val={form[data.name]}
                        sett={change}
                        />
                     </div>
                    )
                })
            }
            <button type="submit" style={{ fontSize: '30px' }}>Регистрация</button>
        </form>
    </>
    )
}