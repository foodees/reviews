
import React from 'react';
import ReactStars from 'react-stars';
import moment from 'moment';

// moment('2017-11-14T05:57:26.037Z', moment.ISO_8601).format('l'));

var ReviewListEntry = (props) => {

  if (props) {
    //var textWithSpacing = props.review.text.split('\\n').join('<br></br>');
    var text = props.review.text.replace(/\\\\/g, /\\/);
    var textArr = text.split('\\n');
    var textWithSpacing = textArr.map((paragraph, idx) =>
      <p key={idx}>{paragraph}</p>
    );
  }
  console.log('textWithSpacing: ', textWithSpacing);

  return(
    <div className="review-list-entry">
      <div className="user-contents">
        <div>put user image here</div>
        <div>Name: {props.user.name}</div>
        <div>Friends: {props.user.fans}</div>
        <div>Review Count: {props.user.review_count}</div>
      </div>
      <div className="review-contents">
        <div className="review-rating"><ReactStars count={5} value={props.review.stars} size={24} color2={'#ff0000'} edit={false}/> {moment(props.review.date, moment.ISO_8601).format('l')}</div>
        <span className="review-text">{textWithSpacing}</span>
        <div className="review-compliments"> Useful: {props.review.useful} | Funny: {props.review.funny} | Cool: {props.review.cool}</div>
      </div>
    </div>
  );

}

export default ReviewListEntry;


//SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY);
