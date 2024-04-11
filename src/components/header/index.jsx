import Container from "@/components/container"

const Header = () => {
    return (
        <Container extraClass="!py-20">
            <header className="text-center">
                <h1 className="text-4xl italic text-secondary font-medium">Kalori Macro <span className="underline decoration-pink-500">Hesaplayıcı</span></h1>
                <p className="max-w-2xl mx-auto text-center mt-4">Mevcut kilonu yazarak, günlük alman gereken <span className="underline decoration-pink-500 text-secondary">Kilo Koruma</span>, <span className="underline decoration-pink-500 text-secondary">Kilo Verme</span>, <span className="underline decoration-pink-500 text-secondary">Kilo Alma</span> kalori ve makro bilgilerini görebilirsin</p>
            </header>
        </Container>

    )
}

export default Header