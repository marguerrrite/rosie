
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Bookshelf from "./Bookshelf";
//import BookGenreCharts from "./BookGenreCharts";
import books from "components/Bookshelf/books.js";

class BookshelfContainer extends Component {
    state = {
        booksToShow: 7,
        expanded: false,
        categories: {},
        genres: {},
        graphIsShowingGenres: true,
        categoryColors: ["#d8d0c9", "#c7bcb2"],
        // genreColors: ["#f5cf63", "#afd89f", "#ffa79e", "#7aa8f7", "#ada3ff",
        //     "#7f7f7f", "#ff8075", "#a9a0f7", "#7faefa", "#7faeff",],
        genreColors: [
            "#5393fe",
            "#ab88f9",
            "#e979e3",
            "#ff6ec0",
            "#ff7094",
            "#ff8367",
            "#ffa03a",
            "#c8be00",
            "#94ba1f",
            "#5fb23b",
            "#ff8075",
            "#ff6ea0",
            "#e070d3",
            "#72DB83",
            "#C27BE3",
            "#4CADC6",
            "#F3A569",
            "#9283ff",],
        bookListRows: true,
    }

    showMoreBooks = () => {
        const totalBooks = books.length;

        ReactGA.event({
            category: 'User',
            action: 'Bookshelf | Toggled more/less books'
        });

        this.state.booksToShow === 7 ? (
            this.setState({ booksToShow: totalBooks, expanded: true })
        ) : (
            this.setState({ booksToShow: 7, expanded: false })
        )
    };

    getGenreCounts() {
        const { categoryColors, genreColors } = this.state;
        const fullGenreList = [];
        let counts = {};
        let categoriesDict = [];
        let genresDict = [];

        for (let i = 0; i < books.length; i++) {
            for (let j = 0; j < books[i].tags.length; j++) {
                fullGenreList.push(books[i].tags[j]);
            }
        }

        fullGenreList.sort().forEach(num => {
            if (!counts[num]) counts[num] = 1;
            else counts[num]++;
        });

        let catColorIndex = 0;
        let genreColorIndex = 0;
        Object.keys(counts).forEach(function (key, index, i) {
            if (key === "fiction" || key === "non-fiction") {
                categoriesDict.push({ genre: key, value: counts[key], color: categoryColors[catColorIndex]});
                catColorIndex++;
            } else {
                genresDict.push({ genre: key, value: counts[key], color: genreColors[genreColorIndex]});
                genreColorIndex++;
            }
        });

        let { categoriesList, genresList } = { ...this.state };
        genresList = genresDict;
        categoriesList = categoriesDict;
        this.setState({ categoriesList, genresList });
    }

    toggleBookListStyle = () => {
        this.setState(prevState => ({
            bookListRows: !prevState.bookListRows
        }));
    }

    componentWillMount() {
        this.getGenreCounts();
    }

    render() {
        const { bookListRows, booksToShow, categories, categoryColors, expanded, genresList, genreColors } = this.state;

        return (
            <div className="BookshelfContainer">
                <h2 className="Bookshelf__header">
                    <span role="img" aria-label="emoji" className="Bookshelf__header__emoji emoji">📚</span> Bookshelf
                </h2>
                <p>
                    What I'm reading and what I've read.
                </p>
                {/* <Button onClick={this.toggleBookListStyle} style={{"marginBottom": "10px"}}>
                    Change to {bookListRows ? "cards" : "rows"}
                </Button> */}
                {/* <div className="Bookshelf__genres__container">
                    <BookGenreCharts
                        books={books}
                        genres={genres}
                        categories={categories} />
                </div> */}
                <Bookshelf
                    books={books}
                    booksToShow={booksToShow}
                    categories={categories}
                    genresList={genresList}
                    categoryColors={categoryColors}
                    genreColors={genreColors}
                    bookListRows={bookListRows}
                    showMoreBooks={this.showMoreBooks}
                    expanded={expanded}
                />
            </div>
        );
    }
}

export default BookshelfContainer;