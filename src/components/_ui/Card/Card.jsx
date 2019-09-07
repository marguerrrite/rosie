import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends Component {
    static propTypes = {
        category: PropTypes.oneOf(['l', 'm', 's']),
        padding: PropTypes.bool,
    };

    static defaultProps = {
        category: 'm',
    };

    getClassName() {
        const { category, padding, className } = this.props;
        return classNames(className,
            'Card',
            `Card--size-${category}`,
            {'Card--padding' : padding}
        );
    }

    render() {
        const { category, padding, children, className, ...props } = this.props;
        return (
            <div className={this.getClassName()}
                {...props} >
                {this.props.children}
            </div>
        );
    }
}

export default Card;