import './styles.css';
import Racao from '../../../assets/magnus.png'



const Product = () => {
    return (
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img src={Racao}className="img-fluid"/>
                </div>
                <div className="col-6">
                    <h6><label className="badge badge-primary">R$30,00</label></h6>
                    <small>
                        <b>Ração Magnus Premium</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary rounded-circle">-</button>
                </div>
            </div>
        </div>
    );
}
export default Product;