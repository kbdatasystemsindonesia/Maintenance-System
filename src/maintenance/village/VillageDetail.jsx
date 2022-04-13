import { Component } from "react";
import { MdModeEdit, MdDone } from "react-icons/md";
import TableTemplate from "../TableTemplate";

class VillageDetail extends Component {
  componentDidMount() {
    // const style = document.createElement("link");
    // style.href = "vendor/datatables/dataTables.bootstrap4.min.css";
    // style.rel = "stylesheet";
    // style.async = true;
    // document.head.appendChild(style);
    // const scriptDataTablesDemo = document.createElement("script");
    // scriptDataTablesDemo.src = "js/demo/datatables-demo.js";
    // scriptDataTablesDemo.async = true;
    // document.body.appendChild(scriptDataTablesDemo);
  }

  editOnClick = () => {
    window.location = "/countryUpdate";
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="mb-1 bg-shadow-dark mx-auto ">
            <h3 className="mb-0 text-white">Village Detail</h3>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card shadow mb-4">
                <div className="card-body">
                  <form>
                    <div className="row col-sm-12 bg-ginger">
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Country Code
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">ID</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Name
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">INDONESIA</label>
                        </div>
                      </div>
                    </div>
                    <div className="row col-sm-12 bg-gray-100">
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Description
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">Negara Kesatuan</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Alternate Description
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">Republik Indonesia</label>
                        </div>
                      </div>
                    </div>
                    <div className="row col-sm-12 bg-ginger">
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Is Default
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">Yes</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold"></label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1"></label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row col-sm-12 bg-gray-100">
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Is System
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">No</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Is Deleted
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1"></label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">No</label>
                        </div>
                      </div>
                    </div>
                    <div className="row col-sm-12 bg-ginger">
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Is Approved
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">No</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold"></label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1"></label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row col-sm-12 bg-gray-100">
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Approved By
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Approved Date
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row col-sm-12 bg-ginger">
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Created By
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">oppa</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Created Date
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">30-Nov-2021 22:45:51</label>
                        </div>
                      </div>
                    </div>
                    <div className="row col-sm-12 bg-gray-100">
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Created IP
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">192.168.0.1</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Created Content Type
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">application/json</label>
                        </div>
                      </div>
                    </div>
                    <div className="row col-sm-12 bg-ginger">
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Updated By
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Updated Date
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row col-sm-12 bg-gray-100">
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Updated IP
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Updated Content Type
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row col-sm-12 bg-ginger">
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                            Version
                          </label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">1</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group row">
                          <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold"></label>
                          <label className="col-sm-1 col-form-label margin-top-rem-1"></label>
                          <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold"></label>
                        </div>
                      </div>
                    </div>
                    {/* <div class="col-12">
                                            <div className="form-group row mt-2">
                                                <div className="col-sm-10">
                                                </div>
                                                <div className="col-sm-1">
                                                    <button type="submit" className="btn btn-primary btn-min-width"><MdDone /></button>
                                                </div>
                                                <div className="col-sm-1">
                                                    <button type="button" className="btn btn-primary btn-min-width" onClick={this.editOnClick}><MdModeEdit></MdModeEdit></button>
                                                </div>
                                            </div>
                                        </div> */}
                    <div className="row justify-content-center mt-2">
                      <button type={"submit"} className="btn bg-ginger btn-min-width" title="Approve">
                        <MdDone></MdDone>
                      </button>
                      <button type={"button"} className="btn bg-ginger btn-min-width ml-1" title="Edit">
                        <MdModeEdit></MdModeEdit>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <TableTemplate />

              <div className="mb-1 bg-shadow-dark mx-auto ">
                <h5 className="mb-0 text-white">Mapping Code to Host System</h5>
              </div>
              <div className="card shadow mb-4">
                {/* <div className="card-header bg-shadow-dark py-3">
                                    <h3 className="m-0 font-weight-bold text-light">Host Mapping</h3>
                                </div> */}

                <div className="card-body">
                  <div className="row col-sm-12 bg-gray-100">
                    <div class="col-md-12">
                      <div className="form-group row">
                        <label htmlFor="inputHostSystem1" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                          OJK System
                        </label>
                        <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                        <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">DKI</label>
                      </div>
                    </div>
                  </div>
                  <div className="row col-sm-12 bg-ginger">
                    <div class="col-md-12">
                      <div className="form-group row">
                        <label htmlFor="inputHostSystem2" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                          BI System{" "}
                        </label>
                        <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                        <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">JKT</label>
                      </div>
                    </div>
                  </div>
                  <div className="row col-sm-12 bg-gray-100">
                    <div class="col-md-12">
                      <div className="form-group row">
                        <label htmlFor="inputHostSystem2" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">
                          LPS SYstem
                        </label>
                        <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                        <label className="col-sm-7 col-form-label margin-top-rem-1 label-bold">DKI</label>
                      </div>
                    </div>
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

export default VillageDetail;
