import AppContainer from '../containers/AppContainer'
import Search from '../components/Search'
import Details from '../components/Details'
//import Video from '../components/VideoPlayerView'
import Genres from '../components/Genres'
import EpisodesPicker from '../components/EpisodesPicker'

const Routes = {
    Home: {screen: AppContainer},
    Details: {screen: Details},
    Search: {screen: Search},
    Genres: {screen: Genres},
    //Video: {screen: Video},
    EpisodesPicker: {screen: EpisodesPicker}
}

export default Routes