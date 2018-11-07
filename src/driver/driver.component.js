import React, { Component } from 'react';
import 'intersection-observer'; // optional polyfill
import Observer from '@researchgate/react-intersection-observer';
import { inject, observer } from 'mobx-react';
import views from '../config/views';

import './driver.style.scss';


const defaultProfileImage = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

function secureUrl(url) {
    if (!url) {
        return defaultProfileImage;
    }
    if (url.indexOf('https') < 0) {
        url = url.replace('http', 'https');
    }
    return url;
}

class Driver extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false, visibility: false };

        this.setActive = this.setActive.bind(this);
        this.setNotActive = this.setNotActive.bind(this);
        this.onImageError = this.onImageError.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    setActive() {
        this.setState({ active: true });
    }

    setNotActive() {
        this.setState({ active: false });
    }

    onImageError(e) {
        e.target.onerror = null;
        e.target.src = defaultProfileImage;
    }

    handleChange(event) {
        if (event.isIntersecting) {
            this.setState({ visibility: true });
        }
    }

    handleNavigation() {

    }

    render() {
        const { store } = this.props;
        const { router: { goTo } } = store;
        const { profile_image, name, company_name, phone, email, id } = this.props;
        const backgroundImage = secureUrl(profile_image);

        return (
            <div className="driver">
                <Observer onChange={this.handleChange} rootMargin="0% 0% 25%">
                    <div
                        onClick={() => goTo(views.driverDetails, { id: id }, store)}
                        onMouseOver={this.setActive}
                        onMouseLeave={this.setNotActive}>
                        {this.state.visibility && (
                            <div className={`image ${this.state.active ? 'active' : ''}`}>
                                <img src={backgroundImage} onError={this.onImageError} className="img-fluid"
                                     alt="Driver Iamge"></img>
                            </div>
                        )}
                        <div className="driverType">
                            <svg>
                                <use xlinkHref="#professional" />
                            </svg>
                        </div>
                        <div className="name">{name}</div>
                        <div className="rank">{company_name}</div>
                        {this.state.active && (
                            <div className="more">
                                {phone && <div className="phone">Phone Number: {phone}</div>}
                                {email && <div className="email">Email: {email}</div>}
                            </div>
                        )}
                    </div>
                </Observer>
            </div>
        );
    }
}

export default inject('store')(observer(Driver));
