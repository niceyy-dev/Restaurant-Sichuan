"use client";
import MenuHeader from "@/components/MenuHeader";
import React, { useState } from "react";
import { Tab } from "@/types/menu.types";

const tabs: Tab[] = [
  {
    name: "ENTREES 前菜 🥟",
    images: ["/imgs/entree1.png", "/imgs/entree2.png"],
  },
  {
    name: "SPECIALITES 推荐 👨🏻‍🍳",
    images: ["/imgs/spe1.png", "/imgs/spe2.png"],
  },
  {
    name: "MARMITES 干锅 🥘",
    images: ["/imgs/marmite1.png", "/imgs/marmite2.png"],
  },
  {
    name: "SOUPES 汤 🥣",
    images: ["/imgs/soupe.png"],
  },
  {
    name: "FRUITS DE MER 海鲜 🦞",
    images: ["/imgs/fruit-de-mer1.png", "/imgs/fruit-de-mer2.png"],
  },
  {
    name: "PLATS TRADITIONNELS 炒菜 👨🏻‍🍳",
    images: ["/imgs/plat-tradi1.png", "/imgs/plat-tradi2.png"],
  },
  {
    name: "LEGUMES 蔬菜 🥬",
    images: ["/imgs/legume1.png", "/imgs/legume2.png"],
  },
  {
    name: "NOUILLES 面 🍜",
    images: ["/imgs/nouilles.png"],
  },
  {
    name: "ACCOMPAGNEMENTS 主食 🍚",
    images: ["/imgs/accompagnement.png"],
  },
  // {
  //   name: "BOISSONS",
  //   images: ["/imgs/dessert1.png", "/imgs/dessert2.png"],
  // },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative">
      {/* Bloc image + titre en haut */}
      <div className="relative w-full h-[250px]">
        <img
          aria-hidden="true"
          src="/imgs/epice.png"
          className="w-full h-full object-cover opacity-50"
          alt="Plat"
        />

        {/* Texte centré */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center drop-shadow-lg">
            MENU 🍽️
          </h1>
        </div>
      </div>

      {/* MenuHeader en dehors du bloc image */}
      <MenuHeader
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={(index) => setActiveTab(index)}
      />

      {/* Contenu images */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {tabs[activeTab].images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Plat ${i + 1}`}
            className="rounded-xl shadow-md object-cover w-full h-48"
          />
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-4 place-items-center">
        {tabs[activeTab].images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Plat ${i + 1}`}
            className="rounded-xl shadow-md object-cover w-4/6 h-full"
          />
        ))}
      </div>
    </div>
  );
}
