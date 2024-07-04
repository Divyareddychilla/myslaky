import React from "react";
import { Avatar } from 'primereact/avatar';
const Ebiz = () => {
    return (
        <div className="teampage">
            <div className="row">
                <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                        <div>
                        <Avatar label="E" size="xlarge" style={{ backgroundColor: '#a677df', color: '#ffffff' }} />
                        </div>
                        <div className="ps-2">
                            <h4 className="mb-1">Ebiz</h4>
                            <div className="fs-12 d-flex align-items-center">   <Avatar label="U" className="name-avatar me-1"  /> Prasanthi <span className="px-2 fs-16">|</span> <i class="far fa-calendar-alt fs-12 pe-2"></i> May 4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ebiz;