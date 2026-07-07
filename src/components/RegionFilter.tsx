interface RegionFilterProps {
    regions: string []
    selectedRegion: string
    onRegionChange: (value: string) => void
}

function RegionFilter({ regions, selectedRegion, onRegionChange }: RegionFilterProps) {
    return (
        <select
            className="bg-white border border-gray-200 rounded-full px-4 py-2 shadow-md text-gray-700 outline-none cursor-pointer"
            value={selectedRegion}
            onChange={(e) => onRegionChange(e.target.value)}
        >
            <option value="">Toutes les régions</option>
            {regions.map(region => (
                <option key={region} value={region}>{region}</option>
            ))}
        </select>
    )
}

export default RegionFilter