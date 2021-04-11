export default function Prize({ icon, track, description }) {
  return (
    <div>
      <img src={icon} alt={track} className="w-8 h-8" />
      <h3 className="text-2xl font-poppins font-semibold pb-2">{track}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
}
