export default function Sponsor({ companyName, logo, website }) {
  return (
    <div>
      <a href={website}>
        <img src={logo} alt={companyName} className="w-52 hover-scale" />
      </a>
    </div>
  );
}
