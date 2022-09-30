import React from "react";

const News = () => {
  const news = [
    {
      content: "This is news 1.",
      link: "www.google.com",
    },
    {
      content:
        "This is the content of news.",
      link: "www.yahoo.com",
    },
  ];

  return (
    <div className="newsContainer">
      <marquee className="marquee">
        {news.map((news, index) => {
          return <a className="newss" href={news.link}>[+] {news.content}</a>;
        })
        }
      </marquee>
    </div>
  );
};

export default News;
