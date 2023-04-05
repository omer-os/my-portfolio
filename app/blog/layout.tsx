
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="min-h-screen flex w-full justify-center">{children}</div>
    </div>
  );
}
