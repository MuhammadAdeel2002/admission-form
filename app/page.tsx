import AdmissionForm from "@/components/admission-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-grow py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <AdmissionForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
