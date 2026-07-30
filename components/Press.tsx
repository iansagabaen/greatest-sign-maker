import React from 'react';
import { SectionId } from '../types';
import { Newspaper, ExternalLink, Archive } from 'lucide-react';

interface PressItem {
  title: string;
  outlet?: string;
  byline?: string;
  date: string;
  paragraphs: React.ReactNode[];
  liveUrl?: string;
  archiveUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  secondImageUrl?: string;
  secondImageAlt?: string;
  secondImageCaption?: string;
}

const PRESS_ITEMS: PressItem[] = [
  {
    title: "Ian Sagabaen Has to Be Greatest Sign-Maker in MLB History",
    outlet: 'MLB.com — Cut4',
    byline: 'Staff',
    date: 'April 10, 2012',
    paragraphs: [
      `This is the post that started everything. Posted at 1:32 AM on April 10, 2012, it ran under the headline "Ian Sagabaen has to be greatest sign-maker in MLB history" and featured three of my early signs, including the Brick Tamland "LET'S GO OAKLAND" poster (the caption on that one: "Who knew Brick Tamland was such a big A's fan?"), alongside a baseball-perspective sign and a "CACTUS LEAGUE WORLD CHAMPS 2012" sign from spring training.`,
      `I hadn't planned for it to go anywhere beyond a few laughs at the ballpark. But the post picked up real traction for a small blog item — 10 tweets, 15 +1's, and 155 Facebook likes, plus 22 comments, enough that it briefly landed on MLB.com's homepage. Friends and fellow fans flooded the comments to congratulate me. I posted my own reply in the thread, which is still the best summary of how it felt at the time: "Yay, I made the blog! Thanks for the opportunity!"`,
      `I bought the greatestsignmaker.com domain that same night. Everything that followed — the studio piece, the cheer cards, the years of gameday signs — traces back to this one post.`,
    ],
    imageUrl: '/images/original-mlb-post-2012.jpg',
    imageAlt: "Screenshot of the original April 10, 2012 MLB.com Cut4 post, 'Ian Sagabaen has to be greatest sign-maker in MLB history'",
  },
  {
    title: "Giving Sean Doolittle His Own Pen Pal",
    date: "Spring Training 2013",
    paragraphs: [
      `Not every milestone here came from a blog post — this one's just a good story on its own. The "Pen Pals" bullpen collage (in the Gallery above) got signed by Ryan Cook and handed around the bullpen by Grant Balfour, but it didn't stop there. I turned the design into a run of buttons and brought them to spring training in Arizona that year.`,
      `I gave a few to Sean Doolittle in person, which is the photo above — no article, no byline, just a nice moment of a poster actually reaching the guys it was about.`,
    ],
    imageUrl: '/images/doolittle-pen-pals-buttons.jpg',
    imageAlt: "Ian with A's reliever Sean Doolittle at spring training, holding up a 'Pen Pals' button made from the poster",
  },
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
      <>
        This one has a more specific, funnier hook. Earlier in the 2014 season, Josh Reddick had switched his walk-up music to Wham!'s{' '}
        <a
          href="https://www.youtube.com/watch?v=izGwDsrQ1eQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-athletics-gold underline hover:text-white transition-colors"
        >
          "Careless Whisper"
        </a>{' '}
        — right as the song was having an odd cultural moment thanks to a viral video of a shirtless prankster playing it on saxophone in public. Cut4's piece sets that scene first: every time Reddick came to the plate at the Coliseum, the right-field bleachers would rise up and mime playing air-saxophone along with the PA.
      </>,
      `That's where I came in. The A's organization brought me in directly — the piece calls me a "Cut4 friend" at that point, which tells you Cut4 already considered me a recurring character in their coverage, not a one-off. Together with the team, I designed an official "Careless Whisper" cheer card, handed out to fans at the Coliseum on Memorial Day 2014.`,
      `Cut4 tracked me down for comment while I was on vacation in Alaska, which the piece treats as a small running joke. In my own words from the piece, the concept came together fast: I'd been in the right-field bleachers the night Reddick debuted the song, and once the #CarelessWhisper moment took off among A's fans, I sketched a few directions before landing on the final image — dramatic clouds in the background, a composite portrait blending Reddick's face with George Michael's, and the saxophone itself as the central icon.`,
      `The piece also captures the practical reasoning behind making it a printed card rather than a novelty prop: I referenced my friend Omar and his interactive Coco Crisp "Afro sign" as prior inspiration, then explained that once fans were already miming invisible saxophones, an inflatable toy sax was the obvious next step — except a printed card accomplished the same bit with less inflating and was much easier to actually carry into a stadium. Written by Mike Bertha, the piece treats this less as a profile and more as a fun sidebar on a specific, weird moment of A's fan culture — with me as the person who gave that moment a physical object.`,
    ],
    liveUrl: 'https://www.mlb.com/cut4/ill-never-run-on-reddick-again-as-give-out-careless-whisper-cheer-cards/c-77017428',
    archiveUrl: 'https://web.archive.org/web/20260708050813/https://www.mlb.com/cut4/ill-never-run-on-reddick-again-as-give-out-careless-whisper-cheer-cards/c-77017428',
    imageUrl: '/images/careless-whisper-cheer-card.jpg',
    imageAlt: "The 'Careless Whisper' Josh Reddick cheer card given out at the Coliseum, Memorial Day 2014",
    secondImageUrl: '/images/reddick-tv-broadcast.jpg',
    secondImageAlt: "Live MLB broadcast screenshot showing Ian holding up the 'Careless Whisper' cheer card in the bleachers as fans wave A's flags",
    secondImageCaption: "Proof of impact: caught on the live broadcast holding the actual card in the bleachers.",
  },
  {
    title: '"Ian (the Greatest Sign Maker) Saberhagen!!" — 50th Anniversary STM Stories',
    outlet: "Oakland Athletics — Season Ticket Member Newsletter",
    byline: "Oakland Athletics Front Office",
    date: "circa 2017–18 (A's 50th Anniversary season in Oakland)",
    paragraphs: [
      `This one's a step up from blog coverage — an official feature from the A's front office themselves, part of a recurring "50th Anniversary STM Stories" segment celebrating the club's 50th season in Oakland by spotlighting Season Ticket Members. Getting picked for a segment like that meant the organization itself, not just a corner of the internet, had decided my sign-making was part of the fan story worth telling.`,
      `And they misspelled my last name while doing it — "Ian (the Greatest Sign Maker) Saberhagen," highlighted right there in the original. I'll be honest, I loved it. "Saberhagen" happens to belong to a real Hall of Fame-caliber pitcher, Bret Saberhagen, so getting knighted with a Cy Young winner's surname by accident felt like a bonus, not a mistake.`,
      `The feature ran a Q&A alongside a photo of me on the field holding a "CAN YOU HANDLE THIS?" Hall of Fame Race picket sign during the 8th-inning stretch — which I named as my favorite A's memory when they asked. I also talked about what actually keeps me in the season ticket program: the right-field bleachers as their own community (I still bring up the spontaneous "I believe in Stephen Vogt!" chant as proof fans build these moments themselves), and the on-field perks that come with membership — meeting players, playing catch on the grass after the game, and best of all, taking batting practice at the Coliseum.`,
    ],
    imageUrl: "/images/as-newsletter-feature-2018.jpg",
    imageAlt: "Screenshot of the Oakland Athletics '50th Anniversary STM Stories' newsletter segment featuring Ian, with his last name misspelled 'Saberhagen,' alongside a photo of him holding a Hall of Fame Race picket sign on the field",
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
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12"
            >
              <div className="flex items-center gap-2 text-athletics-gold text-xs font-bold uppercase tracking-widest mb-4">
                <Newspaper className="w-4 h-4" />
                {[item.outlet, item.byline, item.date].filter(Boolean).join(' · ')}
              </div>
              <h3 className="font-serif font-bold text-3xl md:text-4xl mb-6 leading-snug">{item.title}</h3>

              {item.imageUrl && (
                <div className="mb-8 rounded-lg overflow-hidden border border-white/10 shadow-xl">
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt || item.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {item.secondImageUrl && (
                <div className="mb-8 rounded-lg overflow-hidden border border-white/10 shadow-xl">
                  <img
                    src={item.secondImageUrl}
                    alt={item.secondImageAlt || item.title}
                    className="w-full h-auto object-cover"
                  />
                  {item.secondImageCaption && (
                    <p className="text-xs font-mono uppercase tracking-widest text-white/50 px-4 py-3 bg-black/20">
                      {item.secondImageCaption}
                    </p>
                  )}
                </div>
              )}

              <div className="text-white/70 font-sans leading-loose space-y-5 mb-10">
                {item.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {(item.liveUrl || item.archiveUrl) && (
                <div className="flex flex-wrap gap-4">
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-athletics-gold text-athletics-green px-5 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Read on MLB.com
                    </a>
                  )}
                  {item.archiveUrl && (
                    <a
                      href={item.archiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-white/20 transition-colors"
                    >
                      <Archive className="w-4 h-4" />
                      Archived Copy
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
