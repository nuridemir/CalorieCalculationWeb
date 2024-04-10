const Faq = ({ title, desc }) => {
    return (
        <div className="border rounded-md border-[#27272a] p-4">
            <h4 className="text-lg text-secondary font-medium" title={title}>+ {title}</h4>
            <p className="pl-4 mt-2" title={desc}>
                {desc}
            </p>
        </div>
    )
}

export default Faq