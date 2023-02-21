export default function IWrapper({children, full}) {
    return (
        <div className={`max-w-[1028px] ${full ? "px-0 lg:px-5": "px-5"} mx-auto`}>
            {children}
        </div>
    )
}