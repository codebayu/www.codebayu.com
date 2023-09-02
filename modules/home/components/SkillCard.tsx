import React from 'react';

import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';

export default function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="w-8">
      <Tooltip title={skill}>{STACKS[skill]}</Tooltip>
    </div>
  );
}
