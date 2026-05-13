export default function Marquee() {
  const items = [
    'Wedding Photography', 'Fashion Editorials', 'Corporate Events', 
    'Product Shoots', 'Portrait Sessions', 'Aerial Drone', 
    'Documentary', 'Brand Campaigns'
  ];

  return (
    <div className="bg-gold text-ink py-3.5 overflow-hidden flex" aria-hidden="true">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="px-7 text-[0.8rem] font-extrabold tracking-[0.08em] uppercase flex items-center gap-2.5">
            {item}
            <span className="w-1.5 h-1.5 bg-ink rounded-full opacity-35" />
          </div>
        ))}
      </div>
    </div>
  );
}
