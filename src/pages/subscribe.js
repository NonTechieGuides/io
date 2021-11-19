import Layout from '../components/layout'
import Countdown from '../components/countdown'

export default function Home() {
  return (
    <Layout>
      <main className="bg-white p-4">
        <Countdown />
      </main>
    </Layout>
  );
}