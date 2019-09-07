import React, { Component } from 'react';
import Label from "../_ui/Label/Label";
import ContainerDimensions from 'react-container-dimensions';
//import BarChart from "./BarChart/BarChart";
import BookChart from "./BookChart";

import './BookGenreCharts.scss';

class BookGenreCharts extends Component {

    render() {
        const { books, categories, categoryColors, genres, genreColors, width } = this.props;
        return (
            <div className="BookGenreCharts">
                {/* <Label className="BookGenreCharts__title">
                    Genre breakdown
                </Label> */}
                <div className="BookGenreCharts__legend__container">
                    {Object.keys(genres).map(key =>
                        <div key={key} className="BookGenreCharts__legend">
                            <div className="BookGenreCharts__legend__key"
                                 style={{ background: genres[key].color}}></div>
                            <Label className="BookGenreCharts__legend__label">
                                {genres[key].genre}
                            </Label>
                       </div>
                    )}
                    {Object.keys(categories).map(key =>
                        <div key={key} className="BookGenreCharts__legend">
                            <div className="BookGenreCharts__legend__key"
                                 style={{ background: categories[key].color }}></div>
                            <Label className="BookGenreCharts__legend__label">
                                {categories[key].genre}
                            </Label>
                        </div>
                    )}
                </div>
                <div className="BookGenreCharts__charts">
                    <ContainerDimensions>
                        <BookChart
                            barHeight={34}
                            books={books}
                            className="BookChart--genres"
                            colors={genreColors}
                            width={width}
                            graphIsShowing={genres}
                        />
                    </ContainerDimensions>
                    <ContainerDimensions>
                        <BookChart
                            barHeight={14}
                            books={books}
                            className={"BookChart--categories"}
                            colors={categoryColors}
                            width={width}
                            graphIsShowing={categories}
                        />
                    </ContainerDimensions>
                </div>
                {/* <BarChart/> */}
            </div>
        );
    }
}

export default BookGenreCharts;