import React, { Component } from 'react';
import classNames from 'classnames';
import icon from 'components/_ui/DvsIcon/dvs-icon.png';
import './DvsIcon.scss';

class DvsIcon extends Component {
    onMouseOver = () => {
        this.props.setCurrentPet(this.props.pet);
    }

    onMouseLeave = () => {
        this.props.emptyCurrentPet();
    }

    getClassName() {
        const { className } = this.props;
        return classNames(className,
            'DvsIcon__container'
        );
    }

    render() {

        return (
            <div className={this.getClassName()}>
                <img
                    src={icon}
                    alt="Data Visualization Society unique member icon"
                    className="DvsIcon"/>
            </div>
        );
    }
}

export default DvsIcon;