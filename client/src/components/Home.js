import mainVideo from '../assets/main.mp4'

const Home = () => {

    return (
        <div className="home">
        <video src= {mainVideo} autoPlay loop muted />
        </div>
    )
}

export default Home