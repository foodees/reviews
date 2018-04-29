
import React from 'react';
import ReactStars from 'react-stars';
import moment from 'moment';

var ReviewListEntry = (props) => {

 if (props) {
   var text = props.review.text.replace(/\\\\/g, /\\/).replace(/\\'/g, '\'').replace(/\\"/g, '\"');
   var textArr = text.split('\\n');
   var textWithSpacing = textArr.map((paragraph, idx) =>
     <p key={idx}>{paragraph}</p>
   );
 }
 var rating = props.review.stars;
 var starPosition = -420;
 if (rating >= 1) {
   starPosition += ((rating * 2 * -14) + 14);
 }
 var percentage = props.rating/5 * 100;

 return(
   <div className="review-list-entry">
     <div className="user-contents">
       <div><img src="https://s3-us-west-1.amazonaws.com/foodee-reviews/userpic.png" alt="user image"></img></div>
       <div>
         <div style={{color: 'blue', fontWeight: 'bold'}}>{props.user.name}</div><br></br>
         <div><span><i className="fas fa-users fa-lg" style={{color: 'Tomato'}}></i> {props.user.fans} friends</span></div><br></br>
         <div><span><i className="far fa-star fa-lg" style={{color: 'Tomato'}}></i> {props.user.review_count} reviews</span></div>
       </div>
     </div>
     <div className="review-contents">
       <div className="review-rating"><span style={{'backgroundPositionY':starPosition + 'px'}} className="nearMeListStars"></span> {moment(props.review.date, moment.ISO_8601).format('l')}</div>
       <span className="review-text">{textWithSpacing}</span>
       <div className="review-compliments"> Useful: {props.review.useful} | Funny: {props.review.funny} | Cool: {props.review.cool}</div>
     </div>
   </div>
 );

}

export default ReviewListEntry;
