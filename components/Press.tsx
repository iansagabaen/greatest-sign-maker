import React from 'react';
import { SectionId } from '../types';
import { Newspaper, ExternalLink, Archive } from 'lucide-react';

interface PressImage {
  url: string;
  alt: string;
  caption?: string;
  linkUrl?: string;
}

interface PressItem {
  title: string;
  outlet?: string;
  byline?: string;
  date: string;
  paragraphs: React.ReactNode[];
  liveUrl?: string;
  liveUrlLabel?: string;
  archiveUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  secondImageUrl?: string;
  secondImageAlt?: string;
  secondImageCaption?: string;
  images?: PressImage[];
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
      `That's where I came in — with my own full-sized version of the sign, the one in the photo below. The A's front office saw it and asked my permission to shrink it down into a giveaway card; the piece calls me a "Cut4 friend" at that point, which tells you Cut4 already considered me a recurring character in their coverage, not a one-off. Together with the team, that sign became an official "Careless Whisper" cheer card, handed out to 5,000 fans at the Coliseum on Memorial Day 2014.`,
      `Cut4 tracked me down for comment while I was on vacation in Alaska, which the piece treats as a small running joke. In my own words from the piece, the concept came together fast: I'd been in the right-field bleachers the night Reddick debuted the song, and once the #CarelessWhisper moment took off among A's fans, I sketched a few directions before landing on the final image — dramatic clouds in the background, a composite portrait blending Reddick's face with George Michael's, and the saxophone itself as the central icon.`,
      `The piece also captures the practical reasoning behind making it a printed card rather than a novelty prop: I referenced my friend Omar and his interactive Coco Crisp "Afro sign" as prior inspiration, then explained that once fans were already miming invisible saxophones, an inflatable toy sax was the obvious next step — except a printed card accomplished the same bit with less inflating and was much easier to actually carry into a stadium. Written by Mike Bertha, the piece treats this less as a profile and more as a fun sidebar on a specific, weird moment of A's fan culture — with me as the person who gave that moment a physical object.`,
    ],
    liveUrl: 'https://www.mlb.com/cut4/ill-never-run-on-reddick-again-as-give-out-careless-whisper-cheer-cards/c-77017428',
    archiveUrl: 'https://web.archive.org/web/20260708050813/https://www.mlb.com/cut4/ill-never-run-on-reddick-again-as-give-out-careless-whisper-cheer-cards/c-77017428',
    imageUrl: '/images/careless-whisper-cheer-card.jpg',
    imageAlt: "The 'Careless Whisper' Josh Reddick cheer card given out at the Coliseum, Memorial Day 2014",
    secondImageUrl: '/images/reddick-tv-broadcast.jpg',
    secondImageAlt: "Live MLB broadcast screenshot showing Ian holding up his original full-sized 'Careless Whisper' sign in the bleachers as fans wave A's flags",
    secondImageCaption: "This is the original full-sized sign, not the mini cheer card — the one that caught the A's front office's eye in the first place.",
  },
  {
    title: "Batting Practice at the Coliseum",
    outlet: 'Medium',
    date: "July 22, 2017",
    paragraphs: [
      `In July 2017, the A's front office invited me out for something better than a press mention — an actual invitation to take batting practice on Rickey Henderson Field. It started with a voicemail and a follow-up email from Dave Kaval's office, part of a broader push by the team to make season ticket members feel like more than seat-fillers. My wife and I signed liability waiver forms at the gate, walked in without going through security for once, and even got to bring in a can of Coke — a felony on any normal gameday.`,
      `I brought two signs along: Brick Tamland's "Let's Go Oakland" (the one that started this whole thing back in 2012) and a newer GOAT sign honoring Rickey Henderson. Batting order that day put me at #59 of 65 — plenty of time to shag balls in the outfield and take photos before my turn. An A's staff photographer named Nicola caught the actual swings; I introduced myself to the on-field announcer with my usual line ("Ian, rhymes with lion"), faced about fifteen pitches, fouled off a few, and made contact with the rest. No home run, no phenom contract — but I wrote the whole thing up on Medium that week, and it's still one of my favorite days at the Coliseum, sign or no sign.`,
    ],
    liveUrl: 'https://medium.com/greatest-sign-maker/batting-practice-at-the-coliseum-acd11939c428',
    liveUrlLabel: 'Read on Medium',
    imageUrl: '/images/batting-practice-coliseum-2017.jpg',
    imageAlt: "Ian taking batting practice on Rickey Henderson Field at the Oakland Coliseum, July 22, 2017",
    secondImageUrl: '/images/batting-practice-dugout-brick-tamland-2017.jpg',
    secondImageAlt: "Ian sitting in the A's dugout with his Brick Tamland 'Let's Go Oakland' sign during the batting practice event",
    secondImageCaption: "Stashing gear in the dugout with my buddy Brick Tamland before my turn in the batting order.",
  },
  {
    title: '"Ian (the Greatest Sign Maker) Saberhagen!!" — 50th Anniversary STM Stories',
    outlet: "Oakland Athletics — Season Ticket Member Newsletter",
    byline: "Oakland Athletics Front Office",
    date: "March 28, 2018",
    paragraphs: [
      `This one's a step up from blog coverage — an official feature from the A's front office themselves, part of a recurring "50th Anniversary STM Stories" segment celebrating the club's 50th season in Oakland by spotlighting Season Ticket Members. Getting picked for a segment like that meant the organization itself, not just a corner of the internet, had decided my sign-making was part of the fan story worth telling.`,
      `And they misspelled my last name while doing it — "Ian (the Greatest Sign Maker) Saberhagen," highlighted right there in the original. I'll be honest, I loved it. "Saberhagen" happens to belong to a real Hall of Fame-caliber pitcher, Bret Saberhagen, so getting knighted with a Cy Young winner's surname by accident felt like a bonus, not a mistake.`,
      `The feature ran a Q&A alongside a photo of me on the field holding a "CAN YOU HANDLE THIS?" Hall of Fame Race picket sign during the 8th-inning stretch — which I named as my favorite A's memory when they asked. I also talked about what actually keeps me in the season ticket program: the right-field bleachers as their own community (I still bring up the spontaneous "I believe in Stephen Vogt!" chant as proof fans build these moments themselves — I'd uploaded a YouTube video of the bleachers doing that chant on July 3, 2014, and the A's organization actually reached out for permission to use the sound byte from it in a Stephen Vogt bobblehead giveaway; as a thank-you, they had the bobblehead autographed by Vogt himself and gave it to me), and the on-field perks that come with membership — meeting players, playing catch on the grass after the game, and best of all, taking batting practice at the Coliseum.`,
    ],
    imageUrl: "/images/as-newsletter-feature-2018.jpg",
    imageAlt: "Screenshot of the Oakland Athletics '50th Anniversary STM Stories' newsletter segment featuring Ian, with his last name misspelled 'Saberhagen,' alongside a photo of him holding a Hall of Fame Race picket sign on the field",
  },
  {
    title: "A's Fans Sell Out the Coliseum",
    outlet: 'MLB.com — Cut4',
    date: 'October 2, 2019',
    paragraphs: [
      `Weeks after the "Careless Whisper" piece — five years later, anyway — Cut4 caught actual footage of the fandom itself. A 30-second video titled "A's fans sell out the Coliseum" ran under the Cut4 tag, shot during the American League Wild Card Game against the Tampa Bay Rays on October 2, 2019. No interview, no sign close-up, just crowd noise and energy — but my wife and I are in it, roughly 17 seconds in, cheering along with the rest of a sold-out Coliseum. She posted about it on Instagram the next day: "Tough loss and our voices are both a little hoarse but we had a great time."`,
      `It capped off a stretch that season where I kept ending up on camera without trying to. A month earlier, on September 5, 2019, we finally got to sit in the Diamond Level seats behind home plate for the first time — and I caught myself in the corner of the actual TV broadcast at the exact moment of the game's final out, real score bug and all. Neither moment involved a sign. Just years of being a loud, visible fan finally catching up with the cameras on its own.`,
    ],
    liveUrl: 'https://www.mlb.com/athletics/video/a-s-fans-sell-out-the-coliseum',
    liveUrlLabel: 'Watch on MLB.com',
    imageUrl: '/images/mlb-cut4-fans-sell-out-coliseum-2019.jpg',
    imageAlt: "Video still from MLB.com Cut4's 'A's fans sell out the Coliseum,' AL Wild Card Game, October 2, 2019",
    images: [
      {
        url: '/images/coliseum-crowd-sign-oct2019.jpg',
        alt: "Ian and his wife cheering in the crowd at the AL Wild Card Game, holding a 'Let's Go Oakland' sign, October 3, 2019",
        caption: "Cindy (@cnaks25) on Instagram · Oct 3, 2019",
        linkUrl: 'https://www.instagram.com/p/B3K6MmjgWJYFnTypRTqkHCqpmH0Gd43z_Pc9hI0/',
      },
      {
        url: '/images/tv-broadcast-final-out-sept2019.jpg',
        alt: "Live TV broadcast screenshot showing Ian cheering in the corner of the screen at the moment of the game's final out, September 5, 2019",
        caption: "Ian on Instagram · Sept 5, 2019",
        linkUrl: 'https://www.instagram.com/p/B2BTy2iASxh/',
      },
    ],
  },
  {
    title: "Recognition on Twitter",
    date: "2014–2018",
    paragraphs: [
      `Not everything worth keeping came as a formal article. A few individual tweets over the years are just as good a marker of how far this whole thing traveled — proof that it wasn't just Cut4 and the team's own PR account being nice to me, but independent, unprompted recognition from people who had no reason to say anything at all.`,
      <>
        First, in May 2014, Vic Tafur — the San Francisco Chronicle's A's beat writer — quote-tweeted Cut4's "Careless Whisper" piece with{' '}
        <a
          href="https://x.com/VicTafur/status/471910804946579456"
          target="_blank"
          rel="noopener noreferrer"
          className="text-athletics-gold underline hover:text-white transition-colors"
        >
          a simple "nice job @Gr8estSignMaker"
        </a>
        , a real beat reporter vouching for the work in his own feed. A year later, the Athletics' own official account went further,{' '}
        <a
          href="https://x.com/Athletics/status/604156534201831424"
          target="_blank"
          rel="noopener noreferrer"
          className="text-athletics-gold underline hover:text-white transition-colors"
        >
          tweeting straight at me that I "really is the Greatest Sign Maker,"
        </a>{' '}
        with a four-photo collage as the "PROOF." And in March 2018, when the team's newsletter (above) misspelled my last name as "Saberhagen,"{' '}
        <a
          href="https://x.com/Gr8estSignMaker/status/979236140703039488"
          target="_blank"
          rel="noopener noreferrer"
          className="text-athletics-gold underline hover:text-white transition-colors"
        >
          I couldn't resist screenshotting my own reaction
        </a>{' '}
        — equal parts thank-you and correction, and the same tweet that pins down the newsletter's actual date.
      </>,
      `All three are captured here as real screenshots, not paraphrases — Twitter/X is exactly the kind of platform that could go down or lock me out one day, so these are worth having somewhere permanent.`,
    ],
    images: [
      {
        url: '/images/tweet-vic-tafur-2014.jpg',
        alt: 'Tweet from SF Chronicle A\'s beat writer Vic Tafur quote-tweeting the Cut4 "Careless Whisper" piece and writing "nice job @Gr8estSignMaker," May 29, 2014',
        caption: 'Vic Tafur (SF Chronicle) · May 29, 2014',
        linkUrl: 'https://x.com/VicTafur/status/471910804946579456',
      },
      {
        url: '/images/tweet-athletics-praise-2015.jpg',
        alt: 'Tweet from the official Athletics account reading ".@Gr8estSignMaker really is the Greatest Sign Maker. LOOK! PROOF!" with a four-photo collage, May 28, 2015',
        caption: '@Athletics · May 28, 2015',
        linkUrl: 'https://x.com/Athletics/status/604156534201831424',
      },
      {
        url: '/images/tweet-ians-newsletter-reaction-2018.jpg',
        alt: 'Ian\'s own tweet reacting to the A\'s newsletter feature, joking about the "Saberhagen" misspelling, March 28, 2018',
        caption: '@Gr8estSignMaker · March 28, 2018',
        linkUrl: 'https://x.com/Gr8estSignMaker/status/979236140703039488',
      },
    ],
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

              {item.images && (
                <div className={`mb-8 grid grid-cols-1 gap-4 ${item.images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'}`}>
                  {item.images.map((img, i) => (
                    <a
                      key={i}
                      href={img.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg overflow-hidden border border-white/10 shadow-xl hover:border-athletics-gold/60 transition-colors"
                    >
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-64 object-contain bg-black/30"
                      />
                      {img.caption && (
                        <p className="text-xs font-mono uppercase tracking-widest text-white/50 px-3 py-2 bg-black/20">
                          {img.caption}
                        </p>
                      )}
                    </a>
                  ))}
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
                      {item.liveUrlLabel || 'Read on MLB.com'}
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
