/**
 * Image List Component
 */
//Import React
import React from 'react';
import ImageDetail from './image_detail'

/*const IMAGES = [
    {title: 'Pen', link: 'https://dummyimage.com/600x400'},
    {title: 'Pine Tree', link: 'https://dummyimage.com/600x400'},
    {title: 'Mug', link: 'https://dummyimage.com/600x400'}
];*/
//Create component
const ImageList = (props) => {
    /*const RenderedImages =  IMAGES.map(function(image){
     return <ImageDetail key={image.title} image={image}/>
     });*/
    const validImages = props.images.filter (image => !image.is_album);
    const RenderedImages = validImages.map(image =>
        <ImageDetail key={image.title} image={image}/>
    );

    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};

// Export the component
export default ImageList;
