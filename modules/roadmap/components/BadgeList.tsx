import React from 'react';

import { TRIBES } from '@/common/constant/roadmap';

import Badge from './Badge';

export default function BadgeList() {
  return (
    <div className="flex space-x-2 overflow-x-auto">
      {TRIBES.map((tribe, index) => (
        <Badge key={index} {...tribe} />
      ))}
    </div>
  );
}
