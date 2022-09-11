import React, { useEffect, useState } from "react";
import "./App.css";

const images = [
  	{ id: '1', imageName: 'img1.jpeg', tag: 'free' },
	{ id: '2', imageName: 'img2.jpeg', tag: 'new' },
	{ id: '3', imageName: 'img3.jpeg', tag: 'pro' },
	{ id: '4', imageName: 'img4.jpeg', tag: 'pro' },
	{ id: '5', imageName: 'img5.jpeg', tag: 'free' },
	{ id: '6', imageName: 'img6.jpeg', tag: 'new' },
	{ id: '7', imageName: 'img6.jpeg', tag: 'pro' },
	{ id: '8', imageName: 'img8.jpeg', tag: 'free' },
	{ id: '9', imageName: 'img9.jpeg', tag: 'new' },
	{ id: '10', imageName: 'img10.jpeg', tag: 'new' },
	{ id: '11', imageName: 'img11.jpeg', tag: 'new' },
	{ id: '12', imageName: 'img12.jpeg', tag: 'new' },
	{ id: '13', imageName: 'img13.jpeg', tag: 'free' },
	{ id: '14', imageName: 'img14.jpeg', tag: 'pro' },
	{ id: '15', imageName: 'img15.jpeg', tag: 'free' },
	{ id: '16', imageName: 'img16.jpeg', tag: 'new' }
]

function App() {

	const [tag, setTag] = useState('new');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect( () => {
		tag === 'all' ? setFilteredImages(images) : setFilteredImages( images.filter(image=> image.tag === tag ))
 	}, [tag] );

	return (
		<div className="App" handleSetTag={setTag}>
			<div className="tags">
				<TagButton name="all" handleSetTag={setTag} tagActive={tag === 'all' ? true : false} />
				<TagButton name="new" handleSetTag={setTag} tagActive={tag === 'new' ? true : false} />
				<TagButton name="free" handleSetTag={setTag} tagActive={tag === 'free' ? true : false} />
				<TagButton name="pro" handleSetTag={setTag} tagActive={tag === 'pro' ? true : false} />
			</div>
			<div className="container">
				{filteredImages.map((image) => (
					<div key={image.id} className='image-card'>
						<img className="image" src={`./images/${image.imageName}`} alt="" />
					</div>
				))}
			</div>
		</div>
	);
}

const TagButton = ( { name, handleSetTag, tagActive } ) => {
	return (
		<button className={`tag ${tagActive ? 'active' : ''}`} onClick={ () => handleSetTag(name) }>{ name.toUpperCase() }</button>
	);
}

export default App;