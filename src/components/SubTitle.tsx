const SubTitle = ({ children, className }: { children: string, className?: string }) => {
    return (
        <h4 className={`text-xl text-yellow-500 mb-2 content-item ${className}`}>— {children}</h4>
    )
}

export default SubTitle