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
      logo="/assets/brand/315-mark-clean.png"
      logoAlt="315MIKE"
      items={NAV_ITEMS}
      baseColor="rgba(10,10,12,0.92)"
      pillColor="#1a1a1f"
      pillTextColor="#f4f1e8"
      hoveredPillTextColor="#f4f1e8"
      initialLoadAnimation
    />
  );
}
