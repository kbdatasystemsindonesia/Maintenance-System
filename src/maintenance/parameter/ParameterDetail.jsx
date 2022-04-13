import { Component } from "react";
import "./Parameter.css";
import "./ParameterDetail.css";
import { BsFillBackspaceFill } from "react-icons/bs"
import { BsCheckLg } from "react-icons/bs"
import { BsArrowRepeat } from "react-icons/bs"


class ParameterDetail extends Component {

    componentDidMount() {
        const style = document.createElement("link");
    
        style.href = "vendor/datatables/dataTables.bootstrap4.min.css";
        style.rel = "stylesheet";
        style.async = true;
    
        document.head.appendChild(style);

        const scriptDataTablesDemo = document.createElement("script");

        scriptDataTablesDemo.src="js/demo/datatables-demo.js";
        scriptDataTablesDemo.async = true;
    
        document.body.appendChild(scriptDataTablesDemo);
    }

    editOnClick = () => {
        window.location = "/parameterUpdate";
    }

    backOnClick = () => {
        window.location = "/parameter";
    }

    render() {
        return(
            <>
                <div className="container-fluid">
                    <h1 className="h3 mb-1 text-gray-800">Parameter &gt; Gender</h1>
                    <p className="mb-4" />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-brown">Information</h6>
                                </div>

                                <div className="card-body">
                                    <form>
                                        <div className="row-highlight col-sm-12 bg-ginger">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Code</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1 ">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold label-mandatory">M</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Name</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1 ">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold label-mandatory">Male</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Alternate Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12 bg-ginger">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Is Default</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1 ">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold label-mandatory">No</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Is Enable</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1 ">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold label-mandatory">Yes</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is System</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">No</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Deleted</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1"></label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12 bg-ginger">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Is Approved</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1 ">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold label-mandatory">No</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold"></label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1"></label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Approved By</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Approved Date</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>    
                                        <div className="row-highlight col-sm-12 bg-ginger">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Created By</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1 ">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold label-mandatory">oppa</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Created Date</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">30-Nov-2021 22:45:51</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Created IP</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">192.168.0.1</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Created Content Type</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">application/json</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12 bg-ginger">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Updated By</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1 ">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold label-mandatory"></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Updated Date</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Updated IP</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Updated Content Type</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>  
                                        <div className="row-highlight col-sm-12 bg-ginger">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Version</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">1</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold"></label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1"></label>
                                                    <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                                                </div>
                                            </div>
                                        </div>                                            
                                            <div className="justify-content-center">
                                             
                                                    <button type="submit" className="btn parameter-searching-criteria float-right margin-top-rem-1 btn-min-width mr-2" onClick={this.editOnClick}><i><BsCheckLg></BsCheckLg></i></button>                                           
                                             
                                           
                                                    <button type="button" className="btn parameter-searching-criteria float-right margin-top-rem-1 btn-min-width mr-2" onClick={this.editOnClick}><i><BsArrowRepeat></BsArrowRepeat></i></button>
                                              
                                               
                                                    <button type="button" className="btn parameter-searching-criteria float-right margin-top-rem-1 btn-min-width mr-2" onClick={this.backOnClick}><i><BsFillBackspaceFill></BsFillBackspaceFill></i></button>
                                               
                                            </div>
                                        
                                    </form>              
                                </div>
                            </div>                            

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-brown">Language Mapping</h6>
                                </div>

                                <div className="card-body">                                    
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTableLanguage" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Language</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Is Enable</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Language</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Is Enable</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>Bahasa</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>South Korea</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Dutch</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Jowo</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-brown">Host Mapping</h6>
                                </div>

                                <div className="card-body">                                    
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTableHost" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Host</th>
                                                    <th>Code</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Host</th>
                                                    <th>Code</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>Bank Indonesia</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>OJK</td>
                                                    <td></td>
                                                </tr>                                                                                    
                                            </tbody>
                                        </table>
                                    </div> 
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>            
            </>
        );
    }
}

export default ParameterDetail;