export default function HowItWorksStep({ icon: Icon, step, title, description }) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center group">
      <div className="w-24 h-24 bg-earth-100 rounded-full flex items-center justify-center border-2 border-nature-200 shadow-sm group-hover:border-nature-500 group-hover:scale-110 transition-all duration-300 mb-6">
        <Icon size={40} className="text-nature-600" />
      </div>
      <h3 className="text-xl font-bold text-nature-900 mb-2">
        {step}. {title}
      </h3>
      <p className="text-nature-600 leading-relaxed px-4">{description}</p>
    </div>
  );
}
