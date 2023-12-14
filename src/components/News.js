import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
  render() {
    return (
      <>
      <h2 className="d-flex justify-content-center my-5">DAILY NEWS</h2>
      <NewsItem title="newtitle" description="newdescription"/>
      
      </>
    )
  }
}
