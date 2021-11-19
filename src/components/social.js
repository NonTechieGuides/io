const Social = () => {
  return (
    <div>
      <ul className="flex flex-col md:flex-row text-sm justify-around my-8 text-gray-400">
        <li><a className="underline" href="mailto:rich@nontechieguides.io">rich@nontechieguides.io</a></li>
        <li><a className="underline" href="http://www.twitter.com/nontechieguides">Twitter &mdash; @nontechieguides</a></li>
        <li><a className="underline" href="https://www.facebook.com/NonTechieGuides/">Facebook &mdash; NonTechieGuides</a></li>
        <li><a className="underline" href="">Instagram</a></li>
      </ul>
    </div>
  )
}

export default Social