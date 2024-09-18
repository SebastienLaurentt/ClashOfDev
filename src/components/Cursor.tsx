import { MousePointer2 } from "lucide-react";

interface CursorProps {
  name: string;
  fontColor: string;
  bgColor: string; 
  borderColor: string; 
}

const Cursor = ({ name, fontColor, bgColor, borderColor }: CursorProps) => {
  return (
    <span
      className={`w-fit relative flex border-2 items-center rounded-[1.54px_18.49px_18.49px_18.49px] px-3 py-1.5 ${fontColor} h-[30px]`}
      style={{ backgroundColor: bgColor, borderColor: borderColor }} 
    >
      @{name}
      <MousePointer2
        size={14}
        className="absolute top-[-14px] left-[-12px]"
        style={{ fill: bgColor, color: bgColor }} 
      />
    </span>
  );
};

export default Cursor;
