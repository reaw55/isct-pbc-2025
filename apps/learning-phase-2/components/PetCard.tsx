import { toHumanYears, getAgeCategory, getSpeciesEmoji } from '../lib/petUtils'

type PetCardProps = {
  id: number  // Add this
  name: string
  species: string
  age: number
  color: string
  breed: string
}

export default function PetCard({ id, name, species, age, color, breed }: PetCardProps) {
  const emoji = getSpeciesEmoji(species)
  const ageCategory = getAgeCategory(age)
  const humanYears = toHumanYears(age, species)
  var ageCategoryColor ="";
  if (age < 2) {
    ageCategory === "Baby"
    ageCategoryColor = "bg-green-100 text-green-800"
  } else if (age < 8) {
    ageCategory === "Adult"
    ageCategoryColor = "bg-blue-100 text-blue-800"
  } else {
    ageCategory === "Senior"
    ageCategoryColor = "bg-purple-100 text-purple-800"
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {/* <span className="text-4xl mr-3">{emoji}</span> */}
          <h2 className="text-2xl font-bold text-gray-800">
            {emoji} #{id} {name}
          </h2>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${ageCategoryColor}`}>
          {ageCategory}
        </span>
      </div>

      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">Species:</span> {species}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Age:</span> {age} years old ({toHumanYears(age, species)} in human years)
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Color:</span> {color}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Breed:</span> {breed}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 italic">
          {species === "Dog" ? "🦴 Loves playing fetch!" : null}
          {species === "Cat" ? "🐈 Enjoys napping in the sun!" : null}
          {species === "Bird" ? "🎵 Sings beautiful songs!" : null}
          {species === "Fish" ? "💧 Swims gracefully!" : null}
        </p>
      </div>
    </div>
  )
}
