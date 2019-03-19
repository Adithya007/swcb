import React from "react";
import fileExtension from 'file-extension';

let reader = new FileReader();

export default class ImageUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
      image: null
    };
  }

  _handleImageChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    reader.onloadend = () => {
      var image = new Image();
      image.src = reader.result
      const that = this
      let extension = fileExtension(file.name)
      if (!(extension == 'jpg' || extension == 'jpeg')) {
        alert('Only JPG/JPEG format is allowed');
        this.imageUpload.value = '';
        return;
      }
      image.onload = () => {
        
        that.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
    }
    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <img style={{ marginTop: '1.2rem' }} width="150px" height="200px" src={imagePreviewUrl} />
      );
    } else {
      $imagePreview = (
        <div className="previewText">Upload photograph*</div>
      );
    }
    return (
      <div className="previewComponent">
        <div style={{ marginBottom: '1.2rem' }} className="imgPreview">{$imagePreview}</div>
        <input
          className="fileInput"
          type="file"
          ref={(e) => this.imageUpload = e}
          onChange={e => this._handleImageChange.bind(this)(e)}
        />
      </div>
    );
  }
}