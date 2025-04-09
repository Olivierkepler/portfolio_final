'use client'

interface TagFilterProps {
  tags: string[]
  selectedTag: string | null
  onSelect: (tag: string | null) => void
}

export default function TagFilter({ tags, selectedTag, onSelect }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-1.5 text-sm rounded-full font-medium transition ${
          selectedTag === null
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-800'
        }`}
      >
        All
      </button>

      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className={`px-4 py-1.5 text-sm rounded-full font-medium transition ${
            selectedTag === tag
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-800'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
