export default function Sponsor({ companyName, logo, website }) {
  return (
    <div>
      <a href={website}>
        <img
          src={logo}
          alt={companyName}
          className="w-64 md:w-52 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        />
      </a>
    </div>
  );
}
