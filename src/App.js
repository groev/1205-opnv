import {
	Hero,
	Header,
	Finish,
	Greentext,
	Icons,
	Image,
	Mockups,
	Intro,
	SingleMockup,
} from './components';
import './assets/style.scss';

function App() {
	return (
		<div className="Landingpage">
			<Header />
			<Hero />
			<Intro />
			<Icons />
			<Image />
			<SingleMockup />
			<Mockups />
			<Greentext />
			<Finish />
		</div>
	);
}

export default App;
