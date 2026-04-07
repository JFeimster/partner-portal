type BadgeProps = {
  children: string;
  tone?: 'default' | 'accent' | 'warning';
};

export function Badge({ children, tone = 'default' }: BadgeProps) {
  const tones = {
    default: 'border-white/10 text-slate-300',
    accent: 'border-emerald-400/30 text-emerald-300',
    warning: 'border-yellow-400/30 text-yellow-300',
  };

  return (
    <span className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
