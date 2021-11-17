import Layout from '../components/layout'
import Hero from '../components/hero'

export default function Home() {
  return (
    <Layout>
      <main className="bg-white p-4">
        <Hero />
      </main>
    </Layout>
  );
}