"use client";

export function TestFont() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-4xl font-bold">Inter Font Test - Bold</h1>
      <h2 className="text-2xl font-semibold">Inter Font Test - Semibold</h2>
      <p className="text-lg font-medium">Inter Font Test - Medium</p>
      <p className="text-base font-normal">Inter Font Test - Normal</p>
      <p className="text-sm font-light">Inter Font Test - Light</p>
      <div className="text-xs">
        <p>Font family: Inter</p>
        <p>Variable: --font-inter</p>
        <p>CSS: font-sans</p>
      </div>
    </div>
  );
}
