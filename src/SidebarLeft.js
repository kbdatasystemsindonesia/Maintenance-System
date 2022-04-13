import { Component } from "react";
import { NavLink } from "react-router-dom";
import kbLogo from "./Pictures/kb-logo.jfif";
import "./SidebarLeft.css";
import { BsGlobe } from "react-icons/bs";
import {
  MdLanguage,
  MdTableRows,
  MdFolder,
  MdCardMembership,
  MdSpaceDashboard,
  MdPalette,
  MdLocationCity,
  MdAreaChart,
  MdLogout,
  MdCardGiftcard,
  MdHolidayVillage,
  MdHomeWork,
  MdCardTravel,
  MdTerrain,
  MdOutlineSecurity,
  MdCode,
  MdCreateNewFolder,
  MdFileCopy,
  MdLogin,
  MdFolderSpecial,
  MdPassword,
  MdOutlineAccountBox,
  MdAutoFixHigh,
  MdCarRepair,
  MdSimCard,
  MdLockOutline,
  MdCreditCard,
  MdPerson,
  MdOutlineCreditScore,
  MdHome,
  MdDns,
} from "react-icons/md";

class SidebarLeft extends Component {
  onSelectClick = (e) => {
    e.className = e.className + " active";
  };

  render() {
    return (
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px" }}>
        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" href="/">
          <div>
            <img src={kbLogo} className="rounded rounded-circle"></img>
          </div>

          <div className=" fs-5 fw-semibold mx-3">KB Data Systems Indonesia</div>
        </a>

        <ul className="nav nav-pills flex-column mb-auto ">
          <li className="border-top my-3"></li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/">
              <i className="me-1">
                <MdSpaceDashboard></MdSpaceDashboard>
              </i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="border-top my-3"></li>

          <div className="ms-1 my-1">Maintenance Web</div>

          <li className="mb-1">
            <button className="btn accordion-button align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSecurity" aria-expanded="true" aria-controls="collapseSecurity">
              <i className="me-1">
                <MdOutlineSecurity></MdOutlineSecurity>
              </i>
              <span>Security</span>
            </button>
            <div id="collapseSecurity" className="collapse ms-3 me-1">
              <div className="bg-white py-2 rounded-3">
                <h6 className="text-dark">Screen Code : </h6>
                <ul className="list-unstyled fw-normal pb-1">
                  <li className="mx-2 ">
                    <NavLink className="collapse-item text-decoration-none " to="/security">
                      <i className="me-1">
                        <MdCode></MdCode>
                      </i>
                      Screen Code Collections
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="mb-1">
            <button className="btn accordion-button align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#collapseCIF" aria-expanded="true" aria-controls="collapseSecurity">
              <i className="me-1">
                <MdFolderSpecial></MdFolderSpecial>
              </i>
              <span>CIF</span>
            </button>
            <div id="collapseCIF" className="collapse ms-3 me-1">
              <div className="bg-white py-2 rounded-3">
                <h6 className="text-dark">CIF Collections : </h6>
                <ul className=" list-unstyled fw-normal pb-1">
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/cif">
                      <i className="me-1">
                        <MdFileCopy></MdFileCopy>
                      </i>
                      Whole CIF
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/cif-create">
                      <i className="me-1">
                        <MdCreateNewFolder></MdCreateNewFolder>
                      </i>
                      Create CIF
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="mb-1">
            <button className="btn accordion-button align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#collapseArea" aria-expanded="true" aria-controls="collapseArea">
              <i className="me-1">
                <MdLanguage></MdLanguage>
              </i>
              <span>Area Maintenance</span>
            </button>
            <div id="collapseArea" className="collapse me-1 ms-3">
              <div className="bg-white py-2 rounded-3">
                <h6 className="text-dark">Area of Business : </h6>
                <ul className="list-unstyled fw-normal pb-1">
                < li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/parameter">
                      <i className="me-1">
                        <MdDns></MdDns>
                      </i>
                      Parameter
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/country">
                      <i className="me-1">
                        <BsGlobe></BsGlobe>
                      </i>
                      Countries Maintenance
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/province">
                      <i className="me-1">
                        <MdTerrain></MdTerrain>
                      </i>
                      Provinces Maintenance
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/city">
                      <i className="me-1">
                        <MdLocationCity></MdLocationCity>
                      </i>
                      Cities Maintenance
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none " to="/district2">
                      <i className="me-1">
                        <MdHomeWork></MdHomeWork>
                      </i>
                      Districts Maintenance
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/village">
                      <i className="me-1">
                        <MdHolidayVillage></MdHolidayVillage>
                      </i>
                      Villages Maintenance
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/postalcode">
                      <i className="me-1">
                        <MdHome></MdHome>
                      </i>
                      Postal Code
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="mb-2">
            <button className="btn accordion-button align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#collapseLoan" aria-expanded="true" aria-controls="collapseLoan">
              <i className="me-1">
                <MdCreditCard></MdCreditCard>
              </i>
              <span>Loan App</span>
            </button>
            <div id="collapseLoan" className="collapse ms-3 me-1" aria-labelledby="headingLoan" data-parent="#accordionSidebar">
              <div className="bg-white py-2 rounded-3">
                <h6 className="text-dark">Loan Maintenance</h6>
                <ul className="list-unstyled fw-normal pb-1">
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/personalLoan">
                      <i className="me-1">
                        <MdPerson></MdPerson>
                      </i>
                      Personal Loan
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/cardLoan">
                      <i className="me-1">
                        <MdCreditCard></MdCreditCard>
                      </i>
                      Credit Card
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/mortgageLoan">
                      <i className="me-1">
                        <MdOutlineCreditScore></MdOutlineCreditScore>
                      </i>
                      Mortgage
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="border-top my-3"></li>

          <div className="ms-1 my-1">Interface</div>

          <li className="mb-1">
            <button className="btn accordion-button align-items-center rounded collapsed " data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="me-1">
                <MdPalette></MdPalette>
              </i>
              <span>Components</span>
            </button>

            <div id="collapseTwo" className="collapse ms-3 me-1">
              <div className="bg-white py-2 rounded-3">
                <h6 className="text-dark">Custom Components:</h6>
                <ul className=" list-unstyled fw-normal pb-1">
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/buttons">
                      Buttons
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/cards">
                      Cards
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="mb-1">
            <button className="btn accordion-button align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="me-1">
                <MdAutoFixHigh></MdAutoFixHigh>
              </i>
              <span>Utilities</span>
            </button>

            <div id="collapseUtilities" className="collapse me-1 ms-3">
              <div className="bg-white py-2 rounded-3">
                <h6 className="text-dark">Custom Utilities:</h6>
                <ul className="list-unstyled fw-normal pb-1 ">
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/colors">
                      Colors
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/borders">
                      Borders
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/animations">
                      Animations
                    </NavLink>
                  </li>
                  <li className="mx-2">
                    <NavLink className="collapse-item text-decoration-none" to="/others">
                      Other
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="border-top my-3"></li>

          <div className="ms-1 my-1">Addons</div>

          <li className="mb-1">
            <button className="btn accordion-button align-items-center collapsed rounded" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
              <i className=" me-1">
                <MdFolder></MdFolder>
              </i>
              <span>Pages</span>
            </button>

            <div id="collapsePages" className="collapse me-1 ms-3">
              <div className="bg-white py-2 rounded-3">
                <h6 className="text-dark">Login Screens:</h6>
                <ul className="list-unstyled fw-normal pb-1">
                  <li className="mx-2">
                    <a className="collapse-item text-decoration-none" href="login.html">
                      <i className="me-1">
                        <MdLogin></MdLogin>
                      </i>
                      Login
                    </a>
                  </li>
                  <li className="mx-2">
                    <a className="collapse-item text-decoration-none" href="register.html">
                      <i className="me-1">
                        <MdOutlineAccountBox></MdOutlineAccountBox>
                      </i>
                      Register
                    </a>
                  </li>
                  <li className="mx-2">
                    <a className="collapse-item text-decoration-none" href="forgot-password.html">
                      <i className="me-1">
                        <MdPassword></MdPassword>
                      </i>
                      Forgot Password
                    </a>
                  </li>
                  <li className="border-top my-3"></li>

                  <h6 className="text-dark">Other Pages:</h6>
                  <li className="mx-2">
                    <a className="collapse-item text-decoration-none" href="404.html">
                      404 Page
                    </a>
                  </li>
                  <li className="mx-2">
                    <a className="collapse-item text-decoration-none" href="blank.html">
                      Blank Page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="mx-2 my-1">
            <NavLink className="btn align-items-center rounded" to="/charts">
              <i className=" me-1">
                <MdAreaChart></MdAreaChart>
              </i>
              <span>Charts</span>
            </NavLink>
          </li>

          <li className="mx-2 my-2">
            <NavLink className="btn align-items-center rounded" to="/tables">
              <i className="me-1">
                <MdTableRows></MdTableRows>
              </i>
              <span>Tables</span>
            </NavLink>
          </li>
          <li className="border-top my-3"></li>
          <li className="mx-2 my-1">
            <NavLink className="btn align-items-center rounded" to="/dashboard">
              <i className=" me-1">
                <MdLogout></MdLogout>
              </i>
              <span>Sign Out</span>
            </NavLink>
          </li>

          <div className="text-center d-none d-md-inline">
            <button id="sidebarToggle"></button>
          </div>
          {/*
                <div className="sidebar-card d-none d-lg-flex">
                    <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."></img>
                    
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                    
                    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                </div>
                */}
        </ul>
      </div>
    );
  }
}

export default SidebarLeft;
// export default SidebarLeft;