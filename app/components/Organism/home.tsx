import ItemActions from './../Molecules/itemActions/index';
import ItemServices from './../Molecules/itemService/index';

const Home = () => {

    const itemAction = [{
        icon: '/c1.webp',
        title: 'Clientes',
        text: 'Conoce a tus clientes',
        url: ''
    }, {
        icon: '/s2.webp',
        title: 'Ventas',
        text: 'Aumenta tus ventas',
        url: ''
    }];

    const itemService = [{
        icon: '/service1.webp',
        title: 'Proceso de optimizacion',
        url: ''
    }, {
        icon: '/service2.webp',
        title: 'Prediccion de errores',
        url: ''
    }];

    return (
        <div className="px-2 w-full grid grid-cols-12 h-[90vh]">
            <div className="order-2 md:order-1 col-span-12 md:col-span-4 flex-col mt-10">
                <div className="flex justify-center md:justify-end">
                    <p className="text-5xl font-bold text-white" style={{ textShadow: '3px 3px 6px #007192' }}>FlorencIA</p>
                </div>
                <div className="flex justify-end text-right mt-10 text-white h-[150px]" style={{ textShadow: '2px 2px 4px #007192' }}>
                    <p className="text-justify text-[18px] w-[400px]">FlorencIA impulsa el éxito empresarial mediante inteligencia artificial avanzada, optimizando procesos, prediciendo errores y mejorando la interacción con clientes en tiempo real.</p>
                </div>
                <div className="flex md:ml-[110px]">
                    <div className="flex flex-col max-w-[400px]">
                        {itemAction.map((item, index) => {
                            return (
                                <ItemActions
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    text={item.text}
                                    url={item.url}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="order-1 md:order-2 col-span-12 md:col-span-4 flex justify-center mt-10">
                <img className="hover:h-[605px] h-[600px] cursor-pointer" src="/flo1.png" />
            </div>
            <div className="order-3 col-span-12 md:col-span-4 flex flex-col items-center md:items-start md:ml-8 mt-10 pb-[20px] md:mb-0">
                <div className="flex justify-center">
                    <p className="text-5xl font-bold text-white" style={{ textShadow: '3px 3px 6px #007192' }}>Habilidades</p>
                </div>
                <div className="w-full flex justify-center md:pl-[45px]">
                    <img src="/s1.webp" className="h-[120px] w-[180px] rounded-full mt-5" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="mt-10 flex flex-col max-w-[400px]">
                        {itemService.map((item) => {
                            return (
                                <ItemServices
                                    key={item.title}
                                    icon={item.icon}
                                    title={item.title}
                                    url={item.url}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;