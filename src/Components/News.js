import React, { Component } from 'react'
import NewsArticles from './NewsArticles'


export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount(props) {
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })

    }

    render() {
        return (
            <>

                <div className="container my-3">
                    <h2 className='text-center my-4 mb-4' >Top Headlines of the Day</h2>
                    <div className="row my-3" >
                        {this.state.articles.map((element, idx) => {
                            if (idx < 18) {
                                return (

                                    <div className="col-md-4" key={element.url}>
                                        <NewsArticles title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                                    </div>
                                )
                            }

                        })}

                    </div>

                </div>

            </>
        )
    }
}

export default News