interface LanguageFilterProps {
    languages: string[]
    selectedLanguage: string
    onLanguageChange: (value: string) => void
}

function LanguageFilter({ languages, selectedLanguage, onLanguageChange }: LanguageFilterProps) {
    return (
        <select className="bg-white border border-gray-200 rounded-full px-4 py-2 shadow-md text-gray-700 outline-none cursor-pointer appearance-none pr-8"
            value={selectedLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
        >
            <option value="">Toutes les langues</option>
            {languages.map(language => (
                <option key={language} value={language}>{language}</option>
            ))}
        </select>
    )
}

export default LanguageFilter