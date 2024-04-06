import { useEffect, useState } from "react";
import { getImagePost } from "../../service/APIService";
import { data } from "jquery";

const Image = ({ blogId }) => {
  const [dataImg, setDataImg] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getImagePost(blogId);
        const base64Data = response.data[0].body;
        const contentType = response.data[0].headers["Content-Type"][0];
        setDataImg(`data:${contentType};base64,${base64Data}`);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (blogId) {
      getData();
    }
  }, [blogId]);
  return (
    <figure>
      <img
        style={{ width: "450px", height: "320px" }}
        src={dataImg}
        className="aligncenter wp-post-image"
        alt=""
        decoding="async"
        loading="lazy"
      />
    </figure>
  );
};
export default Image;
