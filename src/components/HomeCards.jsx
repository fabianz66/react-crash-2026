import Card from './Card.jsx'

const HomeCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
      <Card bg="bg-blue-100">
        <h3 className="text-xl font-bold">Card 1</h3>
        <p>This is the content for card 1.</p>
      </Card>
      <Card bg="bg-green-100">
        <h3 className="text-xl font-bold">Card 2</h3>
        <p>This is the content for card 2.</p>
      </Card>
      <Card bg="bg-yellow-100">
        <h3 className="text-xl font-bold">Card 3</h3>
        <p>This is the content for card 3.</p>
      </Card>
    </div>
  )
}

export default HomeCards