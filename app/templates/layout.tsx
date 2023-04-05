export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mx-auto max-w-5xl px-6">{children}</div>
    </div>
  );
}
