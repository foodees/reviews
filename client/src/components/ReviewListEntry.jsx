
import React from 'react';
import ReactStars from 'react-stars';
import moment from 'moment';

// moment('2017-11-14T05:57:26.037Z', moment.ISO_8601).format('l'));

var ReviewListEntry = (props) => {

  if (props) {
    //var textWithSpacing = props.review.text.split('\\n').join('<br></br>');
    var text = props.review.text.replace(/\\\\/g, /\\/).replace(/\\'/g, '\'').replace(/\\"/g, '\"');
    var textArr = text.split('\\n');
    var textWithSpacing = textArr.map((paragraph, idx) =>
      <p key={idx}>{paragraph}</p>
    );
  }
  //console.log('textWithSpacing: ', textWithSpacing);

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
        <div className="review-rating"><ReactStars count={5} value={props.review.stars} size={24} color2={'#cc0000'} edit={false}/> {moment(props.review.date, moment.ISO_8601).format('l')}</div>
        <span className="review-text">{textWithSpacing}</span>
        <div className="review-compliments"> Useful: {props.review.useful} | Funny: {props.review.funny} | Cool: {props.review.cool}</div>
      </div>
    </div>
  );

}

export default ReviewListEntry;


//SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY);
