const ItemActions = ({
    icon,
    title,
    text,
    url,
}) => {
    return (
        <div className="w-full flex mt-3">
            <img src={icon} className="h-[60px] w-[60px] mr-3 mt-[3px] rounded-full" alt="" />
            <div className="flex flex-col">
                <h2 className="cursor-pointer font-bold hover:text-[22px] hover:mb-[0px] mb-[3px] text-[20px] text-white" style={{ textShadow: '3px 3px 4px #007192' }}>{title}</h2>
                <p className="text-md text-white">{text}</p>
            </div>
        </div>
    );
}

export default ItemActions;