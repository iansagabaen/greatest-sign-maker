import React from 'react';
import { SectionId } from '../types';
import { Newspaper, ExternalLink, Archive } from 'lucide-react';

interface PressItem {
  title: string;
  outlet: string;
  byline: string;
  date: string;
  paragraphs: string[];
  liveUrl: string;
  archiveUrl: string;
}

const PRESS_ITEMS: PressItem[] = [
  {
    title: "Step Inside the Studio of Baseball's Greatest Sign Maker",
    outlet: 'MLB.com — Cut4',
    byline: 'Alex Espinoza',
    date: 'June 24, 2013',
    paragraphs: [
      `By mid-2013, Cut4 had already run my signs a couple of times, so this piece did something different — instead of just posting a photo from the latest game, they wanted to show how the signs actually got made. The piece frames it as a look "behind the scenes," tracing the workflow from my apartment in the South Bay: an idea forms, I search Google Images for reference material, build the concept in Photoshop, then make a run to a local print shop before the sign is ready for gameday. It's a small detail, but it mattered to the story — this wasn't poster-board-and-marker fandom, it was a design process.`,
      `The article leans on my own words to explain why I kept doing it: "Usually I get good reactions. Stuff like this is really fun." I also described the fanbase itself as part of the creative loop — I'd float ideas to fellow Oakland fans on Twitter (as @Gr8estSignMaker) before committing to a final concept, so the signs were as much crowd-sourced as they were solo design work.`,
      `The piece catalogs the scope of what I'd built by that point: roughly two dozen signs, with the Brick Tamland "Let's Go Oakland" (the Anchorman callback) singled out as the most popular. It also name-checks a few of the deeper-cut ones — the googly-eyed "Melvinsanity" tribute to manager Bob Melvin, a handful of Josh Reddick-themed signs, and a sign pairing Eric Sogard's glasses with Harry Potter. Written by MLB.com's Alex Espinoza, the framing throughout is that this had become a genuine sub-genre of fandom — signs built with actual design literacy, not improvised in the bleachers five minutes before first pitch.`,
    ],
    liveUrl: 'https://www.mlb.com/cut4/step-inside-the-studio-of-baseballs-greatest-sign-maker/c-50532316',
    archiveUrl: 'https://web.archive.org/web/20260708050446/https://www.mlb.com/cut4/step-inside-the-studio-of-baseballs-greatest-sign-maker/c-50532316',
  },
  {
    title: "'I'll Never Run on Reddick Again': A's Give Out 'Careless Whisper' Cheer Cards",
    outlet: 'MLB.com — Cut4',
    byline: 'Mike Bertha',
    date: 'May 27, 2014',
    paragraphs: [
      `This one has a more specific, funnier hook. Earlier in the 2014 season, Josh Reddick had switched his walk-up music to Wham!'s "Careless Whisper" — right as the song was having an odd cultural moment thanks to a viral video of a shirtless prankster playing it on saxophone in public. Cut4's piece sets that scene first: every time Reddick came to the plate at the Coliseum, the right-field bleachers would rise up and mime playing air-saxophone along with the PA.`,
      `That's where I came in. The A's organization brought me in directly — the piece calls me a "Cut4 friend" at that point, which tells you Cut4 already considered me a recurring character in their coverage, not a one-off. Together with the team, I designed an official "Careless Whisper" cheer card, handed out to fans at the Coliseum on Memorial Day 2014.`,
      `Cut4 tracked me down for comment while I was on vacation in Alaska, which the piece treats as a small running joke. In my own words from the piece, the concept came together fast: I'd been in the right-field bleachers the night Reddick debuted the song, and once the #CarelessWhisper moment took off among A's fans, I sketched a few directions before landing on the final image — dramatic clouds in the background, a composite portrait blending Reddick's face with George Michael's, and the saxophone itself as the central icon.`,
      `The piece also captures the practical reasoning behind making it a printed card rather than a novelty prop: I referenced my friend Omar and his interactive Coco Crisp "Afro sign" as prior inspiration, then explained that once fans were already miming invisible saxophones, an inflatable toy sax was the obvious next step — except a printed card accomplished the same bit with less inflating and was much easier to actually carry into a stadium. Written by Mike Bertha, the piece treats this less as a profile and more as a fun sidebar on a specific, weird moment of A's fan culture — with me as the person who gave that moment a physical object.`,
    ],
    liveUrl: 'https://www.mlb.com/cut4/ill-never-run-on-reddick-again-as-give-out-careless-whisper-cheer-cards/c-77017428',
    archiveUrl: 'https://web.archive.org/web/20260708050813/https://www.mlb.com/cut4/ill-never-run-on-reddick-again-as-give-out-careless-whisper-cheer-cards/c-77017428',
  },
];

const Press: React.FC = () => {
  return (
    <section id={SectionId.PRESS} className="py-24 bg-athletics-green text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-athletics-gold text-athletics-green font-bold uppercase tracking-widest text-xs rounded-full mb-6">
            As Featured On
          </div>
          <h2 className="font-serif font-black text-4xl md:text-6xl leading-tight">
            The <span className="text-athletics-gold">Press</span> Coverage
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {PRESS_ITEMS.map((item) => (
            <article
              key={item.liveUrl}
              className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12"
            >
              <div className="flex items-center gap-2 text-athletics-gold text-xs font-bold uppercase tracking-widest mb-4">
                <Newspaper className="w-4 h-4" />
                {item.outlet} &middot; {item.byline} &middot; {item.date}
              </div>
              <h3 className="font-serif font-bold text-3xl md:text-4xl mb-6 leading-snug">{item.title}</h3>
              <div className="text-white/70 font-sans leading-loose space-y-5 mb-10">
                {item.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
