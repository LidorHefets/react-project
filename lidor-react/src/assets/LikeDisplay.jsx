function LikeDisplay(props) {
  const likeCount = props.likeCount;
  const isLiked = props.isLiked;

  return (
    <div>
      <p>Likes: {likeCount}</p>
      <p>
        {isLiked
          ? "סימנת לייק לפוסט זה"
          : "עדיין לא סימנת לייק לפוסט זה"}
      </p>
    </div>
  );
}

export default LikeDisplay;
