type BreaklineProps = {
  className?: string;
  [propName: string]: string | undefined;
};

export default function Breakline({ className = '', ...others }: BreaklineProps) {
  return <div className={`border-t border-gray-300 my-4 ${className}`} data-testid="breakline" {...others}></div>;
}
