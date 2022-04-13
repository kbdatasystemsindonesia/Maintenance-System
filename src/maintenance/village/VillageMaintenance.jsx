import React, { Component } from "react";
import Select from "react-select";
import "./VillageMaintenance.css";
import { BsSearch as Search } from "react-icons/bs";

import TableTemplate from "../TableTemplate";

const options = [
  { value: "Indonesia", label: "ID" },
  { value: "Korea", label: "KR" },
  { value: "America", label: "US" },
];

class villageMaintenance extends Component {
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
      villageDemanded: "",
      searchCriteria: "",
      showSearchResult: false,
      villageList: [],
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
      village: e.target.value,
    });
  }
  handleSearchedSubmited(e) {
    e.preventDefault();
    if (this.state.village.length === 0) {
      return;
    }
    //saat tombol search ditekan, maka
    this.setState((state) => ({
      villageDemanded: state.villageDemanded,
      showSearchResult: true,
      searchClicked: true,
      tableTitle: "village list",
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
  //saat setelah dirender, seorang dapat mencari country dengan mengetik dalam input text, nama / code country.
  componentDidUpdate(prevProps, prevState, snapShot) {
    //console.log(this.state.village);
    if (this.state.showSearchResult === true && prevState.showSearchResult === false) {
      //tombol untuk mencari sudah ditekan sehingga dengan algoritma pencarian, masukkan setiap nama country yang sesuai ke TableTemplate
      if (this.state.searchCriteria === "Code") {
        //jika mencari berdasarkan code, maka apapun yang sesuai sama Code
        //exact match maka masukkan ke tableContent dari Tabletemplate yang ingin render
        //var recordsTem=[];
        var records = this.state.villageList.filter((village) => village.code.toString().includes(this.state.village.toUpperCase()));
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
              tableTitle: "village list",
              village: "",
            });
          }
        }
      } else if (this.state.searchCriteria === "Name") {
        var records = this.state.villageList.filter((village) => village.name.toString().includes(this.state.village.toUpperCase()));
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
              village: "",
              headerWantsToBeRender: headersTem,
              tableTitle: "village list",
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
    fetch("./villageData.json")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          villageList: result,
        });
        //console.log(this.state.countryList);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="mb-1 bg-shadow-dark mx-auto ">
          <h3 className="mb-0 text-white">Village Menu</h3>
        </div>

        <form onSubmit={this.handleSearchedSubmited}>
          <div className="card border-left-warning solid shadow mb-4">
            {/* <div className="card-header bg-shadow-dark py-3">
                            <h4 className="m-0 font-weight-bold text-light text-center bold">village Menu</h4>
                        </div> */}
            <div className="card-body">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-md-6">
                    <div className="mr-2 mb-2">
                      <h3 className="text-lg font-weight-bold mr-3 text-dark  my-auto">Search by Category : </h3>
                    </div>
                    <div className="mt-1">
                      <div class="form-check">
                        <input class="form-check-input" value="Code" onClick={this.searchByCode} type={"radio"} name="criteria" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                          Code
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" value="Name" onClick={this.searchByName} type={"radio"} name="criteria" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                          Name
                        </label>
                      </div>
                      {/* <div className="radio-item">
                                                <input type={"radio"} value="Code" onClick={this.searchByCode} name="criteria" /> Code

                                                <input type={"radio"} value="Name" onClick={this.searchByName} name="criteria" className="ml-3" /> Name
                                            </div> */}
                    </div>

                    <div className="mb-2">
                      <h3 for="name" className="form-label text-lg font-weight-bold mr-3 text-dark  my-auto">
                        Country Code
                      </h3>
                    </div>
                    <div className="pb-2">
                      <Select options={options} />
                    </div>
                    <div className="mb-2">
                      <h3 for="name" className="form-label text-lg font-weight-bold mr-3 text-dark  my-auto">
                        Province Code
                      </h3>
                    </div>
                    <div className="pb-2">
                      <Select options={options} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-2">
                      <h3 for="name" className="form-label text-lg font-weight-bold mr-3 text-dark  my-auto">
                        City Code
                      </h3>
                    </div>
                    <div className="pb-2">
                      <Select options={options} />
                    </div>
                    <div className="mb-2">
                      <h3 for="name" className="form-label text-lg font-weight-bold mr-3 text-dark  my-auto">
                        District Code
                      </h3>
                    </div>
                    <div className="pb-2">
                      <Select options={options} />
                    </div>
                    <div className="mb-2">
                      <h3 for="name" className="form-label text-lg font-weight-bold mr-3 text-dark  my-auto">
                        Searching Criteria
                      </h3>
                    </div>
                    <div className="pb-2">
                      <input value={this.state.village} type={"text"} onChange={this.handleSearchedImmediate} className="form-control form-control-user" />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <button type={"submit"} className="searching-criteria" title="Search">
                    <Search />
                  </button>
                </div>
              </div>
            </div>
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
              addButtonNav={"/country/create"}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default villageMaintenance;
