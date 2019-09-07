import React, { Component } from 'react';
import ReactGA from 'react-ga';
import classNames from 'classnames';
import BookGenreTag from "./BookGenreTag";
import './BookRow.scss';

class BookRow extends Component {
    state = {
        bookIsClicked: false,
        bookColor: [],
    }

    openBook = () => {
        this.trackEvent('Book Toggle | clicked "' + this.props.title + '"');
        this.setState(prevState => ({
            bookIsClicked: !prevState.bookIsClicked
        }));

    }

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    render() {
        const { audiobook, author, categories, coverImg, genresList, goodreadsUrl, genre, inProgress, summary, title } = this.props;
        const { bookIsClicked } = this.state;

        return (
            <div className={classNames("BookRow__container", {'BookRow__container--expanded' : bookIsClicked})} onClick={this.openBook}>
                <div className="BookRow">
                    <div className="BookRow__metas">
                        <div className="BookRow__title">
                            <span className="BookRow__title__span">
                                {title}
                            </span>
                            {audiobook && (
                                <i className="BookRow__icon BookRow__title__icon BookRow__icon--audiobook fas fa-headphones-alt"></i>
                            )}
                        </div>
                        <div className="BookRow__author">
                            {author}
                        </div>
                    </div>
                    <div className="BookRowGenreTags__container">
                        <BookGenreTag
                            categories={categories}
                            genresList={genresList}
                            genre={genre}
                        />
                    </div>
                    <div className="BookRow__status">
                        {inProgress ? (
                            <i className="BookRow__icon BookRow__icon--progress fas fa-spinner"></i>
                        ) : (
                            <i className="BookRow__icon BookRow__icon--check fas fa-clipboard-check"></i>
                        )}
                    </div>
                </div>
                <div className={classNames("BookRowSummary__container", { 'BookRowSummary__container--expanded': bookIsClicked })} onClick={this.openBook}>
                    <div className="BookRowSummary">
                        <img className="BookRowSummary__image"
                            src={coverImg} alt={'"' + title + '"' + " book cover"} />
                        <div className="BookRowSummary__summary">
                            <div>
                                {summary}
                            </div>
                            <a className="BookRowSummary__link"
                                onClick={() => this.trackEvent(`Book | clicked on Goodreads url: ${title}`)}
                                href={goodreadsUrl}
                                rel="noopener noreferrer" target="_blank" >
                                Summary and image: Goodreads.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookRow;