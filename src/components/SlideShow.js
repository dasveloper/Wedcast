import ImageGallery from "react-image-gallery";
import firebase from "./Firebase.js"; // <--- add this line
import React, { Component } from "react";
import Gallery from "react-grid-gallery";

class SlideShow extends Component {
  constructor() {
    super();
    this.state = {
      slideshowImages: null,
      galleryImages: null,
      view: 2,
      castId: null,
      password: null,
      width: null,
      height: null
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.switchViews = this.switchViews.bind(this);

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log(window.innerHeight);
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount() {
    this.getImages();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  getImages() {
    var self = this;
    let { castId } = this.props;
    const itemsRef = firebase.database().ref(`feeds/feedNew/${castId}/uploads`);
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();

      let SlideshowImages = [];
      let GalleryImages = [];
      for (let item in items) {
        SlideshowImages.push({
          original: items[item].uri,
          thumbnail: items[item].uri
        });
        let ratio = items[item].width / items[item].height;
        let height = this.state.height / 3;
        let width = ratio * height;

        GalleryImages.push({
          src: items[item].uri,
          thumbnail: items[item].uri,
          thumbnailWidth: width,
          thumbnailHeight: height
        });
      }
      self.setState({
        galleryImages: GalleryImages,
        slideshowImages: SlideshowImages
      });
    });
  }
  switchViews() {
    if (this.state.view == 1){
      this.setState({view: 2})

    } else{
      this.setState({view: 1})

    }
  }
  render() {
    let { galleryImages, slideshowImages, view, currentUser } = this.state;
    let { castId } = this.props;
    const width = this.state.width;
    return (
      <div class="gallery-bg">
        {slideshowImages &&
          view == 1 && (
            <ImageGallery showThumbnails={false} items={slideshowImages} />
          )}
        {galleryImages && view == 2 && <Gallery             enableImageSelection={false}
 images={galleryImages} />}
        <div class="overlay-wrapper">
        <button class="switch-views" onClick={this.switchViews}>
          {view == 2 ? "View Slideshow" : "View Gallery"}
        </button>
        </div>
      </div>
    );
  }
}
export default SlideShow;
