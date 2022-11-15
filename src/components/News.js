import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [title, setTitle] = useState("general");
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    let url;
    props.setProgress(10);
    if (props.search === "") {
 
      url = `https://splendid-bat-coveralls.cyclic.app/news/category/?cat=${props.category}&country=${props.country}`;
      
      setTitle(props.category);
    } else {
      url = `https://splendid-bat-coveralls.cyclic.app/news/search/?search=${props.search}`;
      setTitle(props.search);
    }
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - Daily Bugle`;
    updateNews();
    // eslint-disable-next-line
  }, [props.search, props.country]);

  const fetchMoreData = async () => {
    let url;
    if (props.search === "") {
      url = `https://splendid-bat-coveralls.cyclic.app/news/category/?cat=${props.category}&country=${props.country}&page=${page}&pageSize=${props.pageSize}`;
    } else {
      url = `https://splendid-bat-coveralls.cyclic.app/news/search/?search=${props.search}`;
    }
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        Daily Bugle {capitalizeFirstLetter(props.countryName)} - Top{" "}
        {capitalizeFirstLetter(title)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles?.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
