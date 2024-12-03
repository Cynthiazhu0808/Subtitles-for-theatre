import React, { useState } from 'react';

const Slide = ({ character, line, bgColor = 'bg-black', textColor = 'text-white' }) => (
  <div className={`flex items-center justify-center w-full h-screen ${bgColor} ${textColor} p-8`}>
    <div className="text-center max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{character}</h1>
      <p className="text-2xl italic">"{line}"</p>
    </div>
  </div>
);

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { character: "CHEN BAILU", line: "Come on in! I say, why don't you come in? Come in. What are you afraid of?" },
    { character: "FANG DASHENG", line: "Nothing! There is nobody here, right?" },
    { character: "CHEN BAILU", line: "Who knows? Probably not." },
    { character: "FANG DASHENG", line: "Disgusting. Can't get away from people in this place." },
    { character: "CHEN BAILU", line: "So what if there were anyone here? You can't be shy of people when you live here." },
    { character: "FANG DASHENG", line: "So this is where you've been living all these years." },
    { character: "CHEN BAILU", line: "What? Is there anything wrong with it?" },
    { character: "FANG DASHENG", line: "Um---no, it's fine!" },
    { character: "CHEN BAILU", line: "Why don't you take your clothes off?" },
    { character: "FANG DASHENG", line: "Oh, um, my clothes? Oh, no, I haven't, haven't taken them off." },
    { character: "CHEN BAILU", line: "I know you haven't. I mean, why are you so polite that you won't even take your coat off without being asked?" },
    { character: "FANG DASHENG", line: "Um---Perhaps, it's because I'm not used to taking my coat off right after going inside... Is it a bit cold inside?" },
    { character: "CHEN BAILU", line: "Cold? It's very hot to me." },
    { character: "FANG DASHENG", line: "Perhaps the window isn't closed?" },
    { character: "CHEN BAILU", line: "No, it can't be. Look, it's shut tight. Look! Come and look!" },
    { character: "FANG DASHENG", line: "What?" },
    { character: "CHEN BAILU", line: "Look! Frost! There's frost!" },
    { character: "FANG DASHENG", line: "So it was frost! You're so..." },
    { character: "CHEN BAILU", line: "It's odd, having frost when it's already spring." },
    { character: "FANG DASHENG", line: "Yes, very odd." },
    { character: "CHEN BAILU", line: "I love frost! Remember how I loved it when I was a kid? It's so beautiful and lovely! Look, look at that, isn't that me?" },
    { character: "FANG DASHENG", line: "What?" },
    { character: "CHEN BAILU", line: "The frost on the window, this bit. No, this bit. Look, isn't that my eyes? This sticking out is a nose, and where it goes in there is a mouth, and this bit is my hair. Look at this, it's exactly me!" },
    { character: "FANG DASHENG", line: "Ur...I can't see that." },
    { character: "CHEN BAILU", line: "What? It's like me, it's like me! I said it's like me!" },
    { character: "FANG DASHENG", line: "Alright alright, it's like you." },
    { character: "CHEN BAILU", line: "So you also think it's like me. Hey! This bit is like you!" },
    { character: "FANG DASHENG", line: "Like me?" },
    { character: "CHEN BAILU", line: "Obviously." },
    { character: "FANG DASHENG", line: "Which part?" },
    { character: "CHEN BAILU", line: "Here! It's here!" },
    { character: "FANG DASHENG", line: "I, I still can't see that." },
    { character: "CHEN BAILU", line: "Oh, you're still as pigheaded as ever. You're impossible." },
    { character: "FANG DASHENG", line: "Am I? I've been watching you all night but just now was the first time you've been like you used to be." },
    { character: "CHEN BAILU", line: "What do you mean?" },
    { character: "FANG DASHENG", line: "You're still the little girl that you used to be." },
    { character: "CHEN BAILU", line: "You mean, before? Still the little girl that I used to be?" },
    { character: "FANG DASHENG", line: "Yes, what?" },
    { character: "CHEN BAILU", line: "Dasheng, was there really a time I was like that, a little girl?" },
    { character: "FANG DASHENG", line: "Only if you'd come with me, you could be as free as you ever were." },
    { character: "CHEN BAILU", line: "Humph, freedom?" },
    { character: "FANG DASHENG", line: "You-" },
    { character: "CHEN BAILU", line: "What are you looking at now?" },
    { character: "FANG DASHENG", line: "Nothing... This place you've got here, it's quite, quite nice." },
    { character: "CHEN BAILU", line: "Nice? Somewhere to live, that's all. Tired?" },
    { character: "FANG DASHENG", line: "No, I'm all right.-I sat all the time while you were dancing with those people." },
    { character: "CHEN BAILU", line: "Why didn't you dance?" },
    { character: "FANG DASHENG", line: "I don't dance, I've told you. Also I don't want to dance like I'm crazy." },
    { character: "CHEN BAILU", line: "Crazy? That's right! That's the sort of crazy life I have. There's a rooster crowing." },
    { character: "FANG DASHENG", line: "That's odd, hearing a rooster crow in a place like this." },
    { character: "CHEN BAILU", line: "There's a market nearby. Guess what time is it now." },
    { character: "FANG DASHENG", line: "Perhaps half past five. It's almost dawn. I was looking at my watch every five minutes at that dance floor." },
    { character: "CHEN BAILU", line: "Are you in that much of a hurry?" },
    { character: "FANG DASHENG", line: "You know I've been living in the country for a long time now; I get impatient in places like that." },
    { character: "CHEN BAILU", line: "How about now?" },
    { character: "FANG DASHENG", line: "I'm more at ease now, of course. I thought that you've got no one here, and I could have a word with you." },
    { character: "CHEN BAILU", line: "Yes, but it's almost morning. Why aren't you sitting down?" },
    { character: "FANG DASHENG", line: "You - you haven't sat down yet." },
    { character: "CHEN BAILU", line: "You're such a nerd. Friends who come to my place don't wait for me to let them sit down. Now sit down. I'm thirsty, so I hope you'll excuse me for a moment for a sip of water. Cigarette?" },
    { character: "FANG DASHENG", line: "I told you I don't smoke." },
    { character: "CHEN BAILU", line: "Poor you! You are a paragon of virtue." },
    { character: "FANG DASHENG", line: "I never expected, Zhujun, that you'd change-" },
    { character: "CHEN BAILU", line: "Wait a minute, what did you just call me?" },
    { character: "FANG DASHENG", line: "Your name, you don't like it or something?" },
    { character: "CHEN BAILU", line: "Zhujun, Zhujun, it seems years since anyone called me that. Dasheng, call me that again." },
    { character: "FANG DASHENG", line: "Zhujun." },
    { character: "CHEN BAILU", line: "How bittersweet. Call me that once again." },
    { character: "FANG DASHENG", line: "Oh Zhujun, you have no idea how I-- Is there really no one here?" },
    { character: "CHEN BAILU", line: "No, of course not." },
    { character: "FANG DASHENG", line: "When I see what you're like now, I- if only you know my heart--" },
    { character: "THE VISITOR", line: "Sh!" },
    { character: "CHEN BAILU", line: "Georgy!" },
    { character: "FANG DASHENG", line: "Sh! What did you say? What was that, your heart? Who is this, Bailu?" },
    { character: "FANG DASHENG", line: "Zhujun? Who is he? Who's this man?" },
    { character: "GEORGY", line: "Zhujun? You're mistaken. Her name is Bailu. She's the queen here, and she's my, uh, the one I admire the most---" },
    { character: "CHEN BAILU", line: "You're drunk!" },
    { character: "GEORGY", line: "Me? I'm not drunk! It's you who're drunk! And you! Just look at you, all drunk and confused, with your eyes staring. Pah! I can't stand it." },
    { character: "CHEN BAILU", line: "What are you doing here?" },
    { character: "FANG DASHENG", line: "Yeah, what are you doing here?" },
    { character: "GEORGY", line: "I---uh---I was tired, I want to go to sleep. But wait, you're both here, too!" },
    { character: "CHEN BAILU", line: "This is where I live, of course I'm here!" },
    { character: "GEORGY", line: "Where you live?" },
    { character: "CHEN BAILU", line: "And what were you doing in my bedroom?" },
    { character: "GEORGY", line: "What? I came out of your bedroom? No, I didn't... didn't. Let me just think..." },
    { character: "CHEN BAILU", line: "Think, he said!" },
    { character: "GEORGY", line: "Wait a minute. Wait. Don't rush me. Now let me work things out slowly. So I drank, and I turned, and after turning, I drank again, and I turned, and turned, and turned, and turned, and then -- then? Oh, and then I got on the elevator, - oh, that's right, that's right, I entered this room... No, no, I went inside. And then I took off my clothes and flopped down on the bed. And then I just lay there. And then I felt sick, and --ugh!-- That's right, that's what happened. Well, of course, I'm now out here!" },
    { character: "CHEN BAILU", line: "Georgy, you're out of your mind tonight!" },
    { character: "GEORGY", line: "Sh! Hear me out, rest assured, I'm not out of my mind. First I fell asleep on your bed, and then because I drank a little bit too much, I seemed to have-- Oh damn, I feel sick again. Pardon me, mademoiselle, excuse me, miss! Oh sir, excuse me. Pardon, Monsieur. Goodbye. Good night! Good night! My lady and gentleman! Oh good-bye, au revoir, et monsieur, I---I---I Shall---I Shall ---" },
    { character: "FANG DASHENG", line: "Who was that?" },
    { character: "CHEN BAILU", line: "One of our choicer local products, don't you think he's quite fun?" },
    { character: "FANG DASHENG", line: "Fun? That was a maniac! I don't understand why you hang out with someone like this? Who is he? How did he grow so close to you?" },
    { character: "CHEN BAILU", line: "So you want to know? He is one of our choicer local products, a foreign student, he said he's a PH.D. or an M.A. or something. His English name is George. Abroad his name is George Zhang, here it's Zhang George. Since he's been back he's apparently had several administrative posts, and he's got a few bucks in his pocket." },
    { character: "FANG DASHENG", line: "But why do you know such a thing? Can't you see that it's a nasty piece of rubbish?" },
    { character: "CHEN BAILU", line: "Haven't I just told you? He's got money." },
    { character: "FANG DASHENG", line: "You mean, just because he's got money you..." },
    { character: "CHEN BAILU", line: "If he's got money of course he can get close to me. When I was at the dance-hall he was after me for a while." },
    { character: "FANG DASHENG", line: "No wonder he behaved like that to you." },
    { character: "CHEN BAILU", line: "You're a real countryman, you're so serious about everything. Wait till you've been here for some time and you'll know living is all about. Everyone's like that. Don't be so pretentious. Now that there's no one here, let's get back to what you wanted to say earlier?" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <Slide {...slides[currentSlide]} />
      <button
        className="absolute top-1/2 left-4 bg-white text-black p-2 rounded"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 right-4 bg-white text-black p-2 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Slideshow;
