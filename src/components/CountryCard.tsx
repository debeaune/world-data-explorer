import type {Country} from '../types/country'
import { Link } from 'react-router-dom'

interface CountryCardProps {
    country: Country
} 

function CountryCard({ country }: CountryCardProps) {
    return (
        <Link to={`/country/${country.cca3}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img 
                    src={`https://flagcdn.com/w320/${country.cca2?.toLowerCase()}.png`}
                    alt={country.name.common}
                    className="w-full h-40 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{country.name.common}</h2>
                    <p className="text-gray-500 text-sm">
                        <span className="font-semibold text-gray-700">Région : </span>
                        {country.region}
                    </p>
                    <p className="text-gray-500 text-sm">
                        <span className="font-semibold text-gray-700">Capitale : </span>
                        {country.capital}
                    </p>
                    <p className="text-gray-500 text-sm">
                        <span className="font-semibold text-gray-700">Langues : </span>
                        {country.languages ? Object.values(country.languages).join(', ') : ''}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard