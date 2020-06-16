import React from "react";
import AdminHeader from "../Header/Header";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import { toast } from "react-toastify";
import axios from "axios";

const EditVideo = () => {
  const submitForm = (e) => {
    e.preventDefault();
    const vidName = e.target.elements.editVideo.value;
    e.target.elements.editVideo.value = "";
    axios
      .put("http://localhost:5000/api/video", {
        videoLink: vidName,
      })
      .then((response) => {
        toast.success("Video Updated!");
      })
      .catch((error) => {});
  };

  return (
    <React.Fragment>
      <AdminHeader />

      <div className="editVideoMain">
        <SectionTitle title="Youtube Video Link" />
        <form className="pt-4 pb-4 pl-3 pr-3 formStyles" onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="editVideo">Edit Youtube Video Link</label>
            <input
              type="text"
              className="form-control"
              id="editVideo"
              placeholder="Ex: https://www.youtube.com/watch?v=Mw405dPBw00"
            />
          </div>
          <div className="form-group pt-2">
            <button type="submit" className="btn btn-primary">
              Update Link
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditVideo;
