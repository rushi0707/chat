const Button = ({
    type='button',
    label='Button',
    className='',
    disabled= false,
})=>{
    return (
        <div>
            <button type={type} className={`text-white bd-primary hover:bg-primary
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
            rounded-lg text-sm w-full  px-14 py-2 text-center ${className}`}
            disabled = {disabled}>{label}</button>
        </div>
    )
}
export default Button
