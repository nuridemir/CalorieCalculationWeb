import { useState } from "react"
import { caloriesCalculator } from "@/uitils"
import Card from "@/components/card"
import Loading from "@/components/loading"
import Container from "@/components/container"

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
        <Container extraClass="min-w-full border-t border-b !py-20">
            <div className="max-w-2xl mx-auto">
                <span className="block text-center mt-2 text-sm">Bu bilgiler <strong className="text-secondary">tahmini bilgilerdir tedavi amaçlı kullanılamaz</strong>, değerler kişiden kişiye farklılık gösterebilir. Tedavi için lütfen profosyonel destek alınız. Detaylı açıkmalaya <i><a href="#faqs" className="text-blue-500">SSS</a></i> ten erişebilirsin</span>
            </div>

            <div className="mt-12 border border-[#27272a] rounded-md mx-auto p-4 max-w-lg py-10">
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
                                <Loading />
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
                    <div className="max-w-5xl mx-auto mt-12">
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
        </Container>
    )
}

export default CalcuteForm