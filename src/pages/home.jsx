import { Link } from 'react-router-dom';
import heroImage from '../assets/simon-english-48nerZQCHgo-unsplash.jpg';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section
        className="min-h-140 flex items-center justify-center text-center px-10 py-16"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-xl">
          <p className="font-[Display_Playfair_SC] text-[10px] tracking-[0.45em] uppercase text-green-light mb-5">
            Your journey begins here
          </p>
          <h1 className="font-[Playfair_Display] text-[62px] font-light text-white leading-[1.1] mb-5">
            Collect the World,<br />
            <em className="italic text-green-light">One Dream at a Time</em>
          </h1>
          <p className="font-[Playfair_Display] text-[14px] text-white/70 tracking-wide font-light mb-9 leading-relaxed">
            A curated bucket list for the endlessly curious traveller
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/add"
              className="text-white font-[Inter] text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 rounded-sm bg-[#3B6D11]">
              Start Your List
            </Link>
            <Link to="/destinations"
              className="bg-transparent text-white border border-white/50 font-[Inter] text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 rounded-sm hover:bg-white/10 hover:border-white">
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
