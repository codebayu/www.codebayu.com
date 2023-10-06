import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button
      aria-label="icon-button"
      type="reset"
      className="self-end m-1 p-1 rounded-md dark:hover:bg-neutral-900 hover:bg-neutral-100"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
