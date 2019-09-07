import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Label.scss';

class Label extends Component {
    static propTypes = {
        category: PropTypes.oneOf(['primary', 'secondary', 'table']),
        //heading: PropTypes.bool,
    };

    static defaultProps = {
        category: 'secondary',
        //heading: false,
    };

    getClassName() {
        const { category, className, heading } = this.props;
        return classNames(className,
            "Label",
            `Label--${category}`,
            { 'Label--heading': heading }
        );
    }

    render() {
        const { category, children, className, ...props } = this.props;
        return (
            <div className={this.getClassName()} {...props}>
                {this.props.children}
            </div>
        );
    }
}

export default Label;