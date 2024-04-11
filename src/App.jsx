import Header from "@/components/header"
import CalcuteForm from "./components/calcute-form"
import Faqs from "@/components/faqs"
import Footer from "@/components/footer"
import { Helmet } from "react-helmet"

function App() {

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kalori, Macro Hesaplayıcı</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Mevcut kilonuzu girerek günlük almanız gereken makro değerlerini hesaplamak için tıklayın." />
      </Helmet>
      <Header />
      <CalcuteForm />
      <Faqs />
      <Footer />
    </main>
  )
}

export default App
