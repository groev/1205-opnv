import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Accordion({ data }) {
	return (
		<div className="accordion">
			<details>
				<summary>{data.head}</summary>
				<ul>
					{data.items &&
						data.items.map((item, idx) => {
							return <li key={idx}>{item}</li>;
						})}
				</ul>
			</details>
		</div>
	);
}
