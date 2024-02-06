const Input = ({
    label='',
    name='',
    type = 'text',
    className= '',
    inputClassName='',
    isRequired = false,
    placeholder= '',
    value = '',
    onChange = ()=>{},
}) =>{
    return (
        <div className={` ${className}`}>
            <label for={name} className="block text-sm font-medium text-grey-800">{label}</label>
            <input type={type} id={name} className={`bg-grey-50 border 
            border-grey-300 text-grey-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
             ${inputClassName}`} 
            placeholder={placeholder} required = {isRequired} 
            value={value} onChange={onChange} />
        </div>
    )
}
export default Input
