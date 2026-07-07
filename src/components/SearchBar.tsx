interface SearchBarProps{
    searchTerm: string
    onSearch: (value: string) => void
}

function SearchBar({ searchTerm, onSearch }: SearchBarProps) {
    return (
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 border border-gray-200">
            <span className="text-gray-400 mr-2">🔍</span>
            <input 
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Rechercher un pays..."
            />
        </div>
    )
}

export default SearchBar