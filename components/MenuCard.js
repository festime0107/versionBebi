'use client';

export default function MenuCard({ emoji, label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`menuCard ${active ? 'menuCardActive' : ''}`}
    >
      <div className="menuEmoji">{emoji}</div>
      <div className="menuLabel">{label}</div>
    </button>
  );
}
