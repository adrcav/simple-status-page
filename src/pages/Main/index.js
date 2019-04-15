import React, { Component } from 'react';
import api, { settings } from '../../services/api';
import { FiCheckCircle } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import classNames from 'classnames';

import Footer from '../../components/Footer';

import { Container, ListMonitors } from './styles.js';

export default class Main extends Component {
    state = {
        monitors: [],
    };

    async componentDidMount() {
        const response = await api.post('/getMonitors', settings({ 
            'logs': 1,
            'custom_uptime_ratios': '7',
        }));
        this.setState({ monitors: response.data.monitors });
    }

    render() {
        return (
            <Container className="bg-green">
                <h1>{process.env.REACT_APP_TITLE}</h1>
                <div className="main-container">
                    <div className="main-operational">
                        <span>
                            <FiCheckCircle />
                            <p>All systems are operational</p>
                        </span>
                    </div>

                    <h2>System Status</h2>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                    <ListMonitors>
                        {this.state.monitors.map(monitor => (
                            <div key={monitor.id} className="item">
                                <span>
                                    <FaCircle 
                                        size={14} 
                                        style={{ marginRight: '7px' }}
                                        className={classNames({
                                            'success': monitor.status === 2,
                                            'danger': monitor.status === 9,
                                            'warning': monitor.status === 8,
                                            'dark': monitor.status === 0
                                        })}
                                    />
                                    {monitor.friendly_name}
                                </span>
                                <span>{Math.floor(monitor.custom_uptime_ratio)}%</span>
                            </div>
                        ))}
                    </ListMonitors>
                
                    <Footer />
                </div>
            </Container>
        );
    }
}