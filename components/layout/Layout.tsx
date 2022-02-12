import Navbar from '@components/navbar/Navbar'

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <main className="flex w-full flex-1 flex-col justify-center bg-neutral-900 text-center">
        <Navbar />
        <div className="m-6 mt-0 flex-1 overflow-auto xl:overflow-hidden lg:rounded bg-white">
            <div className='overflow-auto'>{children}</div>
        </div>
      </main>

      <footer className="flex h-12 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </>
  )
}
