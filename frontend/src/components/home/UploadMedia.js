import Image from "next/image";
import { useEffect, useState } from "react";
import FilesCarousel from "../filecarousel/FilesCarousel";
import { FaUpload } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";

export default function UploadMedia({
  isInCreatePost,
  onImageChange,
  images,
  isSingleImage,
  uploadedFiles,
  setUploadedFiles,
}) {
  function showPreview(e) {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type,
    }));

    setUploadedFiles(previews);
  }

  useEffect(() => {
    return () => {
      uploadedFiles?.forEach((file) => {
        if (file?.url) {
          URL.revokeObjectURL(file.url);
        }
      });
    };
  }, [uploadedFiles]);
  return (
    <div className="mb-4 mt-3">
      <label className="block text-sm font-semibold mb-2 text-graybg">
        Upload Images/Videos {isInCreatePost && "(Optional)"}
      </label>
      <div className="flex gap-2">
        <div className="basis-1/2 border border-gray-300 rounded-md relative p-2.5 hover:border-gray-600">
          <input
            type="file"
            multiple={!isSingleImage}
            accept="image/*,video/*"
            onChange={(e) => {
              showPreview(e);
              onImageChange(e);
            }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <p className="flex items-center gap-2 text-sm text-graybg text-center">
            <FaUpload className="text-lg" />
            Upload from files
          </p>
        </div>
        <div className="basis-1/2 border border-gray-300 rounded-md relative p-2.5 hover:border-gray-600">
          <input
            type="file"
            accept="image/*,video/*"
            capture="environment"
            onChange={(e) => {
              showPreview(e);
              onImageChange(e);
            }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <p className="flex items-center gap-2 text-sm text-graybg text-center">
            <FaCamera className="text-lg" />
            Capture
          </p>
        </div>
      </div>

      {isSingleImage && images ? (
        <p className="text-xs text-gray-600 mt-1">1 file selected</p>
      ) : (
        images.length > 0 && (
          <p className="text-xs text-gray-600 mt-1">
            {images.length} file(s) selected
          </p>
        )
      )}

      {uploadedFiles && (
        <div className="mt-1">
          {uploadedFiles.length === 1 ? (
            uploadedFiles[0].type.startsWith("image") ? (
              <Image
                src={uploadedFiles[0].url}
                width={400}
                height={300}
                alt="Uploaded images preview"
                className="object-cover w-full h-40 rounded-md"
              />
            ) : (
              <video
                src={uploadedFiles[0].url}
                autoPlay
                muted
                controls
                width={400}
                height={300}
                className="object-cover w-full h-40 rounded-md"
              />
            )
          ) : (
            <FilesCarousel files={uploadedFiles} height="h-56" />
          )}
        </div>
      )}
    </div>
  );
}
