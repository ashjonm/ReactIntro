import React from "react";
import "./marker.css";

class Marker extends React.Component {
    render() {
        let markerClasses = "marker";

        if (this.props.isSelected) {
            markerClasses += " selectedMarker";
        }

        return (
            <div className={markerClasses}>
                $ {this.props.price}
            </div>
        );
    };
};

export default Marker;