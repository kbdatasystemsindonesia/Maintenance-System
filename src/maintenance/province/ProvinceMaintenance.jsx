import React, { Component } from "react";
import Select from "react-select";
import "./Province.css";
import { BsPlusLg } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import TableTemplate from "../TableTemplate";

const options = [
  { value: "Indonesia", label: "ID" },
  { value: "Korea", label: "KR" },
  { value: "America", label: "US" },
];
class ProvinceMaintenance extends Component {
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
      countryDemanded: "",
      searchCriteria: "",
      showSearchResult: false,
      countryList: [],
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
      countryDemanded: e.target.value,
    });
  }
  handleSearchedSubmited(e) {
    e.preventDefault();
    if (this.state.countryDemanded.length === 0) {
      return;
    }
    //saat tombol search ditekan, cari dari countryData
    if (this.state.searchCriteria === "Code") {
      //jika mencari berdasarkan code, maka apapun yang sesuai sama Code
      //exact match maka masukkan ke tableContent dari Tabletemplate yang ingin render
      //var recordsTem=[];
      var records = this.state.countryList.filter((country) => country.code.toString().includes(this.state.countryDemanded.toUpperCase()));
      //console.log(records);
      var recordsTem = [];
      var headersTem = [];
      headersTem.push("No.");
      headersTem.push("Code");
      headersTem.push("Name");
      // if (records.length == 0) {
      //   this.setState({
      //     tableContentWantToBeRendered: [],
      //   });
      // } else {
      for (let i = 0; i < records.length; i++) {
        var record = [];
        record.push(`${i + 1}`);
        record.push(records[i].code.toString());
        record.push(records[i].name.toString());
        recordsTem.push(record);
        if (i === records.length - 1) {
          if (recordsTem.length > 0) {
            this.setState((state) => ({
              tableContentWantToBeRendered: recordsTem,
              headerWantsToBeRender: headersTem,
              tableTitle: "Country list",
              countryDemanded: "",
              showSearchResult: true,
              searchClicked: true,
              searchCriteria: state.searchCriteria,
            }));
          }
        }
      }
    } else if (this.state.searchCriteria === "Name") {
      var records = this.state.countryList.filter((country) => country.name.toString().includes(this.state.countryDemanded.toUpperCase()));
      //console.log(records);
      //console.log(records.length);
      var recordsTem = [];
      var headersTem = [];
      headersTem.push("No.");
      headersTem.push("Code");
      headersTem.push("Name");
      // if (records.length == 0) {
      //   this.setState({
      //     tableContentWantToBeRendered: [],
      //   });
      // } else {
      for (let i = 0; i < records.length; i++) {
        var record = [];
        record.push(`${i + 1}`);
        record.push(records[i].code.toString());
        record.push(records[i].name.toString());
        recordsTem.push(record);
        if (i === records.length - 1) {
          if (recordsTem.length > 0) {
            //console.log(recordsTem.length);
            this.setState((state) => ({
              tableContentWantToBeRendered: recordsTem,
              countryDemanded: "",
              headerWantsToBeRender: headersTem,
              tableTitle: "Country list",
              showSearchResult: true,
              searchClicked: true,
            }));
          }
        }
      }
    }
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
    //console.log(this.state.countryDemanded);
    /*if (this.state.showSearchResult === true && prevState.showSearchResult === false) {
      //tombol untuk mencari sudah ditekan sehingga dengan algoritma pencarian, masukkan setiap nama country yang sesuai ke TableTemplate
    } else */

    //console.log("componentDidUpdate" + this.state.showSearchResult + prevState.showSearchResult);
    if (this.state.showSearchResult === true && prevState.showSearchResult === false) {
      this.setState({
        showSearchResult: false,
      });
    }
  }
  componentDidMount() {
    //dipanggil pas render pertama selesai
    fetch("./provinceData.json")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          countryList: result,
        });
        //console.log(this.state.countryList);
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
              <div className="card border-bottom-white">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="mr-2">
                      <h3 className="text-lg font-weight-bold mr-3">Search Province by category of :</h3>
                      <div className="card-body row no-gutters align-items-center justify-content-right"></div>
                      <h3 className="text-lg font-weight-bold mr-3 ">Country Code : </h3>
                      <div className="ml-2">
                      <Select options={options} />
                     </div>
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

export default ProvinceMaintenance;