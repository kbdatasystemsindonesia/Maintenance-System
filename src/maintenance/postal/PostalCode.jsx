import React, { Component } from "react";
import "../province/ProvinceMaintenance.css";
import TableTemplate from "../TableTemplate";
import Select from "react-select";
import { BsSearch } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

const options = [
  { value: "Indonesia", label: "ID" },
  { value: "Korea", label: "KR" },
  { value: "America", label: "US" },
];

class PostalCode extends Component {
  //saat dipanggil, langsung render awal dengan Province list yang kosong karena belum ada pencarian
  constructor(props) {
    /*save state for searched keywords:
     * option 1: onChange searched immediately
     * option 2: onSubmitted searched
     * option 3: both
     * */
    super(props);
    //tableContent must array of array of string
    this.state = {
      ProvinceDemanded: "",
      searchCriteria: "",
      showSearchResult: false,
      ProvinceList: [],
      tableContentWantToBeRendered: [],
      headerWantsToBeRender: [],
      tableTitle: "",
      searchClicked: false,
    };
    this.handleSearchedImmediate = this.handleSearchedImmediate.bind(this);
    this.handleSearchedSubmited = this.handleSearchedSubmited.bind(this);
    this.searchByCode = this.searchByCode.bind(this);
    this.searchByName = this.searchByName.bind(this);
  }
  handleSearchedImmediate(e) {
    this.setState({
      ProvinceDemanded: e.target.value,
    });
  }
  handleSearchedSubmited(e) {
    e.preventDefault();
    if (this.state.ProvinceDemanded.length === 0) {
      return;
    }
    //saat tombol search ditekan, maka
    this.setState((state) => ({
      ProvinceDemanded: state.ProvinceDemanded,
      showSearchResult: true,
      searchClicked: true,
      tableTitle: "Province list",
      tableContentWantToBeRendered: this.state.tableContentWantToBeRendered,
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
  //saat setelah dirender, seorang dapat mencari Province dengan mengetik dalam input text, nama / code Province.
  componentDidUpdate(prevProps, prevState, snapShot) {
    //console.log(this.state.ProvinceDemanded);
    if (this.state.showSearchResult === true && prevState.showSearchResult === false) {
      //tombol untuk mencari sudah ditekan sehingga dengan algoritma pencarian, masukkan setiap nama Province yang sesuai ke TableTemplate
      if (this.state.searchCriteria === "Code") {
        //jika mencari berdasarkan code, maka apapun yang sesuai sama Code
        //exact match maka masukkan ke tableContent dari Tabletemplate yang ingin render
        //var recordsTem=[];
        var records = this.state.ProvinceList.filter((Province) => Province.code.toString().includes(this.state.ProvinceDemanded.toUpperCase()));
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
              tableTitle: "Province list",
              ProvinceDemanded: "",
            });
          }
        }
      } else if (this.state.searchCriteria === "Name") {
        var records = this.state.ProvinceList.filter((Province) => Province.name.toString().includes(this.state.ProvinceDemanded.toUpperCase()));
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
              ProvinceDemanded: "",
              headerWantsToBeRender: headersTem,
              tableTitle: "Province list",
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
    fetch("./postaldata.json")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          ProvinceList: result,
        });
        //console.log(this.state.ProvinceList);
      });
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="mb-4 bg-shadow-dark mx-auto col-xl-11 col-md-11">
            <h3 className="mb-0 text-white">Province Menu</h3>
          </div>
          <div className="row flex-column align-items-center">
            <div className="col-xl-11 col-md-11 mb-4">
              <div className="card border-bottom-warning">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="mr-2">
                      <h3 className="text-lg font-weight-bold mr-3">Search Province by category of :</h3>
                    </div>
                    <div className="radio-column">
                      <div className="radio-item">
                        <input type={"radio"} value="Code" onClick={this.searchByCode} name="criteria" />
                        Code
                      </div>
                      <div className="radio-item">
                        <input type={"radio"} value="Name" onClick={this.searchByName} name="criteria" />
                        Name
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={this.handleSearchedSubmited} className="col-xl-11 col-md-11 row flex-column">
              <div className="card-body row no-gutters align-items-center justify-content-center">
                <div className="mr-2">
                  <h3 className="text-lg font-weight-bold mr-3 text-dark my-auto">Country Code : </h3>
                </div>
                <div className="ml-2">
                  <Select options={options} />
                </div>
              </div>
              <div className="card bg-shadow-ginger py-2">
                <div className="card-body row no-gutters align-items-center justify-content-start">
                  <h3 className="text-lg font-weight-bold mr-3 text-dark my-auto">Searching Criteria :</h3>
                  <input value={this.state.ProvinceDemanded} type={"text"} onChange={this.handleSearchedImmediate} className="text-searching" />
                </div>
              </div>
              <div className="btn-end">
                <button type={"submit"} className="searching-criteria">
                  <i className="mr-1">
                    <BsSearch></BsSearch>
                  </i>
                </button>
                <button type={"submit"} className="searching-criteria">
                  <i className="mr-1">
                    <BsPlusLg></BsPlusLg>
                  </i>
                </button>
              </div>
            </form>
            <div className="container-fluid">
              {this.state.searchClicked ? (
                <TableTemplate
                  tableShouldShow={this.state.searchClicked}
                  tableShouldUpdate={this.state.showSearchResult}
                  headersField={this.state.headerWantsToBeRender}
                  tableContent={this.state.tableContentWantToBeRendered}
                  tableTitle={this.state.tableTitle}
                  addButtonShow={true}
                  addButtonNav={"/province/create"}
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostalCode;
