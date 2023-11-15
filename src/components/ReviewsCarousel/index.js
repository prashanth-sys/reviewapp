// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  render() {
    const {reviewsList} = this.props
    const {imgUrl} = reviewsList
    return (
      <div className="bg-container">
        <h1 className="main-heading">shiva paravathi</h1>
        <img src={imgUrl} alt="shiva paravathi" />
      </div>
    )
  }
}
export default ReviewsCarousel
