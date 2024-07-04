import React, { useRef, useState } from "react";
import './TeamsSidebar.css';
import { NavLink } from 'react-router-dom';
const TeamsSidebar = ({ children }) => {
    const menu = useRef(null);

    const menuItem = [
        {
            path: "/ebiz",
            name: "Ebiz",

        },
        {
            path: "/kuu-laa",
            name: "Kuu-Laa",

        },
        {
            path: "/fws",
            name: "FWS",

        },
        {
            path: "/kitaab",
            name: "Kitaab",

        },
        {
            path: "/finsights",
            name: "Finsights",

        },
        {
            path: "/team",
            name: "Team",

        },
        {
            path: "/hrms",
            name: "HRMS",

        },
        {
            path: "/kuu-laa",
            name: "CRM",

        },
        {
            path: "/fws",
            name: "FWS",

        },
        {
            path: "/kitaab",
            name: "Engineering",

        },
        {
            path: "/finsights",
            name: "Sales",

        },
        {
            path: "/team",
            name: "Finance",

        }
    ]
    return (

        <div className='h-100'>
            <div id="sidebar" className='h-100 teams-sidebar'>
                <nav>
                    <div class="d-flex flex-column">
                        <div className='d-flex align-items-center justify-content-between mb-2 teams-div'>
                            <h5>Teams</h5>
                            <button className='btn add-teams' type='button' >
                                <i class="fas fa-plus fs-14"></i>
                            </button>
                        </div>
                        <a className='' href="">
                            <div className='d-flex align-items-center justify-content-between mb-2 sidebar-item teams-div'>
                                Lotus Wireless
                            </div>
                        </a>
                        <div className='d-flex align-items-center mb-2  p-rel'>
                            <input type="text" name="search" class="form-control search-input"
                                size="50" placeholder="Search"
                            />
                            <span class="fas fa-search search-icon"></span>
                        </div>
                        <hr />
                        <div className='h-100'>
                            <div className="board-list">
                                {

                                    menuItem.map((item, index) => (
                                        <NavLink to={item.path} key={index} className="link board-list-item" activeclassName="active">
                                            <div className="link_text">{item.name}</div>
                                        </NavLink>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="content">
                <main>{children}</main>
            </div>

        </div>
    )
}

export default TeamsSidebar