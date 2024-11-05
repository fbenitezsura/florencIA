const Navbar = () => {

    return (
        <div className="w-full h-[10vh] grid grid-cols-12 relative">
            <div className="col-span-8 col-span-4 flex justify-center items-center">
              <h1 className="ml-[120px] md:ml-0 text-3xl font-bold text-white" style={{ textShadow: '3px 3px 6px #007192' }}>FlorencIA</h1>
            </div>
            <div className="hidden md:col-span-4">
              <p></p>
            </div>
            <div className="col-span-4 flex justify-center items-center">
              <button
              className="rounded-full px-4 py-3 bg-white hover:px-5 hover:py-3 ">
                Contactar
              </button>
            </div>
        </div>
    )

}

export default Navbar;