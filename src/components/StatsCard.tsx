import type { CoreType } from "../types/dataTypes";

const StatsCard = ({ desc, title }: CoreType) => {
    return (
        <div className="border-l-4 border-yellow-500 pl-4 left-col-item">
            <span className="font-bold text-white block text-lg">{title}</span>
            <p className="text-sm mt-1 text-gray-400">
                {desc}
            </p>
        </div>
    )
}

export default StatsCard;