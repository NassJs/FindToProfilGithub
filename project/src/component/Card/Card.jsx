export const Card = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
export const CardHeader = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export const CardBody = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}