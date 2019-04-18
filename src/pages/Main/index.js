import React, { Component } from 'react';
import api, { settings } from '../../services/api';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import classNames from 'classnames';
import ContentLoader from 'react-content-loader';

import Footer from '../../components/Footer';

import { Container, ListMonitors } from './styles.js';

export default class Main extends Component {
    state = {
        monitors: [],
        loading: true,
        status: true,
    };

    async componentDidMount() {
        this.setState({ loading: true });
        const response = await api.post('/getMonitors', settings({ 
            'logs': 1,
            'custom_uptime_ratios': '7',
            'all_time_uptime_durations': 1,
        }));
        this.setState({ monitors: response.data.monitors, loading: false });
        this.checkStatus();
    };

    checkStatus = () => {
        this.state.monitors.forEach(monitor => {
            if (monitor.status !== 0 || monitor.status !== 2) {
                this.setState({ status: false });
            }
        });
    };

    render() {
        return (
            <Container className="bg-green">
                <h1>{process.env.REACT_APP_TITLE}</h1>
                <div className="main-container">
                    <div className="main-operational">
                        {this.state.status ? (
                            <span>
                                <FiCheckCircle />
                                <p>All systems are operational</p>
                            </span>
                        ) : (
                            <span className="warning">
                                <FiAlertCircle />
                                <p>Some systems are experiecing issues</p>
                            </span>
                        )}
                    </div>

                    <h2>System Status</h2>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                    {this.state.loading &&
                        <ContentLoader
                            height={55}
                            width={550}
                            speed={2}
                            primaryColor="#f3f3f3"
                            secondaryColor="#ecebeb"
                        >
                            <circle cx="28" cy="26" r="0" /> 
                            <circle cx="16" cy="15" r="9" /> 
                            <rect x="33" y="11" rx="0" ry="0" width="161" height="10" /> 
                            <circle cx="16" cy="45" r="9" /> 
                            <rect x="33" y="41" rx="0" ry="0" width="161" height="10" />
                        </ContentLoader>
                    }

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