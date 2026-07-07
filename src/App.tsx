import CountryCard from './components/CountryCard'
import { useCountries } from './hooks/useCountries'
import type { Country } from './types/country'
import {useState, useMemo} from 'react'
import SearchBar from './components/SearchBar'
import RegionFilter from './components/RegionFilter'
import SortFilter from './components/SortFilter'
import LanguageFilter from './components/LanguageFilter'
import { Routes, Route } from 'react-router-dom'
import CountryDetail from './pages/CountryDetail'

function App() {

  const { countries, loading, error } = useCountries()

  const [searchTerm, setSearchTerm] = useState('')

  const [selectedRegion, setSelectedRegion] = useState('')

  const [selectedSort, setSelectedSort] = useState('')

  const [selectedLanguage, setSelectedLanguage] = useState('')

  const filteredCountries = useMemo(() => {
    return countries.filter(country => 
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        && (selectedRegion === '' || country.region === selectedRegion) && (selectedLanguage === '' || Object.values(country.languages || {}).includes(selectedLanguage))
    )
    .sort((a, b) => {
    if (selectedSort === 'name') return a.name.common.localeCompare(b.name.common)
    if (selectedSort === 'name-desc') return b.name.common.localeCompare(a.name.common)
    if (selectedSort === 'area') return b.area - a.area
    return 0
    })
  }, [countries, selectedRegion, selectedSort, searchTerm, selectedLanguage])

  const languages = useMemo(() => 
    [...new Set(countries.flatMap(c => Object.values(c.languages || {})))]
    .filter(Boolean)
    .sort()
  , [countries])

  const regions = useMemo(() => 
    [...new Set(countries.map(c => c.region))].filter(Boolean)
  , [countries])

  const homePage = (
    <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">🌍 World Data Explorer</h1>
        <div className="max-w-4xl mx-auto mb-8 flex gap-4">
          <div className="flex-1">
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          </div>
          <RegionFilter regions={regions} selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
          <SortFilter selectedSort={selectedSort} onSortChange={setSelectedSort} />
          <LanguageFilter languages={languages} selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} />
        </div>
        {loading ? <p className="text-center">Chargement...</p> : null}
        {error ? <p className="text-center text-red-500">{error}</p> : null}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCountries.map((country: Country) => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    </div>
  )

  return (
    <Routes>
        <Route path="/" element={homePage} />
        <Route path="/country/:code" element={<CountryDetail />} />
    </Routes>
  )
}

export default App





