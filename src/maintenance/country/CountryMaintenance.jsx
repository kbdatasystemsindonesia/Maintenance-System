import React, { Component } from "react";
import "./CountryMaintenance.css";
import TableTemplate from "../TableTemplate";
import { BsSearch as Search } from "react-icons/bs";

class CountryMaintenance extends Component {
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
              searchCriteria: state.searchCriteria,
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
    fetch("./countryData.json")
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
          <div className="card shadow align-items-center">
            <h1 className="card-header p-1 col-12 text-white bg-shadow-dark ">Country Menu</h1>

            <form onSubmit={this.handleSearchedSubmited} className=" col-xl-12 col-md-12  ">
              <div className="card-body row flex-column align-items-center">
                <div className="row-highlight bg-light py-1" style={{ display: "flex", flexDirection: "row" }}>
                  <h5 className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Search by </h5>
                  <h5 className="col-sm-1 col-form-label margin-top-rem-1">:</h5>

                  <div className="radio-column form-check d-inline-block">
                    <div className="radio-item">
                      <input className="form-check-input" type={"radio"} value="Code" onClick={this.searchByCode} name="criteria" required />
                      Code
                    </div>
                    <div className="radio-item">
                      <input className="form-check-input" type={"radio"} value="Name" onClick={this.searchByName} name="criteria" required />
                      Name
                    </div>
                  </div>
                </div>
                <div className="row-highlight align-items-center py-2" style={{ display: "flex", flexDirection: "row", backgroundColor: "rgb(255,188,0)" }}>
                  <h5 className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Searching Criteria</h5>
                  <h5 className="col-sm-1 margin-top-rem-1 col-form-label">:</h5>
                  <input value={this.state.countryDemanded} type={"text"} onChange={this.handleSearchedImmediate} className="text-searching" required />
                </div>
                <div className="btn-center">
                  <button type={"submit"} className="btn country-searching-criteria">
                    <Search />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" pt-3 col-md-12 col-xl-12">
            <TableTemplate
              tableShouldShow={this.state.searchClicked}
              tableShouldUpdate={this.state.showSearchResult}
              headersField={this.state.headerWantsToBeRender}
              tableContent={this.state.tableContentWantToBeRendered}
              tableTitle={this.state.tableTitle}
              addButtonShow={true}
              addButtonNav={"/country-create"}
              linkToDetail={["/country", 1]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CountryMaintenance;
