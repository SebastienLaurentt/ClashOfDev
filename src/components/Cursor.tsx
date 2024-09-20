import { MousePointer2 } from "lucide-react";

interface CursorProps {
  name: string;
  fontColor: string;
  bgColor: string; 
  borderColor: string; 
  classname?: string;
}

const Cursor = ({ name, fontColor, bgColor, borderColor, classname }: CursorProps) => {
  return (
    <span
      className={`w-fit text-xs relative flex border-2 items-center rounded-[1.54px_18.49px_18.49px_18.49px]  px-3 py-1.5 ${classname} ${fontColor} h-[30px]`}
      style={{ backgroundColor: bgColor, borderColor: borderColor }} 
    >
      @{name}
      <MousePointer2
        size={14}
        className="absolute top-[-18px] left-[-16px] drop-shadow"
        style={{ fill: bgColor, color: bgColor,transform: "rotate(10deg)" }} 

      />
    </span>
  );
};

export default Cursor;
