import React, { useState } from "react";

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);

  return (
    <button onClick={(evnet) => setLike(like + 1)}>
      {like}
      点赞👍
    </button>
  );
};

export default LikeButton;
