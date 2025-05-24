import { MenuHeaderProps } from "@/types/menu.types";
import React from "react";

function MenuHeader({ tabs, activeTab, onTabClick }: MenuHeaderProps) {
  return (
    <div className="text-xs md:text-sm roboto-light">
      <div className="flex flex-wrap justify-center bg-white py-3 rounded-xl shadow-md">
        {tabs.map((item, index) => (
          <button
            key={item.name}
            onClick={() => onTabClick(index)}
            className={`px-4 py-2 text-sm font-medium border-r last:border-r-0 border-[#e5e7eb] transition 
              ${
                index === activeTab
                  ? "text-white bg-[#990001] rounded-md"
                  : "text-[#990001] hover:text-black"
              }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MenuHeader;
