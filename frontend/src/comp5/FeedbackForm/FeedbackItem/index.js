import "./FeedbackItem.css";

const FeedbackItem = ({ feedback }) => {
  return (
    <div className="feedback-item">
      <p className="feedback-item-comment">{feedback.comment}</p>
      <p className="feedback-item-submitter-detail">
        Posted by <b>{feedback.name}</b> and email <b>{feedback.email}</b>
      </p>
    </div>
  );
};

export default FeedbackItem;
