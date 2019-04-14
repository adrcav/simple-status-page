import React, { Component } from 'react';

import './styles.css';

export default class Main extends Component {
    render() {
        return (
            <div className="wrapper bg-green">
                <h1>Simple</h1>
                <div className="main-container">
                    <div className="main-operational">
                        <span>
                            <p>All systems are operational</p>
                        </span>
                    </div>

                    <h2>System Status</h2>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
        );
    }
}