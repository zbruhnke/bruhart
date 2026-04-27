interface SupplyOnlyNoticeProps {
  className?: string;
  dark?: boolean;
  compact?: boolean;
}

export default function SupplyOnlyNotice({ className = '', dark = false, compact = false }: SupplyOnlyNoticeProps) {
  const titleClass = dark ? 'text-white' : 'text-foreground';
  const bodyClass = dark ? 'text-white/75' : 'text-foreground-muted';
  const borderClass = dark ? 'border-white/15 bg-white/10' : 'border-border bg-background-alt';
  const labelClass = dark ? 'text-accent-light' : 'text-primary';

  return (
    <div className={`rounded-xl border ${borderClass} ${compact ? 'p-4' : 'p-6'} ${className}`}>
      <p className={`mb-2 text-xs font-bold uppercase tracking-wider ${labelClass}`}>
        Materials & Technical Support Only
      </p>
      <h2 className={`${compact ? 'text-base' : 'text-xl'} font-bold ${titleClass}`}>
        Bru-Hart does not install fences, gates, operators, barriers, access-control systems, or anything else we sell.
      </h2>
      <p className={`mt-3 ${compact ? 'text-sm leading-6' : 'leading-7'} ${bodyClass}`}>
        We supply materials and components, provide technical support and clear product guidance, and can recommend experienced installers when a project needs field labor. Installation is always handled by the customer, contractor, or a separate installer.
      </p>
    </div>
  );
}
