import React from 'react';

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
