import React, { Component } from 'react';
//import classNames from 'classnames';
import './BookTooltip.scss';

class BookTooltip extends Component {

    render() {
        return (
            <div className="BookTooltip">
                {this.props.children}
            </div>
        );
    }
}

export default BookTooltip;