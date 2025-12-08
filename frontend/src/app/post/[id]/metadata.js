export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
   const res = await fetch(
    `${process.env.API_URL}/api/post/public/${params.id}`,
    { cache: "force-cache" } // better performance
  );

  const post = await res.json();
  const data = post.data;

  return {
    title: data.title,
    description: data.content.substring(0, 160),
    openGraph: {
      title: data.title,
      description: data.content.substring(0, 160),
      url: `https://spendwise-azure.vercel.app/post/${params.id}`,
      type: "article",
      images: [
        {
          url: data.images.individualPageDesktop,   // The image that will appear on WhatsApp
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
