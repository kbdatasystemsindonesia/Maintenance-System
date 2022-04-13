import React, { Component } from "react";
import Select from "react-select";
import "./DistrictMaintenance.css";
import { BsPlusLg as Plus } from "react-icons/bs";
import { BsSearch as Search } from "react-icons/bs";
import TableTemplate from "../TableTemplate";

const options = [
  { value: "Indonesia", label: "ID" },
  { value: "Korea", label: "KR" },
  { value: "America", label: "US" },
];

class DistrictMaintenance extends Component {
  //saat dipanggil, langsung render awal dengan country list yang kosong karena belum ada pencarian
  constructor(props) {
    /*save state for searched keywords:
     * option 1: onChange searched immediately
     * option 2: onSubmitted searched
     * option 3: both
     * */
    super(props);
    //tableContent must array of array of string
    this.state = {
      district: "",
      searchCriteria: "",
      showSearchResult: false,
      districtList: [],
      tableContentWantToBeRendered: [],
      headerWantsToBeRender: [],
      tableTitle: "",
    };
    this.handleSearchedImmediate = this.handleSearchedImmediate.bind(this);
    this.handleSearchedSubmited = this.handleSearchedSubmited.bind(this);
    this.searchByCode = this.searchByCode.bind(this);
    this.searchByName = this.searchByName.bind(this);
  }
  handleSearchedImmediate(e) {
    this.setState({
      district: e.target.value,
    });
  }
  handleSearchedSubmited(e) {
    e.preventDefault();
    if (this.state.district.length === 0) {
      return;
    }
    //saat tombol search ditekan, maka
    this.setState((state) => ({
      district: state.district,
      showSearchResult: true,
      tableTitle: "District list",
    }));
  }
  searchByName(e) {
    this.setState({
      searchCriteria: e.target.value,
    });
  }
  searchByCode(e) {
    this.setState({
      searchCriteria: e.target.value,
    });
  }
  //saat setelah dirender, seorang dapat mencari country dengan mengetik dalam input text, nama / code country.
  componentDidUpdate(prevProps, prevState, snapShot) {
    //console.log(this.state.district);
    if (this.state.showSearchResult === true && prevState.showSearchResult === false) {
      //tombol untuk mencari sudah ditekan sehingga dengan algoritma pencarian, masukkan setiap nama country yang sesuai ke TableTemplate
      if (this.state.searchCriteria === "Code") {
        //jika mencari berdasarkan code, maka apapun yang sesuai sama Code
        //exact match maka masukkan ke tableContent dari Tabletemplate yang ingin render
        //var recordsTem=[];
        var records = this.state.districtList.filter((district) => district.code.toString().includes(this.state.district.toUpperCase()));
        //console.log(records);
        var recordsTem = [];
        var headersTem = [];
        headersTem.push("No.");
        headersTem.push("Code");
        headersTem.push("Name");
        for (let i = 0; i < records.length; i++) {
          var record = [];
          record.push(`${i + 1}`);
          record.push(records[i].code.toString());
          record.push(records[i].name.toString());
          recordsTem.push(record);
          if (i === records.length - 1) {
            this.setState({
              tableContentWantToBeRendered: recordsTem,
              headerWantsToBeRender: headersTem,
              tableTitle: "District list",
              district: "",
            });
          }
        }
      } else if (this.state.searchCriteria === "Name") {
        var records = this.state.districtList.filter((district) => district.name.toString().includes(this.state.district.toUpperCase()));
        //console.log(records);
        var recordsTem = [];
        var headersTem = [];
        headersTem.push("No.");
        headersTem.push("Code");
        headersTem.push("Name");
        for (let i = 0; i < records.length; i++) {
          var record = [];
          record.push(`${i + 1}`);
          record.push(records[i].code.toString());
          record.push(records[i].name.toString());
          recordsTem.push(record);
          if (i === records.length - 1) {
            this.setState({
              tableContentWantToBeRendered: recordsTem,
              district: "",
              headerWantsToBeRender: headersTem,
              tableTitle: "District list",
            });
          }
        }
      }
    } else if (this.state.showSearchResult === true && prevState.showSearchResult === true) {
      this.setState({
        showSearchResult: false,
      });
    }
  }
  componentDidMount() {
    //dipanggil pas render pertama selesai
    fetch("./districtData.json")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          districtList: result,
        });
        //console.log(this.state.countryList);
      });
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="mb-4 bg-shadow-dark mx-auto col-xl-11 col-md-11">
            <h3 className="mb-0 text-white">District Menu</h3>
          </div>
          <div className="row flex-column align-items-center">
            <div className="col-xl-11 col-md-11 mb-4">
              <div className="card border-left-warning  h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="mr-2">
                      <h3 className="text-lg font-weight-bold mr-3">Search country by category of : </h3>
                    </div>
                    <div className="radio-column">
                      <div className="radio-item">
                        <input type={"radio"} value="Code" onClick={this.searchByCode} name="criteria" /> Code
                      </div>
                      <div className="radio-item">
                        <input type={"radio"} value="Name" onClick={this.searchByName} name="criteria" /> Name
                      </div>
                      {/*<div className="text-lg font-weight-bold text-primary mb-1">
                                                Earnings (Monthly)</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                            */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={this.handleSearchedSubmited} className="col-xl-11 col-md-11 row flex-column">
              {/* <div className="mb-4 bg-shadow-dark mx-auto col-xl-11 col-md-11" >
                                <p className="mb-0 text-white">Country Code</p>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div> */}
              <div className="card bg-shadow-ginger-search">
                <div className="card-body row no-gutters align-items-center justify-content-start">
                  <div className="mr-2">
                    <h3 className="text-lg font-weight-bold mr-3 text-dark  my-auto">Country Code : </h3>
                  </div>
                  <div className="ml-2">
                    <Select options={options} />
                  </div>
                </div>
              </div>

              <div className="card bg-shadow-light-search">
                <div className="card-body row no-gutters align-items-center justify-content-start">
                  <div className="mr-2">
                    <h3 className="text-lg font-weight-bold mr-3 text-dark  my-auto">Province Code : </h3>
                  </div>
                  <div className="ml-1">
                    <Select options={options} />
                  </div>
                </div>
              </div>

              <div className="card bg-shadow-ginger-search">
                <div className="card-body row no-gutters align-items-center justify-content-start">
                  <div className="title-text mr-2">
                    <h3 className="text-lg font-weight-bold mr-3 text-dark  my-auto">City Code : </h3>
                  </div>
                  <div className="ml-5">
                    <Select options={options} />
                  </div>
                </div>
              </div>
              <div className="card bg-shadow-light py-2">
                <div className="card-body row no-gutters align-items-center justify-content-start">
                  <h3 className="title-text text-lg font-weight-bold mr-3 text-dark my-auto">Searching Criteria :</h3>
                  <input value={this.state.district} type={"text"} onChange={this.handleSearchedImmediate} className="text-searching" />
                  <button type={"submit"} className="btn btn-warning ml-2">
                    <Search />
                  </button>
                </div>
              </div>
              <div className="submitted">
                <button type={"submit"} className="btn btn-warning" title="Tambah">
                  <Plus />
                </button>
              </div>
            </form>
            <div className="container-fluid">
              <TableTemplate
                tableShouldShow={true}
                tableShouldUpdate={this.state.showSearchResult}
                headersField={this.state.headerWantsToBeRender}
                tableContent={this.state.tableContentWantToBeRendered}
                tableTitle={this.state.tableTitle}
                addButtonShow={true}
              />
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    4
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    5
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    6
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default DistrictMaintenance;
