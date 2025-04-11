// "use client";

// import React from "react";

// // 🔍 Función para extraer ID desde link o recibirlo directamente
// const extractYouTubeId = (input) => {
//   if (!input) return "";
//   if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

//   try {
//     const url = new URL(input);
//     if (url.hostname === "youtu.be") return url.pathname.slice(1);
//     return url.searchParams.get("v") || "";
//   } catch {
//     return "";
//   }
// };

// const SimpleYouTubeEmbed = ({ video, title = "Video", ratio = "16/9" }) => {
//   const id = extractYouTubeId(video);
//   const url = id ? `https://www.youtube.com/embed/${id}?rel=0` : null;

//   if (!url) {
//     return <p className="text-red-500 text-center mt-4">⚠️ Video no válido</p>;
//   }

//   const [w, h] = ratio.split("/").map(Number);
//   const aspect = (h / w) * 100;

//   return (
//     <div className="w-full max-w-4xl mx-auto my-8">
//       <div
//         className="relative w-full"
//         style={{ paddingBottom: `${aspect}%` }}
//       >
//         <iframe
//           src={url}
//           title={title}
//           className="absolute top-0 left-0 w-full h-full rounded-lg border border-secondary shadow-lg"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>
//     </div>
//   );
// };

// export default SimpleYouTubeEmbed;


"use client";

import React from "react";

// 🔍 Extrae ID desde link o ID puro
const extractYouTubeId = (input) => {
  if (!input) return "";
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

  try {
    const url = new URL(input);
    if (url.hostname === "youtu.be") return url.pathname.slice(1);
    return url.searchParams.get("v") || "";
  } catch {
    return "";
  }
};

const SimpleYouTubeEmbed = ({
  video,
  titleOptions = {},
  containerOptions = {},
}) => {
  const id = extractYouTubeId(video);
  const videoUrl = id ? `https://www.youtube.com/embed/${id}?rel=0` : null;

  // 🎨 Título
  const {
    text: title = "Video",
    color: titleColor = "text-black",
    size: titleSize = "text-2xl sm:text-3xl",
    weight: titleWeight = "font-bold",
    alignment: titleAlign = "text-center",
    marginBottom = "mb-4",
  } = titleOptions;

  // 🎨 Contenedor
  const {
    bgColor = "bg-transparent",
    padding = "p-4",
    borderColor = "border-none",
    borderRadius = "rounded-lg",
    shadow = "shadow-lg",
    maxWidth = "max-w-4xl",
    ratio = "16/9",
  } = containerOptions;

  const [w, h] = ratio.split("/").map(Number);
  const aspect = (h / w) * 100;

  return (
    <div className={`w-full mx-auto py-spacing-3 ${bgColor} ${padding} ${maxWidth}`}>
      {/* Título */}
      <h2 className={`${titleAlign} ${titleColor} ${titleSize} ${titleWeight} ${marginBottom}`}>
        {title}
      </h2>

      {/* Video embed */}
      {videoUrl ? (
        <div
          className={`relative w-full ${borderColor} ${borderRadius} ${shadow}`}
          style={{ paddingBottom: `${aspect}%` }}
        >
          <iframe
            src={videoUrl}
            title={title}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <p className="text-red-500 text-center">⚠️ Video de YouTube no válido</p>
      )}
    </div>
  );
};

export default SimpleYouTubeEmbed;


// Ejemplo de uso:
  // <SimpleYouTubeEmbed
  //         video="https://www.youtube.com/watch?v=bxxHuAXVOPU"
  //         titleOptions={{
  //           text: "¡Vive la experiencia con nosotros!",
  //           color: "text-light",
  //           size: "text-size-5 sm:text-size-7",
  //           weight: "font-bold",
  //           alignment: "text-center",
  //           marginBottom: "mb-spacing-3",
  //         }}
  //         containerOptions={{
  //           bgColor: "bg-dark",
  //           padding: "p-6",
  //           borderColor: "border border-secondary",
  //           borderRadius: "rounded-xl",
  //           shadow: "shadow-md shadow-secondary",
  //           maxWidth: "max-w-5xl",
  //           ratio: "16/9",
  //         }}
  //       />