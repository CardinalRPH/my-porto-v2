const ResumeItem: React.FC<{ title: string, subtitle?: string, year?: string, details?: string, icon?: React.ElementType, isSkill?: boolean }> = ({
    title, subtitle, year, details, isSkill = false
}) => {
    return (
        <div className={`mb-8 p-6 bg-zinc-800 rounded-lg shadow-xl relative resume-item ${isSkill ? 'border-l-4 border-yellow-500 pl-8' : ''}`}>
            {/* Panah (Arrow) hanya untuk Education/Experience timeline */}
            {!isSkill && (
                <span className="absolute -left-5 top-7 h-4 w-4 bg-yellow-500 rounded-full border-4 border-zinc-700 block item-arrow"></span>
            )}

            {year && <p className="text-sm text-yellow-500 font-medium mb-1">{year}</p>}

            <h4 className={`text-xl font-bold mb-1 ${isSkill ? 'text-white' : 'text-yellow-400'}`}>
                {title}
            </h4>

            {subtitle && <p className="text-gray-400 font-medium">{subtitle}</p>}

            {/* Bagian Details (atau sub-skill) */}
            {details && <p className={`mt-2 ${isSkill ? 'text-sm text-gray-300' : 'text-gray-400 text-sm'}`}>{details}</p>}
        </div>
    );
};

export default ResumeItem