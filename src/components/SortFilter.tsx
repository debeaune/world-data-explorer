interface SortFilterProps {
    selectedSort: string
    onSortChange: (value: string) => void
}

function SortFilter ({selectedSort, onSortChange} : SortFilterProps ) {
    return (
        <select className="bg-white border border-gray-200 rounded-full px-4 py-2 shadow-md text-gray-700 outline-none cursor-pointer appearance-none pr-8"
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
        >
            <option value="">Trier par...</option>
            <option value="name">Nom (A→Z)</option>
            <option value="name-desc">Nom (Z→A)</option>
            <option value="area">Superficie</option>
        </select>
    )
}

export default SortFilter