import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "Hydrangea Hacks";
  const description =
    "A weekend-long virtual hackathon for students of marginalized genders to promote incusivity and diversity in STEM.";
  const keywords =
    "female, lgbtq, tech, STEM, nonbinary, coding, computer science, hackathon";
  const author = "Hydrangea Hacks";
  const twitter = "@hydrangeahacks";
  const image = "https://og-image.vercel.app/**Hydrangea**%20Hacks.png?theme=light&md=1&fontSize=150px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg"; 
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:url" content="hydrangeahacks.tech" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      {/* Add analytics here */}
      {children}
    </Head>
  );
}
