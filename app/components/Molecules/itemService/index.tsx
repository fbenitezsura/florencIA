const ItemService = ({
    icon,
    title,
    text,
    url,
}) => {
    return (
        <div className="w-full flex items-center mt-3 h-auto">
            <img src={icon} className="h-[50px] w-12 mr-3 mt-[3px] rounded-full" alt="" />
            <div className="flex flex-col justify-center">
                <h2 style={{ textShadow: '3px 3px 4px #007192' }} className="text-2xl cursor-pointer hover:text-[22px] hover:mb-[0px] mb-[3px] text-[20px] text-white">{title}</h2>
            </div>
        </div>
    );
}

export default ItemService;