export const metadata = {
  title: 'Bru-Hart CMS',
  description: 'Content management for Bru-Hart website',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="sanity-studio" style={{ height: '100vh', margin: 0 }}>
      {children}
    </div>
  )
}
