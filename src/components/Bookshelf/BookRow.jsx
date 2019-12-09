import React, { Component } from 'react';
import Link from "components/_ui/Link/Link";
import ReactGA from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faClipboardCheck, faHeadphones } from '@fortawesome/free-solid-svg-icons'
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
                                <FontAwesomeIcon className="BookRow__icon BookRow__title__icon BookRow__icon--audiobook" icon={faHeadphones} />
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
                            <FontAwesomeIcon className="BookRow__icon BookRow__icon--progress" icon={faSpinner} />
                        ) : (
                            <FontAwesomeIcon className="BookRow__icon BookRow__icon--check" icon={faClipboardCheck} />
                        )}
                    </div>
                </div>
                <div className={classNames("BookRowSummary__container", { 'BookRowSummary__container--expanded': bookIsClicked })} onClick={this.openBook}>
                    <div className="BookRowSummary">
                        <img className="BookRowSummary__image"
                            src={coverImg} alt={`${title} book cover`} />
                        <div className="BookRowSummary__summary">
                            <div>
                                {summary}
                            </div>
                            <Link
                                className="BookRowSummary__link"
                                to={goodreadsUrl}
                            >
                                Summary and image: Goodreads.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookRow;