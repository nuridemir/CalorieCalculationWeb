const Container = ({ children, extraClass = "", id = "" }) => {
    return (
        <section id={id} className={`max-w-5xl mx-auto p-2 lg:p-4 ${extraClass}`} >{children}</section >
    )
}

export default Container