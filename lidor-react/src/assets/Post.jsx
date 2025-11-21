// מייבאים את React ואת המחלקה Component כדי ליצור רכיב מחלקה
import React, { Component } from "react";

// מייבאים את רכיב התצוגה LikeDisplay שנציג בתוך הרכיב הזה
import LikeDisplay from "./LikeDisplay";

class Post extends Component {
  // constructor מופעל ברגע שהרכיב נוצר
  constructor(props) {
    super(props); 
    // super מחבר בין המחלקה שלנו לבין Component (חובה ברכיבי Class)

    // state הוא הזיכרון הפנימי של הרכיב.
    // כאן אנחנו מגדירים את המצב הראשוני של הרכיב:
    this.state = {
      likeCount: 0,   // כמה לייקים יש לפוסט (מספר התחלתי = 0)
      isLiked: false  // האם המשתמש לחץ לייק (התחלה = false)
    };
  }

  // פונקציית חץ (arrow function) כדי שלא נאבד את ה־this
  // הפונקציה מופעלת כאשר לוחצים על כפתור הלייק
  toggleLike = () => {
    // setState משנה את ה-state בצורה נכונה ב-React
    // משתמשים ב-prevState כדי לקבל את הערכים הקודמים
    this.setState((prevState) => {
      const wasLiked = prevState.isLiked;         // האם קודם היה לייק?
      const previousCount = prevState.likeCount;  // כמות הלייקים לפני העדכון

      // מחזירים אובייקט חדש שיהפוך להיות ה-state החדש
      return {
        // הופכים את המצב: אם היה false → נהיה true ולהיפך
        isLiked: !wasLiked,

        // עדכון כמות הלייקים:
        // אם כבר היה לייק → נוריד לייק אחד
        // אם לא היה לייק → נוסיף לייק אחד
        likeCount: wasLiked ? previousCount - 1 : previousCount + 1
      };
    });
  };

  // מתודת render קובעת מה יוצג על המסך
  render() {
    return (
      <div>
        {/* כפתור הלייק. כשנלחץ – יפעיל את toggleLike */}
        <button onClick={this.toggleLike}>
          {/* טקסט דינמי על הכפתור: Like או Unlike בהתאם למצב */}
          {this.state.isLiked ? "Unlike" : "Like"}
        </button>

        {/* הצגת רכיב התצוגה LikeDisplay */}
        {/* אנחנו מעבירים אליו את הנתונים מתוך ה-state כ-props */}
        <LikeDisplay
          likeCount={this.state.likeCount}   // מספר הלייקים
          isLiked={this.state.isLiked}       // האם המשתמש לחץ לייק
        />
      </div>
    );
  }
}

export default Post;
