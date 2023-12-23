import React from "react";

const TagChip = ({  skill }) => {
  return (
    <span className="inline-block p-2 bg-tag-color mx-2 px-3 font-thin rounded-lg text-gray-500 ">
      {skill}
    </span>
  );
};

export default TagChip;
