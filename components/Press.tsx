import React from 'react';
import { SectionId } from '../types';
import { Newspaper, ExternalLink, Archive } from 'lucide-react';

interface PressItem {
  title: string;
  outlet: string;
  date: string;
  summary: string;
  liveUrl: string;
  archiveUrl: string;
}

const PRESS_ITEMS: PressItem[] = [
  {
    title: "Step Inside the Studio of Baseball's Greatest Sign Maker",
    outlet: 'MLB.com — Cut4',
    date: 'June 24, 2013',
    summary:
      "A behind-the-scenes look at the process: Google Images searches, Photoshop drafts, trips to the local printer, and the Twitter feedback loop with fellow A's fans that shaped which signs made it to the ballpark.",
    liveUrl: 'https://www.mlb.com/cut4/step-inside-the-studio-of-baseballs-greatest-sign-maker/c-50532316',
    archiveUrl: 'https://web.archive.org/web/20260708050446/https://www.mlb.com/cut4/step-inside-the-studio-of-baseballs-greatest-sign-maker/c-50532316',
  },
  {
    title: "'I'll Never Run on Reddick Again': A's Give Out 'Careless Whisper' Cheer Cards",
    outlet: 'MLB.com — Cut4',
    date: 'May 27, 2014',
    summary:
      "Cut4 tracked me down mid-vacation to talk about a stadium giveaway: a printed cheer card built around Josh Reddick's 'Careless Whisper' walk-up song, handed out to fans on Memorial Day.",
    liveUrl: 'https://www.mlb.com/cut4/ill-never-run-on-reddick-again-as-give-out-careless-whisper-cheer-cards/c-77017428',
    archiveUrl: 'https://web.archive.org/web/20260708050813/https://www.mlb.com/cut4/ill-never-run-on-reddick-again-as-give-out-careless-whisper-cheer-cards/c-77017428',
  },
];

const Press: React.FC = () => {
  return (
    <section id={SectionId.PRESS} className="py-24 bg-athletics-green text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-athletics-gold text-athletics-green font-bold uppercase tracking-widest text-xs rounded-full mb-6">
            As Featured On
          </div>
          <h2 className="font-serif font-black text-4xl md:text-6xl leading-tight">
            The <span className="text-athletics-gold">Press</span> Coverage
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PRESS_ITEMS.map((item) => (
            <div
              key={item.liveUrl}
              className="bg-white/5 border border-white/10 rounded-lg p-8 flex flex-col hover:border-athletics-gold/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-athletics-gold text-xs font-bold uppercase tracking-widest mb-4">
                <Newspaper className="w-4 h-4" />
                {item.outlet} &middot; {item.date}
              </div>
              <h3 className="font-serif font-bold text-2xl mb-4 leading-snug">{item.title}</h3>
              <p className="text-white/70 font-sans leading-relaxed mb-8 flex-1">{item.summary}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-athletics-gold text-athletics-green px-5 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read on MLB.com
                </a>
                <a
                  href={item.archiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-white/20 transition-colors"
                >
                  <Archive className="w-4 h-4" />
                  Archived Copy
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
