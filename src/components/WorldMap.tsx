import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { useNavigate } from 'react-router-dom'
import type { Country } from '../types/country'

interface WorldMapProps {
    countries: Country[]
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

function WorldMap({ countries }: WorldMapProps) {
    const navigate = useNavigate()

    const handleClick = (geoName: string) => {
        const country = countries.find(c => c.name.common === geoName)
        if (country) navigate(`/country/${country.cca3}`)
    }

    return (
        <ComposableMap style={{ width: "100%", height: "500px" }}>
            <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: any[] }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#D6D6DA"
                            stroke="#FFFFFF"
                            onClick={() => handleClick(geo.properties.name)}
                            style={{
                                hover: { fill: "#8B4513", cursor: "pointer" }
                            }}
                        />
                    ))
                }
            </Geographies>
        </ComposableMap>
    )
}

export default WorldMap