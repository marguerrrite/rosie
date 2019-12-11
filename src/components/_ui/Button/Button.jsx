// Button logic by Amelia Wattenberger | github.com/wattenberger | @wattenberger

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends Component {
    static propTypes = {
        category: PropTypes.oneOf(['primary', 'secondary', 'secondary--white']),
        size: PropTypes.oneOf(['xl', 'l', 'm', 's']),
        shape: PropTypes.oneOf(['round', 'square']),
    };

    static defaultProps = {
        category: 'primary',
        size: 's',
        shape: 'square',
        color: 'blue',
    };

    getClassName() {
        const { category, size, shape, color, className } = this.props;
        return classNames(className,
            'Button',
            `Button--${category}`,
            `Button--size-${size}`,
            `Button--shape-${shape}`,
            `Button--color-${color}`
        );
    }

    render() {
        const { category, shape, size, children, color, className, ...props } = this.props;
        return (
            <button
                onClick={this.props.onClick}
                className={this.getClassName()}
                {...props} >
                {this.props.children}
            </button>
        );
    }
}

export default Button;