import Image from 'next/image'

const Countdown = () => {
  return (
    <div className="drop-shadow-xl filter px-4 pb-4">
      <h2 className="mt-8 text-2xl font-black text-center text-orange">COMING SOON &hellip;</h2>
      <Image
        className="w-30 mx-auto mt-2 hidden dark:block"
        src="https://timer.getmara.com/c3R5bGU9MTImZGF0ZT0yMDIxLTEyLTAxJnRpbWU9MDklM0EwMCZ0aW1lem9uZT1BbWVyaWNhJTJGQ2hpY2FnbyZiY2tDb2xvcj0wMDJCMjYmZm9udENvbG9yPTg1OTkwMCZsYWJlbENvbG9yPUI1ODkwMCZkYXlMYWJlbD1kYXlzJmhvdXJMYWJlbD1ob3VycyZtaW5MYWJlbD1taW4mc2VjTGFiZWw9c2Vj.gif"
        alt="dark mode countdown timer"
        layout='fill'
      />
      <Image
        className="w-30 mx-auto mt-2 dark:hidden"
        src="https://timer.getmara.com/c3R5bGU9MTImZGF0ZT0yMDIxLTEyLTAxJnRpbWU9MDklM0EwMCZ0aW1lem9uZT1BbWVyaWNhJTJGQ2hpY2FnbyZiY2tDb2xvcj1FRUU4RDUmZm9udENvbG9yPTg1OTkwMCZsYWJlbENvbG9yPUI1ODkwMCZkYXlMYWJlbD1kYXlzJmhvdXJMYWJlbD1ob3VycyZtaW5MYWJlbD1taW4mc2VjTGFiZWw9c2Vj.gif"
        alt="light mode countdown timer"
        layout='fill'
      />
    </div>
  )
}

export default Countdown