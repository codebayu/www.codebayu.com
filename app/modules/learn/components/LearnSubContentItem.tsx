import Card from '@/app/common/components/elements/Card';
import Tooltip from '@/app/common/components/elements/Tooltip';
import { STACKS } from '@/app/common/constant/stacks';
import clsxm from '@/app/common/libs/clsxm';
import { SubContentProps } from '@/app/common/types/learn';
import Link from 'next/link';
import { BiFile as SubContentIcon } from 'react-icons/bi';

const LearnSubContentItem = ({
  contentSlug,
  subContentSlug,
  title,
  language,
  difficulty = '',
}: SubContentProps) => {
  return (
    <Link href={`/learn/${contentSlug}/${subContentSlug}`}>
      <Card
        className={clsxm(
          'flex items-center flex-row justify-between cursor-pointer border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%] w-full py-4 px-5'
        )}
      >
        <div className="flex gap-3 items-center">
          <SubContentIcon size={18} className="hidden md:flex" />
          <h2>{title}</h2>
        </div>
        <div className="hidden md:flex gap-5 items-center">
          {difficulty && (
            <Tooltip title={`Difficulty: ${difficulty}`}>
              <div className="px-2 py-1 text-xs font-medium rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-400">
                {difficulty}
              </div>
            </Tooltip>
          )}
          {language && <Tooltip title={language}>{STACKS[language]}</Tooltip>}
        </div>
      </Card>
    </Link>
  );
};

export default LearnSubContentItem;
