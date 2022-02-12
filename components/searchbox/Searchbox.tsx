import { Input } from '@vechaiui/react'

const Searchbox: React.FC = () => {
  return (
    <div className="flex w-full items-center flex-col space-y-4 p-8">
      <Input
        size="xl"
        aria-label="Search box"
        className="md:max-w-lg"
        placeholder="Search for photos"
      />
    </div>
  )
}

export default Searchbox
