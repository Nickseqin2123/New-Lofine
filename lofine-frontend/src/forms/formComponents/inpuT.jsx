export default function InputField({name, labelName, type, val, sett, ...styles}) {
    return (
        <>
        <label>{labelName}</label>
        <input type={type}
         name={name}
         value={val}
         onChange={(event) => sett(event.target)}
         style={styles}/>
         </>
    )
}