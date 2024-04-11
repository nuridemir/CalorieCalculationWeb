const Card = ({ data, title }) => {
    return (
        <div className="p-4 border border-[#27272a] rounded-md">
            <h3 className="text-lg font-semibold text-secondary">{title}</h3>
            <table className="text-sm font-normal w-full">
                <tbody>
                    <tr>
                        <td className="pr-2">Protein:</td>
                        <td><strong className="text-secondary">{data.protein}</strong></td>
                        <td className="pl-4 pr-2">Kalori:</td>
                        <td className="text-end"><strong className="text-secondary">{data.proteinCalories}</strong></td>
                    </tr>
                    <tr>
                        <td className="pr-2">Yağ:</td>
                        <td><strong className="text-secondary">{data.fat}</strong></td>
                        <td className="pl-4 pr-2">Kalori:</td>
                        <td className="text-end"><strong className="text-secondary">{data.fatCalories}</strong></td>
                    </tr>
                    <tr>
                        <td className="pr-2">Karbonhidrat:</td>
                        <td><strong className="text-secondary">{data.carbohydrate}</strong></td>
                        <td className="pl-4 pr-2">Kalori:</td>
                        <td className="text-end"><strong className="text-secondary">{data.carbohydrateCalories}</strong></td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="h-4"></td>
                    </tr>
                    <tr className="text-secondary">
                        <td colSpan={3}>Toplam kalori:</td>
                        <td className="text-end">+</td>
                    </tr>
                    <tr className="text-secondary">
                        <td colSpan={4} className="border-t border-t"></td>
                    </tr>
                    <tr className="text-secondary">
                        <td colSpan="4" className="text-end"><strong>{data.calories}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Card