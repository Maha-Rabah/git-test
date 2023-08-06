import NavBar from "../component/NavBar/NavBar"
import "./HomeStyle.css"

const Home = () => {
  return (
    <div>
        <NavBar logo={"Trippy"} 
        list={["Home","About","Services","content"]}
        button={"sign up"}/>
    </div>
  )
}

export default Home