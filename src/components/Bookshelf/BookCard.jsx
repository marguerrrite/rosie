import React, { Component } from 'react';
import BookGenreTag from "./BookGenreTag";
import './BookCard.scss';

class BookCard extends Component {
    render() {
        const { audiobook, author, bookIsHovered, categories, genres, inProgress, tags, title } = this.props;
        const bookTitle = title.length > 26 ? title.substring(0, 27) + "..." : title;

        return (
            <div className="BookCard">
                <span className="BookCard__title">
                    {bookTitle}
                </span>
                <span className="BookCard__author">
                    by {author}
                </span>
                <div className="BookCardGenreTags__container">
                    {Object.keys(tags.reverse()).map((key) =>
                        <BookGenreTag
                            categories={categories}
                            genres={genres}
                            tag={tags[key]}
                            key={key}>
                        </BookGenreTag>
                    )}
                    <div className="BookCard__icons">
                        {inProgress && (
                            <i className="BookCard__icon BookCard__icon--progress fas fa-spinner"></i>
                        )}
                        {audiobook && (
                            <i className="BookCard__icon BookCard__icon--audiobook fas fa-headphones-alt"></i>
                        )}
                    </div>
                </div>

            </div>
        );
    }
}

export default BookCard;
