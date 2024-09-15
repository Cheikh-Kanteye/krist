import { cn } from "@/utils";
import { LuLayoutGrid } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";

interface ProductViewToggleProps {
  isGridView: boolean;
  toggleGrid: () => void;
  toggleList: () => void;
}

const ProductViewToggle = ({
  isGridView,
  toggleGrid,
  toggleList,
}: ProductViewToggleProps) => {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={toggleGrid}
        className={cn("p-2 rounded-md", {
          "bg-black/5": isGridView,
        })}
      >
        <LuLayoutGrid size={24} color="black" />
      </button>

      <button
        onClick={toggleList}
        className={cn("p-2 rounded-md", {
          "bg-black/5": !isGridView,
        })}
      >
        <TbListDetails size={24} color="black" />
      </button>

      <span>Showing 1 - 16 of 72 results</span>
    </div>
  );
};

export default ProductViewToggle;
