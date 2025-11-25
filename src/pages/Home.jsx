import Main from '../components/Main';
import Alleat from '../components/Alleat';
import  Video  from "../components/Video"
import Menu from "../components/Menu"
import Event from '../components/Event';
import Gallery from '../components/Gallery';


const Home = () => {
  return (
    <>
      <Video/>
      <Main />
      <Alleat />
      <Menu/>
      <Event/>
      <Gallery/>
    </>
  );
};

export default Home;
