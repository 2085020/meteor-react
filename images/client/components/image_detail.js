/**
 * Created by cruznavj on 19/09/2016.
 */
/**
 * Image List Component
 */
//Import React
import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
    // props.image => this is the image object
    // props.image.title
    // props.image.link
    var description = props.image.description;
    if (description==null) {
        description= "No description received";
    }
    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.image.link}/>
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.image.title}
                </h4>
                <p>
                    {description}
                </p>
                <ImageScore ups={props.image.ups} downs={props.image.downs}/>
            </div>

        </li>
    );
};

// Export the component
export default ImageDetail;
