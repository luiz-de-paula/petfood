
import './petshop.css'
import Header from '../../components/header';
import Petlove from '../../assets/petlove.png'
const Petshop = () => {
    return (
        <div className="h-100">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src={Petlove} className="img-fluid" />
                        <b>Pet Love</b>
                        <div className="petshop-infos">
                            <span className="mdi mdi-star"></span>
                            <text>
                                <b>2,8</b>
                            </text>
                            <span className="mdi mdi-cash-usd-outline"></span>
                            <text>$$$</text>
                            <span className="mdi mdi-crosshairs-gps"></span>
                            <text>2,9km</text>

                        </div>
                    </div>
                    <div className="col-10"></div>
                </div>
            </div>
        </div>
    )
}
export default Petshop;