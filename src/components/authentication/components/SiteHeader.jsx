import React from 'react';
import {Link} from 'react-router-dom';
import css from "../Authentication.module.css";

const SiteHeader = () => {
    return (
        <div className={css.site_header}>
            {/* stuff on the left */}
            <div>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>

            {/* stuff on the right */}
            <div>
                <button>Login</button>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default SiteHeader;
