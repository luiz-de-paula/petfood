import Header from '../../components/header';
import Product from '../../components/product/list';
import './check.css';



const Checkout = () => {
    return (
        <div className="h-100">
            <Header/>
            <div className="container mt-3 mb-10">
                <div className="row">
                    <div className="col-6">
                        <span className="section-title">Dados de entrega</span>
                            <div className="row mb-1">
                            <div className="col-12">
                                <input 
                                    type="text"
                                    placeholder="CEP"
                                    className="form-control form-control-lg" 
                                />
                            </div>
                        </div>
                            <div className="row mb-1">
                            <div className="col-9">
                                <input 
                                    type="text"
                                    placeholder="Cidade"
                                    className="form-control form-control-lg" 
                                />
                            </div>
                            <div className="col-3 pl-0">
                                <input 
                                    type="text"
                                    placeholder="UF"
                                    className="form-control form-control-lg" 
                                />
                            </div>
                        </div>                        
                            <div className="row mb-1">
                            <div className="col-9">
                                <input 
                                    type="text"
                                    placeholder="Endereço"
                                    className="form-control form-control-lg" 
                                />
                            </div>
                            <div className="col-3 pl-0">
                                <input 
                                    type="number"
                                    placeholder="Número"
                                    className="form-control form-control-lg" 
                                />
                            </div>
                        </div>                        
                            <div className="row mb-1">
                            <div className="col-12">
                                <input 
                                    type="text"
                                    placeholder="Bairro"
                                    className="form-control form-control-lg" 
                                />
                            </div>
                        </div>
                        <span className="section-title">Dados de Pagamento</span>
                            <div className="row mb-1">
                            <div className="col-12">
                                <input 
                                    type="number"
                                    placeholder="Numero do cartão"
                                    className="form-control form-control-lg" 
                                />
                            </div>
                    </div>
                            <div className="row mb-1">
                            <div className="col-6">
                                <input 
                                    type="text"
                                    placeholder="Validade do Cartão"
                                    className="form-control form-control-lg" 
                                />
                            </div>
                            <div className="col-6 pl-0">
                                <input 
                                    type="number"
                                    placeholder="Codigo Segurança"
                                    className="form-control form-control-lg" 
                                />
                            </div>
                    </div>
                            <div className="row mb-1">
                            <div className="col-6">
                                <input 
                                    type="text"
                                    placeholder="Nome do titular"
                                    className="form-control form-control-lg" 
                                />
                            </div>
                            <div className="col-6 pl-0">
                                <input 
                                    type="number"
                                    placeholder="CPF do titular"
                                    className="form-control form-control-lg" 
                                />
                            </div>
                    </div>
                        <div className="row mt-4">

                            <div className="col-12 d-flex justify-content-between align-itens-center">
                                <b>Total</b>
                                <h3>R$30,00</h3>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-block btn-lg btn-primary bg-primary">
                                    Finalizar Compra
                                </button>
                            </div>
                        </div>

                    </div>
                    
                    
                    <div className="col-6 mt-5">
                        <div className="box col box-sidebar mb-4">
                            <h4>Minha Sacola</h4>
                            <div className="row products">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => ( 
                            <Product />
                            ))}
                            </div>
                        </div>
                    </div>
                    
                   

                </div>
            </div>

        </div>
    );
};
export default Checkout;
