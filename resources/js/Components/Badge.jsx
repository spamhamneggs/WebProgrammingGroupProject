export default function Badge({ icon: Icon, children, className = "" }) {
  return (
    <span className={`inline-block py-1 px-3 rounded-full bg-nature-100 text-nature-700 text-sm font-bold tracking-wider border border-nature-200 mb-6 ${className}`}>
      {Icon && <Icon size={16} className="inline mr-1 mb-1" />}
      {children}
    </span>
  );
}
