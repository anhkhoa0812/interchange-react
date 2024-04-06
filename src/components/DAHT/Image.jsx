import { useEffect, useState } from "react";
import { getImagePost } from "../../service/APIService";

const Image = ({ blogId }) => {
  const [dataImg, setDataImg] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getImagePost(blogId);
        const base64Data = response.data[0].body;
        console.log("this is body", base64Data);
        setDataImg(`data:image/jpeg;base64,${base64Data}`);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (blogId) {
      getData();
    }
  }, [blogId]);
  console.log("this is img", dataImg);
  return (
    <img
      src={dataImg}
      style={{ width: "450px", height: "320px" }}
      className="aligncenter wp-post-image"
    />
  );
};
export default Image;
