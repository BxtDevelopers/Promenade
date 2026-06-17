export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased">
      {children}
    </div>
  );
}