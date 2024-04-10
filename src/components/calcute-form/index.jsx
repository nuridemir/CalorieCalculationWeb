import { useState } from "react"
import { caloriesCalculator } from "@/uitils"
import Card from "@/components/card"
import Loading from "@/components/loading"

const CalcuteForm = () => {

    const [weight, setWeight] = useState(0)
    const [showCard, setShowCard] = useState(false)
    const [maintainWeight, setMaintainWeight] = useState(0)
    const [gainingWeight, setGainingWeight] = useState(0)
    const [loseWeight, setLoseWeight] = useState(0)
    const [loadingForm, setLoadingForm] = useState(false)
    const [errorText, setErrorText] = useState("")

    const handleCalcuteForm = () => {

        if (weight < 30 || weight > 200) {
            setErrorText("Lütfen 30 ile 200 arasında bir değer giriniz")
        } else {
            setErrorText("")
            setLoadingForm(true)
            if (showCard) setShowCard(false)

            setTimeout(() => {
                setLoadingForm(false)
                setShowCard(true)
            }, 1000)


            setMaintainWeight(caloriesCalculator(weight))
            setGainingWeight(caloriesCalculator(weight, 400, "gainingWeight"))
            setLoseWeight(caloriesCalculator(weight, 400, "loseWeight"))
        }


    }


    return (
        <div className="max-w-5xl mx-auto p-2">
            <div className="max-w-2xl mx-auto">
                <p className="text-center text-lg">Mevcut kilonu yazarak, günlük alman gereken <span className="underline decoration-pink-500 text-secondary">Kilo Koruma</span>, <span className="underline decoration-pink-500 text-secondary">Kilo Verme</span>, <span className="underline decoration-pink-500 text-secondary">Kilo Alma</span> kalori ve makro bilgilerini görebilirsin</p>
                <span className="block text-center mt-2 text-sm">Bu bilgiler <strong className="text-secondary">tahmini bilgilerdir</strong>. Kişiden kişiye farklılık gösterebilir. Lütfen profosyonel destek alınız. Detaylı açıkmalaya <i><a href="#faqs" className="text-blue-500">SSS</a></i> ten erişebilirsin</span>
            </div>

            <div className="mt-12 border border-[#27272a] rounded-md mx-auto p-4 max-w-md py-10">
                <div>
                    <div>
                        <h3 className="text-lg text-secondary font-medium" title="Kilonuz">Kilonuz</h3>
                        <input type="number" title="Kilonuzu giriniz" disabled={loadingForm && true} onChange={e => setWeight(e.target.value)} placeholder="Örn: 70" className="w-full border border-[#27272a] bg-transparent rounded-md p-2 placeholder:italic placeholder:text-sm placeholder:font-normal mt-2" min="30" />
                        <small className="block text-red-700 font-normal mt-1" title={errorText}>{errorText && errorText}</small>
                    </div>
                    <button onClick={handleCalcuteForm} title="Hesapla" className="w-full mt-8 bg-secondary text-[#18181B] font-normal px-8 rounded-md py-2" disabled=
                        {loadingForm && true}>
                        {loadingForm ? (
                            <div className="flex items-center justify-center" role="status">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </div>
                        ) : "Hesapla"}
                    </button>
                </div>
            </div>
            {loadingForm && (
                <div className="flex items-center justify-center mt-12">
                    <Loading />
                </div>
            )}
            {
                showCard && (
                    <div className="mt-12">
                        <h2 className="text-2xl text-green-600">Hesaplama başarılı</h2>
                        <h4>Lütfen doğru sonucu alabilmek <i><a href="#faqs" className="text-blue-500">SSS</a></i> kısmını okuyun!</h4>
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                            <Card data={maintainWeight} title="Kilo koruma" />
                            <Card data={gainingWeight} title="Kilo alma" />
                            <Card data={loseWeight} title="Kilo verme" />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CalcuteForm