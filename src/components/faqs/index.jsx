import Faq from "@/components/faq"
import Container from "@/components/container"

const Faqs = () => {
    return (
        <Container extraClass="my-24" id="faqs">
            <h2 className="text-4xl text-secondary" title="Sıkça sorulan sorular">S.S.S </h2> <small title="Sıkça sorulan sorular">(Sıkça sorulan sorular)</small>
            <div className="space-y-6 text-justify mt-4">
                <Faq title="Doğruluk payı 100%'mü?" desc="Hayır. Bu sonuç kişinin günlük aktivitesi, yaşı gibi etkenler sebebiyle farklılık gösterebilir." />
                <Faq title="En verimli sonucu nasıl alabilirim?" desc="Her sabah lavabo ihtiyacından sonra tartılın. Bu işlemi 7 gün boyunda tekrar edip kilonuzu not alın. 7 gün sonunda hedefinize uygun kalori eklemesi/çıkarması yapabilirsiniz." />
                <Faq title="Kalori hesabına uyarken nelere dikkat etmeliyim?" desc="Disiplin! En önemli nokta disiplin ve düzen. Bunun yanı sıra besinlerinizi tamamını çiğ veya pişmiş olarak ölçün ayrıca sürdürülebilir bir beslenme programına uymaya dikkat edin." />
                <Faq title="Sürdürülebilir beslenme nedir?" desc="Haftanın her günü aynı gıdaları tüketmek uzun vadede sürdürülebilirliğinizi azaltabilir. Buna örnek vermek gerekirse hergün aynı çeşit pilavi tercih etmeyebilirsiniz. Farklı çeşit pilavlarıda programınıza dahil ederek sürdürülebilirliğinizi arttırabilirsin. Aynı şekilde hergün tavuk göğsü tercih etmek yerine, kırmızı et, balık gibi gıdalarlada çeşitliliğinizi arttırabilirsiniz." />
            </div>
        </Container>
    )
}

export default Faqs