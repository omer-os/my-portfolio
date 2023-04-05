export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex justify-center w-full min-h-screen">{children}</div>
    </div>
  );
}
