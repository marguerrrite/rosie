import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Label from "components/_ui/Label/Label";
import Spinner from "components/_ui/Spinner/Spinner";
import './SpinningPets.scss';

class SpinningPets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: ["nibbler", "oscar", "lady"],
            currentPet: null,
        };

        this.pet = React.createRef();
    }

    setCurrentPet = (pet) => {
        this.setState({ currentPet: pet });
    }

    emptyCurrentPet = () => {
        setTimeout(() => {
            this.setState({
                currentPet: null
            })
        }, 0);
    }

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    render() {
        const { currentPet, pets } = this.state;
        return (
            <div className="SpinningPets__container">
                <div className="SpinningPets" onMouseOver={() => this.trackEvent('Footer | hovered Pets')}>
                    {Object.keys(pets).map((key) =>
                        <Spinner
                            key={key}
                            setCurrentPet={this.setCurrentPet}
                            emptyCurrentPet={this.emptyCurrentPet}
                            className="SpinningPets__pet"
                            pet={pets[key]}
                            mouseEventsEnabled
                            spin
                        />
                    )}
                </div>
                <span className="SpinningPets__message">
                    powered by {currentPet ? <span className="SpinningPets__name">{currentPet}</span> : "pets"}
                </span>
            </div>
        );
    }
}

export default SpinningPets;
