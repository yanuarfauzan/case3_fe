import Main from "./layout/Main";

const Favorite = () => {
    return (
        <>
            <Main>
                <section>
                    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                        <button
                            type="button"
                            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                        >
                            Semua
                        </button>
                        <button
                            type="button"
                            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                        >
                            Makanan
                        </button>
                        <button
                            type="button"
                            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                        >
                            Minuman
                        </button>
                        <button
                            type="button"
                            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                        >
                            Cemilan
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto mb-10">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="card-menu flex-col justify-between items-center gap-2 p-4" style={{ marginTop: "110px" }}>
                                <div className="relative h-32 text-center">
                                    <img
                                        src="/assets/img/kwetiaw.png"
                                        alt="foto menu kwetiau"
                                        className="w-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4"
                                    />
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between gap-4 max-w-sm p-4">
                                        <div className="flex-col">
                                            <p className="mb-3 font-normal text-dark-700 dark:text-white-400">
                                                <strong>Mie kwetiaw spesial</strong>
                                            </p>
                                            <p className="mb-3 font-normal text-gray-900 dark:text-gray-900">
                                                Kwetiau pipih digoreng dengan pilihan daging atau seafood.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                    >
                                        <i className="bi bi-heart text-2xl"></i>
                                    </a>
                                    <span>
                                        <strong>Rp 50.000-,</strong>
                                    </span>
                                    <button
                                        role="button"
                                        data-modal-target="static-modal"
                                        data-modal-toggle="static-modal"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                    >
                                        <i className="bi bi-cart text-2xl"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Main>
        </>
    )
}

export default Favorite;