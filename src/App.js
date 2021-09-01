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
	Slider,
	Referenz,
	Demo,
	Fazit,
} from './components';
import './assets/style.scss';

function App() {
	return (
		<div className="Landingpage">
			<Header />
			<Hero />
			<Intro />
			<Slider />
			<Icons />
			<Image />
			<SingleMockup />
			<Mockups />
			<Greentext />
			<Referenz />
			<Demo />
			<Fazit />
			<Finish />
		</div>
	);
}

export default App;
