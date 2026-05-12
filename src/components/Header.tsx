"use client";

import PillNav from "./PillNav";

const NAV_ITEMS = [
  { label: "MUSIC", href: "#latest" },
  { label: "VIDEOS", href: "#videos" },
  { label: "PHOTOS", href: "#photos" },
  { label: "BOOKING", href: "#booking" },
];

export default function Header() {
  return (
    <PillNav
      logo="/assets/brand/315-mark-dark.png"
      logoAlt="315MIKE"
      items={NAV_ITEMS}
      baseColor="#f4f1e8"
      pillColor="#0a0a0e"
      pillTextColor="#f4f1e8"
      hoveredPillTextColor="#0a0a0e"
      initialLoadAnimation
    />
  );
}
