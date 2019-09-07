import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends Component {
    static propTypes = {
        category: PropTypes.oneOf(['primary', 'secondary', 'secondary--white']),
        size: PropTypes.oneOf(['large', 'small']),
        shape: PropTypes.oneOf(['round', 'square']),
    };

    static defaultProps = {
        category: 'primary',
        size: 'small',
        shape: 'square',
    };

    getClassName() {
        const { category, size, shape, className } = this.props;
        return classNames(className,
            'Button',
            `Button--${category}`,
            `Button--size-${size}`,
            `Button--shape-${shape}`
        );
    }

    render() {
        const { category, shape, size, children, className, ...props } = this.props;
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