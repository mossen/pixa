import Navbar from '@components/navbar/Navbar';

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-1 flex-col items-center justify-center bg-neutral-900 text-center">
        <div className="container m-6 mt-0 flex flex-1 justify-center overflow-auto bg-white lg:rounded xl:overflow-hidden">
          <div className="overflow-auto">{children}</div>
        </div>
      </main>

      <footer className="flex h-12 w-full items-center justify-center border-t">
        <p className="font-bold">Pixa</p>
      </footer>
    </>
  );
}
