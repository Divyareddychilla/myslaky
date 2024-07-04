import React, { useRef, useState } from "react";
import "./Sidebar.css";
import { Dropdown } from "primereact/dropdown";
import { TieredMenu } from "primereact/tieredmenu";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

import {
  FaSearch,
  FaRegClipboard,
  FaAngleDown,
  FaChevronLeft,
  FaChevronRight,
 } from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [isSolid, setIsSolid] = useState(false);

  const handleClick = () => {
    setIsSolid(!isSolid);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isLeft, setIsLeft] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const menu = useRef(null);
  const spaces = [
    { name: "Kuu-Laa", code: "kl" },
    { name: "E-Biz", code: "eb" },
  ];

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("center");

  const [menuItem, setMenuItem] = useState([
    { path: "/", name: "Dashboard", icon: <i class="far fa-clipboard"></i> },
    { path: "/about", name: "About", icon: <i class="far fa-clipboard"></i> },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <i class="far fa-clipboard"></i>,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <i class="far fa-clipboard"></i>,
    },
    {
      path: "/product",
      name: "Product",
      icon: <i class="far fa-clipboard"></i>,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <i class="far fa-clipboard"></i>,
    },
    { path: "/new", name: "New", icon: <i class="far fa-clipboard"></i> },
    {
      path: "/scrumboard",
      name: "Scrumboard",
      icon: <i class="far fa-clipboard"></i>,
    },
    {
      path: "/planning",
      name: "Planning",
      icon: <i class="far fa-clipboard"></i>,
    },
    { path: "/basic", name: "Basic", icon: <i class="far fa-clipboard"></i> },
    { path: "/list", name: "List", icon: <i class="far fa-clipboard"></i> },
  ]);

  const [showDialog, setShowDialog] = useState(false);
  const [boardName, setBoardName] = useState("");

  const dialogFooter = <div></div>;

  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };

  const handleArrowClick = () => {
    setIsLeft((isLeft) => !isLeft);
    setIsOpen((isOpen) => !isOpen);
  };

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.name}</div>
      </div>
    );
  };

  const items = [
    {
      label: "New Board",
      icon: <i className="far fa-clipboard"></i>,
      items: [
        {
          label: "Create from scratch",
          icon: <i class="far fa-clipboard"></i>,
          command: () => setShowDialog(true),
        },
        {
          label: "Create from template",
          icon: <i class="far fa-file-alt"></i>,
        },
      ],
    },
    {
      label: "New Folder",
      icon: <i className="far fa-folder"></i>,
    },
  ];

  const handleCreateBoard = () => {
    setMenuItem([
      ...menuItem,
      { path: "/", name: boardName, icon: <i class="far fa-clipboard"></i> },
    ]);
    setBoardName("");
    setShowDialog(false);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMenuItems = menuItem.filter(
    (item) => item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  );

  const menuItems = filteredMenuItems.map((item, index) => {
    const name = item.name;
    const regex = new RegExp(searchQuery, "gi");
    const highlightedName = name.replace(
      regex,
      (match) => `<span class="highlighted">${match}</span>`
    );

    return (
      <NavLink
        to={item.path}
        key={index}
        className="link board-list-item"
        activeClassName="active"
      >
        <div className="d-flex align-items-center">
          <span>{item.icon}</span>
          <span
            className="ms-2"
            dangerouslySetInnerHTML={{ __html: highlightedName }}
          ></span>
        </div>
        <div className="d-flex align-items-center ps-2">
          <span onClick={handleClick}>
            <FontAwesomeIcon icon={isSolid ? solidStar : regularStar} />
          </span>

          <span className="ps-2 board-menu">
            <button
              className="btn dropdown-ellipsis"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="far fa-copy"></i>
                    </span>
                    <span className="ms-2">Duplicate</span>
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="far fa-edit"></i>
                    </span>
                    <span className="ms-2">Rename Board</span>
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="far fa-arrow-alt-circle-right"></i>
                    </span>
                    <span className="ms-2">Move To</span>
                  </div>
                </a>
              </li>

              <li>
                <a className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="fas fa-plus"></i>
                    </span>
                    <span className="ms-2">Change Board type</span>
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="fas fa-plus"></i>
                    </span>
                    <span className="ms-2">Add new space</span>
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="far fa-star"></i>
                    </span>
                    <span className="ms-2">Unfavorite</span>
                  </div>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="fas fa-archive"></i>
                    </span>
                    <span className="ms-2">Archive board</span>
                  </div>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="far fa-trash-alt"></i>
                    </span>
                    <span className="ms-2">Delete board</span>
                  </div>
                </a>
              </li>
            </ul>
          </span>
        </div>
      </NavLink>
    );
  });

  return (
    <div className="h-100">
      <div
        style={{ width: isOpen ? "220px" : "0px" }}
        className="sidebar h-100"
      >
        <nav>
          <div className="d-flex flex-column">
            <div style={{ display: isOpen ? "block" : "none" }}>
              <div className="d-flex align-items-center justify-content-between mb-2 spaces">
                <h5 className="mb-0">Spaces</h5>
                <div className="dropdown">
                  <button
                    className="btn dropdown-ellipsis"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                  <ul className="dropdown-menu main-dropdown">
                    <li>
                      <a className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="fas fa-cog"></i>
                          </span>
                          <span className="ms-2">Main Space</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="far fa-edit"></i>
                          </span>
                          <span className="ms-2">Rename Space</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="fas fa-desktop"></i>
                          </span>
                          <span className="ms-2">Change space type</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="fas fa-home"></i>
                          </span>
                          <span className="ms-2">Set as default space</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="fas fa-plus"></i>
                          </span>
                          <span className="ms-2">Add new space</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="far fa-trash-alt"></i>
                          </span>
                          <span className="ms-2">Delete Space</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="mb-2"
            >
              <div className="sidebar-item main-space">
                <Dropdown
                  value={selectedCountry}
                  options={spaces}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  placeholder="Main Space"
                  valueTemplate={selectedCountryTemplate}
                  itemTemplate={countryOptionTemplate}
                />
              </div>
            </div>

            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="mb-2"
            >
              <div
                onClick={(e) => menu.current.toggle(e)}
                className="d-flex align-items-center  sidebar-item"
              >
                <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
                <button
                  className="btn w-100 text-white add-item-btn"
                  type="button"
                >
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="fas fa-plus-circle"></i>
                    </div>
                    <div className="ps-3">Add Item</div>
                  </div>
                </button>
              </div>
            </div>

            <div style={{ display: isOpen ? "block" : "none" }}>
              <div className="d-flex align-items-center mb-2  p-rel">
                <input
                  type="text"
                  name="search"
                  className="form-control search-input"
                  size="50"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <span className="fas fa-search search-icon"></span>
              </div>
            </div>

            <hr style={{ display: isOpen ? "block" : "none" }} class="mt-1" />

            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="h-100"
            >
              <div className="board-list">{menuItems}</div>
            </div>
          </div>
        </nav>
        <div
          className="arrow-click"
          style={{
            position: "absolute",
            top: "185px",
            left: isOpen ? "210px" : "0px",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            borderRadius: "7px",
            transition: "all 0.35s ease-in-out",
            border: "2px solid #a677df",
            cursor: "pointer",
          }}
          onClick={handleArrowClick}
        >
          {isLeft ? <FaChevronRight /> : <FaChevronLeft />}
        </div>

        <Dialog
          visible={showDialog}
          header="Create Board"
          onHide={() => setShowDialog(false)}
          className="my-dialog"
          style={{ width: "35vw" }}
          breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        >
          <div className="">
            <div className="row mb-3 align-items-center">
              <div className="col-md-12">
                <label htmlFor="board-name" className="board-name-text mb-2">
                  Board name
                </label>
                <input
                  type="text"
                  className="form-control w-100 board-input"
                  id="board-name"
                  value={boardName}
                  onChange={(e) => setBoardName(e.target.value)}
                />
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-end">
              <Button
                label="Create"
                onClick={handleCreateBoard}
                className="me-2 create-button"
              />
              <Button
                label="Close"
                onClick={() => setShowDialog(false)}
                className="p-button-text"
              />
            </div>
          </div>
        </Dialog>
      </div>
      <main style={{ marginLeft: isOpen ? "250px" : "0px" }}>{children}</main>
    </div>
  );
};

export default Sidebar;
