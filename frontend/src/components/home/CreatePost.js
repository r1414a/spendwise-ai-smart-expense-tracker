"use client";
import React, { useState } from "react";
import UploadMedia from "./UploadMedia";
// import axios from "axios";
// import { useAuth } from "@/context/authContext";
// import SearchLocation from "../ui/SearchLocation";
// import ErrorOrSuccessToast from "../ui/ErrorOrSuccessToast";
// import DistanceAndVisibility from "../ui/createpost-group/DistanceAndVisibility";
// import TextArea from "../ui/textarea/TextArea";
// import FormSubmitButton from "../ui/formsubmitbutton/FormSubmitButton";
// import FormTags from "../ui/FormTags";
// import MapBoxSearchLocation from "./MapBoxSearchLocation";
// import { usePosts } from "@/context/postsContext";
// import { useRouter } from "next/navigation";

export default function CreatePost() {
//   const { token } = useAuth();
//   const { mutatePosts } = usePosts();
//   const router = useRouter();

  const [form, setForm] = useState({
    content: "",
    tags: [],
    background: [],
    distance_cover: 10,
    visibility: "public",
    location: {
      type: "Point",
      coordinates: [0, 0],
    },
  });
  console.log(form);

//   const [loading, setLoading] = useState(false);
//   const [successErrorMsg, setSuccessErrorMsg] = useState({
//     msg: "",
//     isError: false,
//   });
//   const [place, setPlace] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccessErrorMsg({ msg: "", isError: false });
//     const formData = new FormData();

//     try {
//       formData.append("content", form.content);
//       formData.append("distance_cover", form.distance_cover.toString());
//       form.tags.forEach((tag, i) => {
//         formData.append(`tags[${i}]`, tag);
//       });

//       // Add background files
//       form.background.forEach((file) => {
//         formData.append("background", file);
//       });

//       // Add location as a single JSON string
//       formData.append("location", JSON.stringify(form.location));

//       // Make API call
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/post/create`,
//         formData,
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       const newPost = response.data.data;
//       console.log("API Response:", response.data);
      

//       mutatePosts((pages = [[]]) => {
//         return [[newPost, ...pages[0]], ...pages.slice(1)];
//       }, false);

//       setSuccessErrorMsg({ msg: "Post created successfully!", isError: false });

//       // Reset form after successful submission
//       setForm({
//         content: "",
//         tags: [],
//         background: [],
//         distance_cover: 10,
//         location: {
//           type: "Point",
//           coordinates: [0, 0],
//         },
//       });
//       setPlace("");
//       setUploadedFiles(null);

      

//       router.push("/feed");
//     } catch (error) {
//       console.error("Error creating post:", error);
//       setSuccessErrorMsg({
//         msg: "Failed to create post, please try later",
//         isError: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
//   console.log(successErrorMsg);
  return (
    <>
      <form
        // onSubmit={handleSubmit}
        className="pt-20 pb-18 mb-20 px-4 xs:px-6 bg-white text-graybg"
      >
        {/* <div>
          <h2 className="text-2xl font-bold text-graybg tracking-tight pb-4">
            Create post
          </h2>
        </div> */}

        {/* Content */}
        {/* <div className="mt-1 mb-3">
          <TextArea
            config={{
              id: "post_body",
              name: "content",
              htmlFor: "",
              label: "",
              placeholder: "What's on your mind?",
              value: form.content,
              onChange: handleChange,
              rows: 2,
            }}
          />
        </div> */}

        {/* Tags */}
        {/* <FormTags
          allTags={form.tags}
          addTag={(tag) => {
            if (!form.tags.includes(tag)) {
              setForm((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
            } else {
              setForm((prev) => ({
                ...prev,
                tags: form.tags.filter((item) => item != tag),
              }));
            }
          }} 
        />*/}

        {/* Media Upload */}
        <UploadMedia
          isInCreatePost={true}
          onImageChange={(e) => {
            const files = e.target.files;
            setForm((prev) => ({ ...prev, background: Array.from(files) }));
          }}
          images={form.background}
          isSingleImage={false}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
        />

        {/* <MapBoxSearchLocation
          place={place}
          onLocationFound={(res) => {
            const place = res.features[0];
            console.log(place);
            const lat = place.geometry.coordinates[1];
            const lon = place.geometry.coordinates[0];
            const fulladd = place.properties.full_address;
            const name = place.properties.name;
            setPlace(`${name} ${fulladd}`);
            setForm((prev) => ({
              ...prev,
              location: {
                type: "Point",
                coordinates: [lon, lat],
              },
            }));
          }}
        /> */}

        {/* Location */}
        {/* <SearchLocation
          onLocationFound={(lat, lon) => {
            setForm((prev) => ({
              ...prev,
              location: {
                type: "Point",
                coordinates: [lon, lat],
              },
            }));
          }}
        /> */}

        {/* <DistanceAndVisibility
          handleChange={handleChange}
          distance={form.distance_cover}
          visibility={form.visibility}
        /> */}

        {/* Submit Button */}
        {/* <FormSubmitButton
          loading={loading}
          whileLoadingText="Creating post..."
          text="Post"
        /> */}
      </form>

      {/* {successErrorMsg.msg && (
        <ErrorOrSuccessToast
          msg={successErrorMsg.msg}
          isError={successErrorMsg.isError}
        />
      )} */}
    </>
  );
}
