import Navbar from '@components/navbar/Navbar';

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Navbar />
      <main className="flex w-full min-h-screen flex-1 flex-col justify-center bg-neutral-900 text-center">
        <div className="m-6 mt-0 flex-1 overflow-auto bg-white lg:rounded xl:overflow-hidden">
          <div className="overflow-auto">{children}</div>
        </div>
      </main>

      <footer className="flex h-12 w-full items-center justify-center border-t">
        <p className="font-bold">Pixa</p>
      </footer>
    </>
  );
}
