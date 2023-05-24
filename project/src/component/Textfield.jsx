export const TextField = ({ placeholder, ref, className, onChange }) => {
    return (
        <input onChange={onChange} className={className} ref={ref} placeholder={placeholder} />
    )
}