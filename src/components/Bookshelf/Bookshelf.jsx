import React, { Component } from 'react';
import BookRow from "./BookRow";
import Button from "components/_ui/Button/Button";
import Card from "components/_ui/Card/Card";
import Label from "../_ui/Label/Label";
import './Bookshelf.scss';

class Bookshelf extends Component {

    render() {
        const { books, booksToShow, categories, expanded, genreColors, genresList, showMoreBooks } = this.props;

        return (
            <Card className="Bookshelf" padding>
                <div className="Bookshelf__books__container">
                    <div className="BookRowLabels">
                        <Label category="table" className="BookRowLabel">
                            Book
                        </Label>
                        {/* <Label category="table" className="BookRowLabel BookRowLabel--author">
                            Author
                        </Label> */}
                        <Label category="table" className="BookRowLabel BookRowLabel--genre">
                            Genre
                        </Label>
                        <Label category="table" className="BookRowLabel BookRowLabel--status">
                            Status
                        </Label>
                    </div>
                    {books.slice(0, booksToShow).map((i, key) =>
                        <BookRow
                            audiobook={books[key].audiobook}
                            author={books[key].author}
                            categories={categories}
                            color={this.findColor}
                            coverImg={books[key].coverImg}

                            genre={books[key].genre}
                            genresList={genresList}
                            genreColors={genreColors}
                            goodreadsUrl={books[key].goodreadsUrl}
                            finished={books[key].finished}
                            inProgress={books[key].inProgress}
                            isFiction={books[key].isFiction}
                            title={books[key].title}
                            tags={books[key].tags}
                            key={key}
                            summary={books[key].summary}
                        />
                    )}
                    <div className="Bookshelf__action__container">
                        {expanded && (
                            <p className="Bookshelf__action__message">
                                I'm still digging through my <strong>read</strong> archive <span className="emoji--small" role="img" aria-label="emoji">😊</span>
                            </p>
                        )}
                        <Button className="Bookshelf__action__button" category="secondary" onClick={showMoreBooks}>
                            Show {expanded ? "less" : "more"}
                        </Button>
                    </div>
                </div>
            </Card>
        );
    }
}

export default Bookshelf;