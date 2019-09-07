import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Spinner.scss';

class Spinner extends Component {
    static propTypes = {
        emptyCurrentPet: PropTypes.func,
        currentMenuStep: PropTypes.number,
        pet: PropTypes.string,
        mouseEventsEnabled: PropTypes.bool,
        size: PropTypes.string,
        spin: PropTypes.bool
    };

    static defaultProps = {
        pet: "oscar",
        mouseEventsEnabled: false,
        spin: false
    };

    onMouseOver = () => {
        this.props.setCurrentPet(this.props.pet);
    }

    onMouseLeave = () => {
        this.props.emptyCurrentPet();
    }

    getClassName() {
        const { size, spin, className } = this.props;
        return classNames(className,
            'Spinner__container',
            `Spinner__container--size-${size}`,
            {'Spinner__container--spin': spin}
        );
    }

    render() {
        const { pet, mouseEventsEnabled } = this.props;

        return (
            <div className={this.getClassName()}
                 onMouseOver={mouseEventsEnabled ? this.onMouseOver : null}
                 onMouseLeave={mouseEventsEnabled ? this.onMouseLeave : null}>
                <img
                    src={require(`./img-${pet}.png`)}
                    alt="Spinning pet"
                    className="Spinner"/>
            </div>
        );
    }
}

export default Spinner;