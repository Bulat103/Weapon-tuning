import "./style/servisec.css"
function Services() {
    return (
        <div id="services">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center text-uppercase mb-5">Услуги</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-5">
                        <div className="img_circle">
                            <img src="/ServicesImages/milling.png" alt="" width="300px" height="300px" />
                        </div>
                        <h5 className="text-center mt-4">Фрезеровка</h5>
                        <div className="line"></div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-5">
                        <div className="img_circle">
                            <img src="\ServicesImages\turningOfParts.jpg" alt="" width="300px" height="300px" />
                        </div>
                        <h5 className="text-center mt-4">Токарная обработка</h5>
                        <div className="line"></div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-5">
                        <div className="img_circle">
                            <img src="\ServicesImages\laserEngraving.jpg" alt="" width="300px" height="300px" />
                        </div>
                        <h5 className="text-center mt-4">Лазерная гравировка</h5>
                        <div className="line"></div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-5">
                        <div className="img_circle">
                            <img src="\ServicesImages\electroerossiveCutting.jpg" alt="" width="300px" height="300px" />
                        </div>
                        <h5 className="text-center mt-4">Электроэррозионная резка</h5>
                        <div className="line"></div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-5">
                        <div className="img_circle ">
                            <img src="\ServicesImages\powderPainting.jpg" alt="" width="300px" height="300px" />
                        </div>
                        <h5 className="text-center mt-4">Порошковая покраска</h5>
                        <div className="line"></div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-5">
                        <div className="img_circle">
                            <img src="\ServicesImages\oxidation.png" alt="" width="300px" height="300px" />
                        </div>
                        <h5 className="text-center mt-4">Оксидирование</h5>
                        <div className="line"></div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Services;