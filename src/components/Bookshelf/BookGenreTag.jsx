import React, { Component } from 'react';
import Label from "components/_ui/Label/Label";
import './BookGenreTag.scss';

class BookGenreTag extends Component {
    state = {
        genreColor: [],
    }

    setGenreColor = () => {
        const { genre, genresList } = this.props;
        const genreObject = genresList.find(i => i.genre === genre);
        this.setState({ genreColor: genreObject.color });
    }

    componentDidMount() {
        this.setGenreColor();
    }

    render() {
        const { genre } = this.props;
        const { genreColor } = this.state;

        const style = {
            backgroundColor: genreColor + '33',
            color: genreColor,
            border: '1px solid',
            borderColor: genreColor + '75',
        }

        return (
            <div className="BookGenreTag__container">
                <div className="BookGenreTag__white-container"></div>
                <Label className="BookGenreTag" style={style}>
                    <div className="BookGenreTag__darkened-text">
                        {genre}
                    </div>
                    {genre}
                </Label>
            </div>
        );
    }
}

export default BookGenreTag;