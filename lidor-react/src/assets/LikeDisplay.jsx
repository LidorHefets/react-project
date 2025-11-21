function LikeDisplay(props) {
  const likeCount = props.likeCount;
  const isLiked = props.isLiked;

  return (
    <div>
      <p>Number of Likes: {likeCount}</p>
      <p>
        {isLiked //זה נקרא ternary operator – צורת קיצור ל־if / else.
          ? "סימנת לייק לפוסט זה"
          : "עדיין לא סימנת לייק לפוסט זה"}
      </p>
    </div>
  );
}

export default LikeDisplay;
