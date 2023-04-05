export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="max-w-5xl px-6 mx-auto">{children}</div>
    </div>
  );
}
