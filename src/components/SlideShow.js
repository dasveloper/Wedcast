import ImageGallery from "react-image-gallery";
import firebase from "./Firebase.js"; // <--- add this line
import React, { Component } from "react";

class SlideShow extends Component {
  constructor() {
    super();
    this.state = {
      images: null,
      castId: null,
      password: null
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.props.castID !== prevState.castId) {
      return { castId: nextProps.props.castID };
    } else return null;
  }
  componentDidUpdate(prevProps) {
    //if (prevProps.castID !== this.props.castId) {
    //  console.log("change");
    //this.getImages();
    // }
  }
  componentDidMount(){
    this.getImages();

  }

  getImages() {
    var self = this;
    let { castId } = this.props;
    const itemsRef = firebase.database().ref(`feeds/feedNew/${castId}/uploads`);
    itemsRef.on("value", snapshot => {
      console.log("loaded");
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          original: items[item].uri,
          thumbnail: items[item].uri
        });
      }
      self.setState({
        images: newState
      });
    });
  }


  render() {
    let { images, currentUser } = this.state;
    let { castId } = this.props;
    return (
      <div>
  
          <div>
            {this.state.images && (
              <ImageGallery showThumbnails={false} items={images} />
            )}
          </div>
        

      </div>
    );
  }
}
export default SlideShow;
