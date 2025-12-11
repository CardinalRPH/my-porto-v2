import type { TechStackType } from "../types/dataTypes";

type SkillBadgeType = TechStackType & {
    className?: string
}

export const SkillBadge: React.FC<SkillBadgeType> = ({ name, icon: Icon, color, className }) => (
    <div className={`flex flex-col items-center p-4 w-44 transition duration-300 hover:scale-105 hover:bg-gray-700/50 rounded-lg ${className}`}>
        <Icon className={`text-5xl ${color} mb-1`} />
        <span className="text-sm font-medium text-gray-300 whitespace-nowrap">{name}</span>
    </div>
);