import React, {useEffect, useState} from 'react';
import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    Container,
  } from '@chakra-ui/react';

import { doGet } from '../utllity/NetworkHelper';
import Navigation from '../components/nav-bar/NavigationBar';
import NewsCard from '../components/Card/NewsCard'
import axios  from 'axios';



export default function Home() {
  const [news, setNews] = useState([]);

  const doGetNewsList = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f5e0eb739d674090b7d3e07d5e26cb9a')
    .then(res => {
      console.log(res.data.articles);    
      setNews(res.data.articles);      
      // console.log(news);
    })
    .catch(_ => console.log("error"))     
    // doGet('https://newsapi.org/v2/top-headlines?country=us&apiKey=f5e0eb739d674090b7d3e07d5e26cb9a')
    // .then(res => {
    //   // console.log(res.articles);
    //   setNews([...news, res.articles]); 
    //   // console.log(news);wwww
    // }) 
    // .catch(_ => console.log("error"))
  }; 

  useEffect(() => {
      // Todo: do fetch news data here
      doGetNewsList();
      console.log(news);
     
    }, []);

    return (
        <Box textAlign="center">
        <Navigation></Navigation>
        {/* <NewsCard title={news[0].title}/> */}
        {/* {
          news.map(data => {
            <NewsCard title={data.title}/>
          })
        }; */}
        </Box>
    );
}