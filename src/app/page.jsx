import Feed from 'components/Feed.jsx'
const Home = () => {
  return (
    <section className="w-full flex-col">
      <h1 className="head_text text_center">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient center">AI-Powered Prompts</span>
      </h1>
      <p className="desc center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatum nemo non deleniti laudantium, fugit expedita doloremque porro eum velit eveniet, nesciunt est minus eaque, culpa repudiandae ea quod cum?
      </p>
      <Feed />
    </section>
  )
}

export default Home