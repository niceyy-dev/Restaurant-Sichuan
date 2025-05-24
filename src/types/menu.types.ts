// types/menu.types.ts

export type Tab = {
  name: string;
  //   href: string;
  //   current: boolean;
  images: string[];
};

export type MenuHeaderProps = {
  tabs: Tab[];
  activeTab: number;
  onTabClick: (index: number) => void;
};
