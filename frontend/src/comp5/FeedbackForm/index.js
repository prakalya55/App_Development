import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback } from "c:/Users/prakalya/OneDrive/Desktop/abc/src/redux/feedback/feedbackActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./FeedbackForm.css";

const FeedBackForm = (props) => {
  const dispatch = useDispatch();

  const [feedback, setFeedback] = useState({});

  const handleInputChange = (event) => {
    const { name, email, comment } = event.target;
    setFeedback({
      ...feedback,
      [name]: event.target.value
    });
    console.log(feedback);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addFeedback(feedback));
    props.history.push("/");
  };

  return (
    <div className="col-12 col-md-6 offset-md-3 mt-4">
      <div className="feedback-form">
        <h2 className="feedback-form-heading">Feedback Form</h2>
        <form className="form-wrap" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="@ username"
            onChange={handleInputChange}
          />

          <br />

          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="@ e-mail"
            onChange={handleInputChange}
          />

          <br />

          <textarea
            name="comment"
            className="form-control"
            rows="4"
            placeholder="@ comment"
            onChange={handleInputChange}
          />

          <br />
          <br />
          <button className="submit btn btn-primary" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addFeedback: (data) => dispatch(addFeedback(data))
});

export default withRouter(connect(null, mapDispatchToProps)(FeedBackForm));
