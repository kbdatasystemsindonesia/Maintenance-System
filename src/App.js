import { Component } from "react";
import SidebarLeft from "./SidebarLeft";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "./Foooter";
import Topbar from "./Topbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import CountryMaintenance from "./maintenance/country/CountryMaintenance";
import ProvinceMaintenance from "./maintenance/province/ProvinceMaintenance";
import CityMaintenance from "./maintenance/city/CityMaintenance";
import DistrictMaintenance from "./maintenance/district/DistrictMaintenance";
import VillageMaintenance from "./maintenance/village/VillageMaintenance";
import DistrictMaintenance2 from "./maintenance/district/DistrictMaintenance2";
import DistrictDetail from "./maintenance/district/DistrictDetail";
import VillageDetail from "./maintenance/village/VillageDetail";
import CityDetail from "./maintenance/city/CityDetail";
import PostalCode from "./maintenance/postal/PostalCode";
import CountryCreate from "./maintenance/country/CountryCreate";
import CountryDetail from "./maintenance/country/CountryDetail";
import GetCountryId from "./maintenance/country/GetCountryId";
import Parameter from "./maintenance/parameter/Parameter";
import ParameterAdd from "./maintenance/parameter/ParameterAdd";
import ParameterUpdate from "./maintenance/parameter/ParameterUpdate";
import ParameterDetail from "./maintenance/parameter/ParameterDetail";
import ProvinceAdd from "./maintenance/province/ProvinceAdd";
import ProvinceUpdate from "./maintenance/province/ProvinceUpdate";
import ProvinceDetail from "./maintenance/province/ProvinceDetail";
import Province from "./maintenance/province/Province";
import "./App.css";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div id="wrapper">
        <BrowserRouter>
          <SidebarLeft />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route exact path="/others" element={<Others />} /> */}
                <Route exact path="/country" element={<CountryMaintenance />} />
                <Route path="/country/:id" element={<GetCountryId />} />
                <Route exact path="/country-create" element={<CountryCreate />} />
                <Route exact path="/provincemaintenance" element={<ProvinceMaintenance />} />
                <Route exact path="/city" element={<CityMaintenance />} />
                <Route exact path="/district" element={<DistrictMaintenance />} />
                <Route exact path="/district2" element={<DistrictMaintenance2 />} />
                <Route exact path="/village" element={<VillageMaintenance />} />
                <Route exact path="/districtdetail" element={<DistrictDetail />} />
                <Route exact path="/villagedetail" element={<VillageDetail />} />
                <Route exact path="/citydetail" element={<CityDetail />} />
                <Route exact path="/postalcode" element={<PostalCode />} />
                <Route exact path="/parameter" element={<Parameter />} />
                <Route exact path="/parameteradd" element={<ParameterAdd />} />
                <Route exact path="/parameterupdate" element={<ParameterUpdate />} />
                <Route exact path="/parameterdetail" element={<ParameterDetail />} />
                <Route exact path="/provinceadd" element={<ProvinceAdd />} />
                <Route exact path="/provinceupdate" element={<ProvinceUpdate />} />
                <Route exact path="/provincedetail" element={<ProvinceDetail />} />
                <Route exact path="/province" element={<Province />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
