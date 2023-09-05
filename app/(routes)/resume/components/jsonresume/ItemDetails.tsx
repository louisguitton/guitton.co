import { FC } from "react";

const ItemDetails: FC<{
  summary: string;
  highlights?: string[];
  itemIndex: number;
}> = ({ summary, highlights, itemIndex }) => {
  return (
    <div className="text-xs prose max-w-none">
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      {highlights ? (
        <ul>
          {highlights.map((highlight, j) => (
            <li
              key={`${itemIndex}-${j}`}
              dangerouslySetInnerHTML={{ __html: highlight }}
            />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ItemDetails;
