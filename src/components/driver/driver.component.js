import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'intersection-observer'; // optional polyfill
import Observer from '@researchgate/react-intersection-observer';
import { inject, observer } from 'mobx-react';
import views from '../../config/views';
import {secureUrl, getDefaultImg} from './url.service';

import './driver.style.scss';


class Driver extends Component {
    onImageError(e) {
        e.target.onerror = null;
        e.target.src = getDefaultImg();
    }

    render() {
        const { store, data = {}, isIntersecting, id, setIntersecting } = this.props;
        const { router: { goTo } } = store;
        const { profile_image, name, company_name, phone, email } = data;
        const backgroundImage = secureUrl(profile_image);

        return (
            <div className="driver">
                <Observer onChange={(e) => e.isIntersecting && setIntersecting()} rootMargin="0% 0% 25%">
                    <div
                        onClick={() => goTo(views.driverDetails, { id: id }, store)}>
                        {isIntersecting && (
                            <div className="image">
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
                        <div className="more">
                            {phone && <div className="phone">Phone Number: {phone}</div>}
                            {email && <div className="email">Email: {email}</div>}
                        </div>
                    </div>
                </Observer>
            </div>
        );
    }
}

Driver.propTypes = {
    store: PropTypes.object.isRequired,
    data: PropTypes.object,
    isIntersecting: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    setIntersecting: PropTypes.func.isRequired,
};

export default inject('store')(observer(Driver));
