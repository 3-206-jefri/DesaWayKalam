"use client"

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-medium transition ${
            activeCategory === category
              ? "bg-blue-600 text-white"
              : "bg-white text-slate-700 border border-slate-300 hover:border-blue-600 hover:text-blue-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
