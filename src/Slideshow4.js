import React, { useState , useEffect, useCallback} from 'react';
import './Slideshow.css'; // Optional: Create a separate CSS file for styles

// Slide Component
const Slide = ({ character, line, bgColor = 'bg-black', textColor = 'text-white' }) => (
  <div className={`flex items-center justify-center w-full h-screen ${bgColor} ${textColor} p-8`}>
    <div className="text-center max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{character}</h1>
      <p className="text-2xl italic">"{line}"</p>
    </div>
  </div>
);

// Slideshow Component
const Slideshow4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { character:"VOICES FROM THE NEXT ROOM", line: "Lulu! Lulu!"},

{ character: "GEORGY", line: "Lulu! Lulu!" },


{ character: "GEORGY", line: "No, no, I’ll be right back. See if I can't persuade her." },


{ character: "GEORGY", line: "Ah! My little Lulu! Si belle! Si charmantel et si mélancolique!" },

{ character: "GEORGY", line: "You are beautiful! You are beautiful this evening! Beautiful! Absolutely beautiful! You do know how to dress, so melancholically, so bewitchingly!" },
{ character: "GEORGY", line: "And you know how to wear perfume, it smells so — so delicate, yet so mysteriously distant!" },
{ character: "GEORGY", line: "Ah! The moment I smell the fragrance of your perfume —" },
{ character: "GEORGY", line: "ah non, the pure fragrance that emanates from your beautiful body, it takes me back to when I first went to Paris ..." },
{ character: "GEORGY", line: "Ah, those Paris nights! Paris at night! Mm! Exquise!" },

{ character: "CHEN BAILU", line: "You're drunk again, I suppose." },


{ character: "GEORGY", line: "Drunk? I feel absolutely on top of the world tonight! Did you see Miss Liu a short while ago?" },
{ character: "GEORGY", line: "She says she wants to marry me. She insists on marrying me, but I told her — I said: 'You? You marry me? You stand there and tell me you want to marry me? You?" },

{ character: "GEORGY", line: "The only person in this world who's worthy of George Zhang is Chen Bailu!' Why, Lulu, why don't you laugh?" },


{ character: "CHEN BAILU", line: "What is there to laugh at? Anything left in that bottle?" },


{ character: "GEORGY", line: "You want another drink?" },


{ character: "CHEN BAILU", line: "Yes." },

{ character: "GEORGY", line: "See how I serve you well? Everything you need is at hand. " },


{ character: "GU", line: "Where are your sleeping pills, Bailu? Oh! Doctor Zhang. So it was you two sneaking around in this room talking, was it?" },


{ character: "GEORGY", line: "Two? Then I'm probably drunk." },


{ character: "GU", line: "Why?" },


{ character: "GEORGY", line: "It's weird. Why did I just feel like I was alone in this room going crazy?" },


{ character: "GU", line: "Please, I don’t understand the way you doctors talk. Come on, Bailu, where are your sleeping pills?" },


{ character: "PAL-LU", line: "In the little cupboard beside my bed." },


{ character: "GEORGY", line: "What's the trouble, then, Mrs. Gu?" },


{ character: "GU", line: "My heart aches. I'm suffering." },


{ character: "GEORGY", line: "What's the cause of it this time?" },


{ character: "GU", line: "That unfeeling creature has been upsetting me again. I can’t sleep for three nights in a row once he pisses me off." },
{ character: "GU", line: "I really must take some sleeping pills at home. But that's enough about my troubles: you two carry on with your conversation." },


{ character: "GEORGY", line: "Here, don't go. Come and sit with us for a while and we’ll talk." },


{ character: "GU", line: "No, no, no. My heart aches so bad. I must go and take some of Doctor Zhuang's medicines." },


{ character: "GEORGY", line: "Yes, but look, you can take it in here just the same, can't you?" },


{ character: "GU", line: "Just listen to my heart, though. It is pounding away again. Ooh! I must go and lie down for a while." },


{ character: "MISS LI SHIQINGU", line: "Georgy—" },


{ character: "GU", line: "Miss Liu, you haven't left yet, are you still playing mahjong? OK, here comes Miss Liu, you three have fun." },


{ character: "MISS LI SHIQINGU", line: "Georgy!" },


{ character: "GEORGY", line: "Shh!" },


{ character: "MISS LI SHIQINGU", line: "Georgy!" },


{ character: "MISS LI SHIQINGU", line: "I’m not gonna come in. I’m just not gonna come in." },


{ character: "MISS LI SHIQINGU", line: "Are you coming, or aren't you?" },


{ character: "GEORGY", line: "I'm coming! I'm coming! Right away! " },


{ character: "CHEN BAILU", line: "Who is it?" },


{ character: "WANG FUSHENG", line: "It's me, Miss." },


{ character: "CHEN BAILU", line: "Come in." },


{ character: "WANG FUSHENG", line: "Morning, Miss." },


{ character: "CHEN BAILU", line: "What is it?" },


{ character: "WANG FUSHENG", line: "Oh, didn't you want me?" },


{ character: "CHEN BAILU", line: "No." },


{ character: "WANG FUSHENG", line: "Oh, all right, very good … You've been drinking a lot tonight, Miss." },


{ character: "CHEN BAILU", line: "I know" },


{ character: "WANG FUSHENG", line: "Isn't Mr. Fang around?" },


{ character: "CHEN BAILU", line: "He isn't back yet. Why, do you want to see him?" },


{ character: "WANG FUSHENG", line: "Nothing important. Another telegram came a short while ago. It's for Mr. Fang." },


{ character: "CHEN BAILU", line: "Where is it?" },


{ character: "WANG FUSHENG", line: "Do you want it?" },


{ character: "CHEN BAILU", line: "I'll give it to him myself later on." },

{ character: "CHEN BAILU", line: "It's early yet, isn't it?" },


{ character: "WANG FUSHENG", line: "Early! It's already after four." },


{ character: "CHEN BAILU", line: "Haven't those people gone yet?" },


{ character: "WANG FUSHENG", line: "They're all eating and drinking and they've got plenty to keep them amused here," },
{ character: "WANG FUSHENG", line: "so I can't imagine them being ready to go." },


{ character: "CHEN BAILU", line: "So my place is an amusement for them." },


{ character: "WANG FUSHENG", line: "What about that?" },


{ character: "CHEN BAILU", line: "And what will happen when they've had all the amusement they want?" },


{ character: "WANG FUSHENG", line: "Well…well…they'll go home, of course." },
{ character: "WANG FUSHENG", line: "They've all got their own home — can't stay in a hotel all your life, can you?" },


{ character: "CHEN BAILU", line: "Why haven’t they left, then?" },


{ character: "WANG FUSHENG", line: "Miss, you were saying…well…well…that’s because they haven’t had all the amusement they want, of course." },


{ character: "CHEN BAILU", line: "Then why haven’t they had all the amusement they want? " },


{ character: "WANG FUSHENG", line: "Well…then…they just haven’t. They haven’t." },


{ character: "CHEN BAILU", line: "I’m asking you, why haven’t they had all the amusement! Why don’t they have enough?" },
{ character: "CHEN BAILU", line: "Why don’t they have enough and leave, and go back to their own home? Get out! Get out! Get out! Why don’t they —" },


{ character: "WANG FUSHENG", line: "Miss." },


{ character: "CHEN BAILU", line: "What?" },


{ character: "WANG FUSHENG", line: "You’re probably really drunk." },


{ character: "CHEN BAILU", line: "No, no. I've probably had all the amusement I want." },
{ character: "CHEN BAILU", line: "Yes, I've had enough of it. I'd like to go home myself, back to my old home." },


{ character: "WANG FUSHENG", line: "But Miss, you mean you've got a home here?" },


{ character: "CHEN BAILU", line: "Eh, you’re right. Everyone’s got their own home. Can’t stay in a hotel all your life, can you?" },


{ character: "WANG FUSHENG", line: "Are you serious about this, Miss?" },


{ character: "CHEN BAILU", line: "Yes. I’ve often thought so." },


{ character: "WANG FUSHENG", line: "Look, Miss, if you are thinking of going back home, what about all your unpaid debts here? You'll have to —" },


{ character: "CHEN BAILU", line: "Yes, I know I'm deep in debt. But haven't I paid them off over the years?" },


{ character: "WANG FUSHENG", line: "Now look, Miss, you've just paid up eight hundred and now you're another two thousand in debt." },
{ character: "WANG FUSHENG", line: "If you go on throwing money around like that, you'll never be out of debt to the end of your days." },
{ character: "WANG FUSHENG", line: "They were here again this afternoon. Now just have a look at these bills. Altogether they come to —" },


{ character: "CHEN BAILU", line: "No, don't bother to get them out. I don't want to see them. I don't want to see them." },


{ character: "WANG FUSHENG", line: "But they say you must pay up by tomorrow afternoon. I did my best to talk them around —" },


{ character: "CHEN BAILU", line: "Who asked you to try and talk them round? Every grievance has its perpetrator and every debt its debtor." },

{ character: "CHEN BAILU", line: "I didn't go and plead with them myself, so why must you plead with them?" },


{ character: "WANG FUSHENG", line: "But, Miss —" },


{ character: "CHEN BAILU", line: "I know, I know. No need to say it again. Money! Money! Money! Why must you keep on pushing me with it?" },


{ character: "WANG FUSHENG", line: "Hello. ... Who's that? Oh ... this is Suite 52, Miss Chen's." },


{ character: "CHEN BAILU", line: "Who is it?" },


{ character: "WANG FUSHENG", line: "Mrs. Li. Oh, I see, yes. Mr. Li's not here. He was here this afternoon, but he went a good while ago ..." },
{ character: "WANG FUSHENG", line: "Yes... yes... Mr. Li rang Mr. Pan here a short while ago and said would he be so kind as to wait for him as he'd be over again soon..." },
{ character: "WANG FUSHENG", line: "Well, why not give us another ring later on? Goodbye." },


{ character: "CHEN BAILU", line: "What was all that about?" },


{ character: "WANG FUSHENG", line: "Mr. Li's son's seriously ill and Mrs. Li wants him back home quickly." },


{ character: "CHEN BAILU", line: "I see. All right, that'll be all, then." },


{ character: "PAN YUETING", line: "Lulu, Lulu, your visitors haven't gone, have they?" },


{ character: "CHEN BAILU", line: "No." },


{ character: "PAN YUETING", line: "Excellent. Come on, let's all have a little fun. Let's have a good time today." },


{ character: "CHEN BAILU", line: "What for?" },


{ character: "PAN YUETING", line: "I think a real stroke of good luck has finally come my way. I've got some good news." },


{ character: "CHEN BAILU", line: "Good news, you say? Why, has Mr. Jin agreed to give you another week to return his deposit?" },


{ character: "PAN YUETING", line: "No, nothing like that; Mr. Jin agreed to that a couple of days ago." },
{ character: "PAN YUETING", line: "Now let me tell you: government bonds are going to rise further after all. Right up. Higher than they've ever been." },
{ character: "PAN YUETING", line: "And that's going to put me on my feet again! You know I suddenly heard this morning that the news of a rise was only a rumor put about by Mr. Jin as a trick." },
{ character: "PAN YUETING", line: "They said he was putting a rumor around that he was buying in quite a lot himself" },
{ character: "PAN YUETING", line: "so that everybody else would buy, whereas he was getting rid of his holdings and he wanted to make himself a good selling market." },
{ character: "PAN YUETING", line: "When I heard that I was in an absolute panic! I thought I'd fallen into his trap and" },
{ character: "PAN YUETING", line: "that the value of my holdings was going to slump right down so that every penny" },
{ character: "PAN YUETING", line: "I possessed and a lot more would be called for on settlement day, thanks to him." },
{ character: "PAN YUETING", line: "You can well imagine why I was panicking at the thought of going bankrupt," },
{ character: "PAN YUETING", line: "with all my long string of businesses and all my large family, especially at my age." },
{ character: "PAN YUETING", line: "I tell you, Lulu, I even had a revolver ready, I —" },


{ character: "CHEN BAILU", line: "Oh, you poor thing! Poor old daddy." },


{ character: "PAN YUETING", line: "You really shouldn’t call me old daddy now. I am not old at all." },
{ character: "PAN YUETING", line: "I was twenty years younger when I heard the news. I tell you, one must have money." },
{ character: "PAN YUETING", line: "Without money, life's not worth living. Being poor is a crime, and it’s better to die." },
{ character: "PAN YUETING", line: "But now, Lulu, I am rich. In a couple of days, I'll have piles of money," },
{ character: "PAN YUETING", line: "and a few days later I may well have more, much more." },
{ character: "PAN YUETING", line: "And from now onwards I'm going to do something for charities," },
{ character: "PAN YUETING", line: "get some good deeds against my name in The Book, make up for what I haven't done in the past —" },


{ character: "CHEN BAILU", line: "Yet you let Mr. Jin have the Shrimp back without a qualm. That's something that's going to take a lot of making up for." },


{ character: "PAN YUETING", line: "Oh, what's happened to the Shrimp? You mean to say you haven't got her back yet?" },


{ character: "CHEN BAILU", line: "Got her back? She's disappeared as completely as if she'd jumped into the sea. I've hunted for her, and so has Dasheng, but there's not a trace of her." },


{ character: "PAN YUETING", line: "Don't worry. I'm rich now, plenty of money. I can get the Shrimp back for you alive and kicking," },
{ character: "PAN YUETING", line: "just like that. That'll cheer you up." },


{ character: "CHEN BAILU", line: "All right, then. Oh, by the way, did you know that Li Shiqing is coming to see you here soon?" },


{ character: "PAN YUETING", line: "Yes. He tells me he's got good news for me. He's a stupid oaf, though," },
{ character: "PAN YUETING", line: "and thinks he can treat me as he likes and get away with it." },
{ character: "PAN YUETING", line: "I'm going to show him a thing or two this time, though." },


{ character: "CHEN BAILU", line: "Why, what do you mean?" },


{ character: "GU", line: "Lulu! Lulu! — Why, Mr. Pan, where have you been all night? I don't know, abandoning us here, ignoring us, you men really are the limit!" },
{ character: "GU", line: "— Oh, yes, I know what I was going to tell you, Mr. Pan:" },
{ character: "GU", line: "you should see the way Hu Si's gone all serious since he's been working for the film company." },
{ character: "GU", line: "You were right, you know. One can always trust you to suggest the right thing and recommend the right person for a position, Mr. Pan." },
{ character: "GU", line: "Lulu, how do I look now? Not too ghastly, do I?" },


{ character: "PAN YUETING", line: "If you'll be here to keep Mrs. Gu company, Lulu, I'll go to the other room to see your visitors." },


{ character: "GU", line: "Are you leaving us, Mr. Pan? Bailu, I can’t sleep. Lying in bed only makes me sadder." },

{ character: "CHEN BAILU", line: "What’s wrong?" },


{ character: "GU", line: "Do you think he ever will come? The heartless creature told me to wait for him here at your place." },
{ character: "GU", line: "He was going to teach me some opera — Staying the Night and Killing Hsichiao, it was." },
{ character: "GU", line: "It's nearly morning and there's not a sign of him yet. Oh, I really — I — I really think I should call Fusheng and ask him —" },


{ character: "CHEN BAILU", line: "Fusheng! Fusheng!" },


{ character: "CHEN BAILU", line: "Do you know where Mr. Hu Si has gone?" },


{ character: "WANG FUSHENG", line: "No, I don't." },


{ character: "GU", line: "He'll never admit to knowing anything." },


{ character: "WANG FUSHENG", line: "I ... I really don't know. Though I seem to remember him saying that first he'd have to go and —" },


{ character: "GU", line: "Change his clothes!" },


{ character: "WANG FUSHENG", line: "Change his clothes." },


{ character: "GU", line: "Change his clothes! Change his clothes! That’s all you can say." },


{ character: "CHEN BAILU", line: "What? Do you know what Hu Si has been up to?" },


{ character: "WANG FUSHENG", line: "Mrs. Gu's asked me four or five times already, so no wonder Madam is getting tired of hearing it over and over again." },
{ character: "WANG FUSHENG", line: "After all, Madam does tend to get anxious about things, and for another thing —" },


{ character: "GU", line: "Fusheng, I don't like this nonsense of “Madam”. I don't want to be called that. I don't like it." },


{ character: "WANG FUSHENG", line: "Yes, Mrs. Gu." },


{ character: "GU", line: "Go! Go! Go! I'm pissed off at you! Who told you to come in here and make me sicker than I already am?" },


{ character: "WANG FUSHENG", line: "Yes, yes." },


{ character: "GU", line: "There, now my heart's beginning to ache again. And on top of that Hu Si's taking his new job less and less seriously," },
{ character: "GU", line: "even though he's only been with the film company for two days." },
{ character: "GU", line: "I wish I were dead! Lulu! I'm taking all of your sleeping pills." },


{ character: "CHEN BAILU", line: "Why, you're not going to start taking sleeping pills, are you?" },


{ character: "GU", line: "Yes, I must take some." },


{ character: "CHEN BAILU", line: "I don't think you really need to. You'd better let me have them back." },


{ character: "GU", line: "No, I absolutely must take some. If I can have a good sleep, all my anger will be gone." },
{ character: "GU", line: "Dr. Ledoux says that an hour's good sleep is as good as having two extra bowls of rice." },
{ character: "GU", line: "I am having two extra bowls of rice and piss him off." },


{ character: "CHEN BAILU", line: "Oh, I see. But I'd better warn you that these sleeping pills are very strong." },
{ character: "CHEN BAILU", line: "If you take ten you’ll be back where you came from tomorrow. So you'd better be careful." },


{ character: "GU", line: "Well, so ten of them can kill you." },


{ character: "CHEN BAILU", line: "Yes, ten's enough." },


{ character: "GU", line: "Well ... in that case, I'll ... I'll just take one; no, half; no, a third, I think, is enough for me." },


{ character: "CHEN BAILU", line: "That’s good, then. From what you were saying just now I thought —" },


{ character: "GU", line: "Oh, I see, you mean you thought I wanted to commit suicide with them?" },
{ character: "GU", line: "No fear of that. I'm not stupid, I want a few more years of enjoyment yet!" },
{ character: "GU", line: "Hm! I'm just beginning to learn a thing or two, for him…Hm! If Hu Si's going to leave me one day, be it." },
{ character: "GU", line: "I'll find somebody else, I'm…I'm going to piss him off!" },


{ character: "CHEN BAILU", line: "Aren't you tired?" },


{ character: "GU", line: "Why, yes, I am a bit tired. I must have a few rounds of mahjong to put my mind at ease. Come with me." },


{ character: "CHEN BAILU", line: "No, you go without me. I want to sit here alone for a while." },


{ character: "CHEN BAILU", line: "Who is it?" },


{ character: "FANG DASHENG", line: "It’s me." },


{ character: "CHEN BAILU", line: "Just got back?" },


{ character: "FANG DASHENG", line: "I've been back for a while. When I walked up you your door, I heard Mrs." },
{ character: "FANG DASHENG", line: "Gu in here, so I didn't come in." },


{ character: "CHEN BAILU", line: "Well? Have you found the Shrimp?" },


{ character: "FANG DASHENG", line: "No. I went around every single place of that type looking for her, but she was not there." },

	
{ character: "CHEN BAILU", line: "Just as I expected. Tired?" },


{ character: "FANG DASHENG", line: "A bit, but I’m excited, very excited. I’ve been thinking, for the past two days," },
{ character: "FANG DASHENG", line: "been thinking non-stop about something." },


{ character: "CHEN BAILU", line: "What, you’re thinking, again?" },


{ character: "FANG DASHENG", line: "Well, there’s no other way. That’s just who I am. I’m thinking again." },
{ character: "FANG DASHENG", line: "Especially tonight, it makes me feel — Tell me," },
{ character: "FANG DASHENG", line: "why must people be so cruel to one another?" },


{ character: "CHEN BAILU", line: "Is that what you've been thinking about?" },


{ character: "FANG DASHENG", line: "No, not quite. What I’ve been thinking is greater, and more practical." },
{ character: "FANG DASHENG", line: "I’m just curious, why would you people allow a monster like this Jin to go on living?" },


{ character: "CHEN BAILU", line: "You silly boy. You couldn’t see. Let me tell you now," },
{ character: "CHEN BAILU", line: "it's not a question of whether we allow Jin to go on living: it's a question of whether he'll allow us to go on living." },


{ character: "FANG DASHENG", line: "I don’t believe he’s got that much power. He’s just a person." },


{ character: "CHEN BAILU", line: "How’d you know he’s just A person?" },


{ character: "FANG DASHENG", line: "Hm … Have you seen Jin?" },


{ character: "CHEN BAILU", line: "I’m not that blessed. Do you want to see him?" },


{ character: "FANG DASHENG", line: "Yes, I want to see him." },


{ character: "CHEN BAILU", line: "That ought to be easy. This place is full of Jins: big ones, small ones, the ones that are not big nor small." },
{ character: "CHEN BAILU", line: "They fill up this place like pests sometimes, all over." },


{ character: "FANG DASHENG", line: "Right, a pest! Jin! They are the same, except that you can see a pest is bad from the outside," },
{ character: "FANG DASHENG", line: "but you can’t see that Jin is evil from the outside, so he is even more evil." },


{ character: "CHEN BAILU", line: "You seem to have changed." },


{ character: "FANG DASHENG", line: "Yes, I thought so as well. But I should thank you." },


{ character: "CHEN BAILU", line: "What for?" },


{ character: "FANG DASHENG", line: "It is you who’s given me a chance." },
{ character: "CHEN BAILU", line: "I don’t really understand. You sound regretful." },


{ character: "FANG DASHENG", line: "No! I don’t regret it. I don’t regret staying here for a few days. It's true, what you say." },
{ character: "FANG DASHENG", line: "I should have a closer look at these creatures here. Now I've seen them as they are." },
{ character: "FANG DASHENG", line: "Though I can't say I've done the same with you yet." },
{ character: "FANG DASHENG", line: "I just don't understand why you have to mingle with them." },
{ character: "FANG DASHENG", line: "You must realize that they're monsters, a bunch of beasts?" },
{ character: "FANG DASHENG", line: "Zhujun, I can see that you loathe them too by looking at your eyes, yet you will go on pretending that you don't mind, deceiving yourself all the time." },


{ character: "CHEN BAILU", line: "You —" },


{ character: "FANG DASHENG", line: "Why are you looking at me like that?" },


{ character: "CHEN BAILU", line: "You've great faith in your own cleverness, haven't you?" },


{ character: "FANG DASHENG", line: "There you go again, Zhujun. No, I'm not clever. But I've great faith in your cleverness." },
{ character: "FANG DASHENG", line: "Don't try to deceive me. You're miserable. I am begging you, for old friends’ sake, please don’t be stubborn with me anymore." },
{ character: "FANG DASHENG", line: "I know you’re acting tough and lying, trying to convince people that you’re happy, but your eyes are soft." },
{ character: "FANG DASHENG", line: "They can’t hide your panic, your doubts, and dissatisfaction. One may deceive others, Zhujun, but one cannot deceive oneself. If you go on like this, you'll die of frustration." },


{ character: "PAL-LU", line: "What do you think I ought to do, then?" },


{ character: "FANG DASHENG", line: "It’s simple. Come with me. Let’s leave first." },


{ character: "CHEN BAILU", line: "Leave?" },


{ character: "FANG DASHENG", line: "Yes, and stay away from them as far as we can." },


{ character: "CHEN BAILU", line: "But…but…where to? I'm a person who, in the bustle of time always thinks of loneliness," },
{ character: "CHEN BAILU", line: "and in loneliness always thinking of the bustle." },
{ character: "CHEN BAILU", line: "I don't even know what to do with myself all day long. Where do you want me to go?" },


{ character: "FANG DASHENG", line: "There is one way: you must get married! You should marry someone! You should come with me." },


{ character: "CHEN BAILU", line: "You’re doing your trick again." },


{ character: "FANG DASHENG", line: "No, no, don't misunderstand. I'm not proposing. I didn't say I was going to marry you." },
{ character: "FANG DASHENG", line: "I said I'm taking you away, and this time I'm going to find you a husband." },


{ character: "CHEN BAILU", line: "Find me a husband?" },


{ character: "FANG DASHENG", line: "Yes, I'll find one for you. You women only know how to marry, but you don't know what kind of man to marry." },
{ character: "FANG DASHENG", line: "This time I'll take you to find a real man. Come with me." },


{ character: "CHEN BAILU", line: "Do you mean to hold me with one hand and beat the gong with the other, going around to look for my man? " },


{ character: "FANG DASHENG", line: "What's there to be afraid of? Zhujun, you should marry a real man." },
{ character: "FANG DASHENG", line: "He must be very strong and silly, working hard all day long, like those tampers these days." },


{ character: "CHEN BAILU", line: "Oh, you want me to marry a tamper?" },


{ character: "FANG DASHENG", line: "That's good too. What part of them doesn't look like a man?" },
{ character: "FANG DASHENG", line: "Zhujun, you should get married. You should leave right now." },


{ character: "CHEN BAILU", line: "Leave — yes. But — get married?" },


{ character: "FANG DASHENG", line: "Zhujun, you are young, why not give it a go?" },
{ character: "FANG DASHENG", line: "To live is to take risks constantly, and marriage is the greatest risk of them all." },


{ character: "CHEN BAILU", line: "But I’ve taken that risk already." },


{ character: "FANG DASHENG", line: "What? Have you tried it?" },


{ character: "CHEN BAILU", line: "Yes, I've tried it. But it wasn’t risky at all." },
{ character: "CHEN BAILU", line: "It was dreary and dull, and rather ridiculous when you come to look back on it." },


{ character: "FANG DASHENG", line: "Zhujun…you…you’ve been married before?" },


{ character: "CHEN BAILU", line: "Well, why are you so surprised?" },
{ character: "CHEN BAILU", line: "Do I have to wait for you to find someone for me before I can take the risk?" },


{ character: "FANG DASHENG", line: "Who was he?" },


{ character: "CHEN BAILU", line: "Someone rather like you." },


{ character: "FANG DASHENG", line: "Like me?" },


{ character: "CHEN BAILU", line: "Yes, very much so — He was a fool." },


{ character: "FANG DASHENG", line: "Oh." },


{ character: "CHEN BAILU", line: "He was a poet, you see." },
{ character: "CHEN BAILU", line: "He was bright enough at figuring things out, but he was hopeless when it came to doing anything." },
{ character: "CHEN BAILU", line: "He was charming as long as you let him talk away on his own, but if he had to chat with someone else," },
{ character: "CHEN BAILU", line: "he became so unbearable that it gave one a headache to listen to him."},
{ character: "CHEN BAILU", line: " He was a most loyal friend, but a most inconsiderate lover." },
{ character: "CHEN BAILU", line: "He swore at me and he also beat me." },


{ character: "FANG DASHENG", line: "But you loved him?" },


{ character: "CHEN BAILU", line: "Yes, I did! When he wanted me to leave this place and marry him," },
{ character: "CHEN BAILU", line: "I did so, and when he wanted me to go down to the country, I went with him." },
{ character: "CHEN BAILU", line: "He said, 'You should have a child,' so I had a child for him." },
{ character: "CHEN BAILU", line: "For the first few months after we got married it was heaven." },
{ character: "CHEN BAILU", line: "He loved to see the sunrise, and every morning he'd get up as soon as it was light and made me watch the sunrise with him." },
{ character: "CHEN BAILU", line: "He was just like a child, so earnest about it all! And so happy!" },
{ character: "CHEN BAILU", line: "Sometimes he was so pleased about it that he'd do somersaults in front of me, and he was always saying," },
{ character: "CHEN BAILU", line: "The sun has risen, and the darkness is left behind." },

{ character: "CHEN BAILU", line: "He was the eternal optimist, and he even wrote a novel called Sunrise," },
{ character: "CHEN BAILU", line: "because he believed that there was hope in everything." },


{ character: "FANG DASHENG", line: "But — afterward?" },


{ character: "CHEN BAILU", line: "Afterwards? — What’s the point of bringing that up?" },


{ character: "FANG DASHENG", line: "Why don’t you share with me some of his hopes?" },


{ character: "CHEN BAILU", line: "Afterwards he began to pursue his hopes alone." },


{ character: "FANG DASHENG", line: "What do you mean?" },


{ character: "CHEN BAILU", line: "You don’t understand? Afterwards, the novelty gradually wore off." },
{ character: "CHEN BAILU", line: "The longer we spent together the duller and drearier it became." },
{ character: "CHEN BAILU", line: "But we put up with it; until one day…he suddenly said I was a burden to him," },
{ character: "CHEN BAILU", line: "so I couldn’t help but call him a pain in the ass!" },
{ character: "CHEN BAILU", line: "From that day onwards, we gradually stopped fighting and quarreling, and he didn’t scold me or beat me up anymore." },


{ character: "FANG DASHENG", line: "Isn’t that good?" },


{ character: "CHEN BAILU", line: "No, no, you don’t understand. Let me tell you this: the most awful thing in a marriage is not poverty or jealousy or quarreling," },
{ character: "CHEN BAILU", line: "but dullness, boredom, and getting fed up with each other," },
{ character: "CHEN BAILU", line: "both feeling that the other is a burden. We were too lazy to quarrel or to fight anymore." },
{ character: "CHEN BAILU", line: "We just wish the sky would fall one day, waiting to die." },
{ character: "CHEN BAILU", line: "So, we pulled long faces and frowned when we saw each other, and we didn’t talk." },
{ character: "CHEN BAILU", line: "In the end, he was doing everything he could to make my life miserable, and I was doing the same to him." },
{ character: "CHEN BAILU", line: "If he wanted to do anything, I tried to stop him, and if I wanted to budge an inch, he’d hold me back." },
{ character: "CHEN BAILU", line: "It was as if we had been tied together and thrown into the sea, sinking down…down…down…" },


{ character: "FANG DASHENG", line: "And yet you both escaped." },


{ character: "CHEN BAILU", line: "Only because the rope snapped." },


{ character: "FANG DASHENG", line: "What do you mean?" },


{ character: "CHEN BAILU", line: "The child died." },


{ character: "FANG DASHENG", line: "And so you parted?" },


{ character: "CHEN BAILU", line: "Yes, and he went off to pursue his hopes." },


{ character: "FANG DASHENG", line: "Where is he now, then?" },


{ character: "CHEN BAILU", line: "No idea." },


{ character: "FANG DASHENG", line: "Then maybe he would come back to see you one day." },


{ character: "CHEN BAILU", line: "No, he'll never come back. He's no doubt happy at his work now." },
{ character: "CHEN BAILU", line: "He would think I’d now sunk so low that there was no hope of rescuing me." },
{ character: "CHEN BAILU", line: "Huh! He's forgotten me long ago." },


{ character: "FANG DASHENG", line: "But you don't seem to have forgotten him?" },


{ character: "CHEN BAILU", line: "No, I can't forget him. I won't be able to forget him so long as I live. Here, do you like this? " },

{ character: "CHEN BAILU", line: "'The sun has risen, and the darkness is left behind; but the sun is not for us, for we shall be asleep.' Do you like it?" },


{ character: "FANG DASHENG", line: "Not sure I understand." },


{ character: "CHEN BAILU", line: "It's said by an old man on his deathbed in his novel." },


{ character: "FANG DASHENG", line: "What made you suddenly bring that up?" },


{ character: "CHEN BAILU", line: "Because I…I…I'm always thinking of people in that situation." },


{ character: "FANG DASHENG", line: "I think you're still in love with him." },


{ character: "CHEN BAILU", line: "Yes." },


{ character: "FANG DASHENG", line: "You are deeply in love with him." },


{ character: "CHEN BAILU", line: "Yes. — But why’d you ask me that?" },


{ character: "FANG DASHENG", line: "Nothing. Maybe it’s because I’ll be relieved if I ask so that I won’t be thinking about you all the time." },
{ character: "FANG DASHENG", line: "Thank you, Zhujun, you're a very honest person." },
{ character: "FANG DASHENG", line: "Well, Zhujun, I must go and pack now." },

{ character: "CHEN BAILU", line: "You're going already? Oh, there's a telegram for you here." },


{ character: "FANG DASHENG", line: "Mm, yes." },


{ character: "CHEN BAILU", line: "Telling you to hurry back home?" },


{ character: "FANG DASHENG", line: "Yes. Well, goodbye, Zhujun!" },


{ character: "CHEN BAILU", line: "What's all the hurry? Are you leaving at the crack of dawn?" },


{ character: "FANG DASHENG", line: "I want to leave the hotel at the crack of dawn." },


{ character: "CHEN BAILU", line: "Which train are you getting?" },


{ character: "FANG DASHENG", line: "No, no, I'm not going back home. I'm only moving my quarters." },


{ character: "CHEN BAILU", line: "You’re not going?" },


{ character: "FANG DASHENG", line: "No, I’ll not go back. But I may not be able to come and see you much." },


{ character: "CHEN BAILU", line: "Why not? This is all very mysterious." },


{ character: "FANG DASHENG", line: "I'm going to stay in the city for some time. I may do a bit of work here." },


{ character: "CHEN BAILU", line: "You mean you're going to look for a job?" },


{ character: "FANG DASHENG", line: "Oh, there's plenty to do." },
{ character: "FANG DASHENG", line: "I may have some dealings with Mr. Jin, I may run around looking for the Shrimp," },
{ character: "FANG DASHENG", line: "or I may do something for people like that bank clerk." },
{ character: "FANG DASHENG", line: "I don't really know yet. I just feel there's a lot that could be done." },


{ character: "CHEN BAILU", line: "In other words, you're going the same way as he did." },


{ character: "FANG DASHENG", line: "Who?" },


{ character: "PAT-LU", line: "Him — my poet." },


{ character: "FANG DASHENG", line: "No, I wouldn’t become a poet. But I may turn into a real fool." },


{ character: "CHEN BAILU", line: "Go on! Go on, both of you! I know I'll be forgotten by both of you." },


{ character: "FANG DASHENG", line: "But why won't you come with me, Zhujun? Come with me! Do come with me." },


{ character: "CHEN BAILU", line: "But — Where to? I've told you that I'm sold to this place." },


{ character: "FANG DASHENG", line: "All right, then. You — ah…you…you're too proud, too stubborn." },


{ character: "CHEN BAILU", line: "Who is it?" },


{ character: "CHEN BAILU", line: "Oh, Mr. Li." },


{ character: "LI SHIQING", line: "Good morning, Miss Chen. Fusheng," },
{ character: "FANG DASHENG", line: "go and tell my car to wait as I may be going home after I've had a word with Mr. Pan." },


{ character: "WANG FUSHENG", line: "Yes, Mr. — yes, sir. But your wife just rang to say —" },


{ character: "LI SHIQING", line: "I know about it. You go." },


{ character: "CHEN BAILU", line: "Is your son any better, Mr. Li?" },


{ character: "LI SHIQING", line: "Good, good, he's all right. Is Yueting in there?" },


{ character: "CHEN BAILU", line: "I think so." },


{ character: "LI SHIQING", line: "I have something confidential to discuss with him." },


{ character: "CHEN BAILU", line: "So you want us out of the way?" },


{ character: "LI SHIQING", line: "No, no, that won't be necessary. I can talk to him in there just as well." },
{ character: "FANG DASHENG", line: "Well, excuse me for not keeping you company." },


{ character: "CHEN BAILU", line: "Well!" },


{ character: "FANG DASHENG", line: "He's suddenly — what happened to him?" },


{ character: "CHEN BAILU", line: "Didn't you know? He's assistant to the director now." },


{ character: "FANG DASHENG", line: "Oh! Poor thing!" },


{ character: "CHEN BAILU", line: "Yes, it’s funny." },


{ character: "HU SI", line: "Where is she, Bailu?" },


{ character: "CHEN BAILU", line: "Who?" },


{ character: "HU SI", line: "The old witch." },


{ character: "CHEN BAILU", line: "No idea." },


{ character: "HU SI", line: "Tired?" },


{ character: "FANG DASHENG", line: "Who are you asking?" },


{ character: "HU SI", line: "Oh, Fang — Mr. Fang. Just got back? Can't get away from each other, can we? The second time we've met tonight." },


{ character: "FANG DASHENG", line: "Would you like to come and sit in my room, Bailu?" },


{ character: "CHEN BAILU", line: "Yes, all right." },


{ character: "HU SI", line: "Gets on my fucking nerves! A bore and a crank rolled into one." },


{ character: "LI SHIQING", line: "Too crowded in there, we can talk better in here." },


{ character: "PAN YUETING", line: "All right, if you like." },


{ character: "HU SI", line: "You still here, Shiqing? Haven’t gone home yet?" },


{ character: "LI SHIQING", line: "No. No." },


{ character: "HU SI", line: "Morning, Mr. Pan." },


{ character: "PAN YUETING", line: "You'd better hurry, Hu Si. Mrs. Gu's in there waiting for her opera lesson." },


{ character: "HU SI", line: "Yes, I was just going. Here, Shiqing, come here a minute. Let me tell you something." },


{ character: "LI SHIQING", line: "What is it?" },


{ character: "HU SI", line: "Saw your wife in the street again yesterday, she's not bad!" },


{ character: "LI SHIQING", line: "You…you…outrageous! Outrageous! " },


{ character: "HU SI", line: "Nothing further now. See you later, Shiqing." },


{ character: "PAN YUETING", line: "Take a seat. Something you wanted to see me about?" },


{ character: "LI SHIQING", line: "Of course." },


{ character: "PAN YUETING", line: "What is it?" },


{ character: "LI SHIQING", line: "Yueh — Sir, do you know what's happening in the market?" },


{ character: "PAN YUETING", line: "Not particularly. Let's hear it." },


{ character: "Li", line: "I found all this out from a very confidential source." },
{ character: "Li", line: "You can set your mind at rest now: it seems we did the right thing by buying these bonds." },
{ character: "Li", line: "Mr. Jin really is buying this time," },
{ character: "Li", line: "and the rumor that he was trying to start a scare so that he could unload is quite wrong. It was pure nervousness." },
{ character: "Li", line: "So it seems we've done the right thing this time." },
{ character: "Li", line: "I've just worked it out that you're holding four and a half million altogether at the moment," },
{ character: "Li", line: "so it looks as if we might make three hundred thousand on this transaction." },


{ character: "PAN YUETING", line: "Yes…yes…yes. By the way, I heard Fusheng say your wife —" },


{ character: "LI SHIQING", line: "I know, I know. — As I was saying, it looks as if we might make three hundred thousand." },
{ character: "LI SHIQING", line: "That's on the assumption that the prices keep rising at the rate they are now." },
{ character: "LI SHIQING", line: "But in a day or two, when people begin to realize what's happening," },
{ character: "LI SHIQING", line: "the bears will be rushing to cover, scrambling to pick up what they can," },
{ character: "LI SHIQING", line: "and this will give a boost to the market." },
{ character: "LI SHIQING", line: "I tell you, within ten days there'll be a further profit of a hundred or two hundred thousand for us." },
{ character: "LI SHIQING", line: "I’m just saying." },


{ character: "PAN YUETING", line: "Is your wife urging you to go back?" },


{ character: "LI SHIQING", line: "Forget her, forget her for the moment. What I suggest, Yueting, is that we shouldn't on any account sell our holdings now." },
{ character: "LI SHIQING", line: "I tell you, this time the prices are going to go up and up and up," },
{ character: "LI SHIQING", line: "not just rise so far and then stop." },
{ character: "LI SHIQING", line: "In fact, if you'll take my advice, Yueting, the best thing we can do is to buy more as we see fit tomorrow." },
{ character: "LI SHIQING", line: "There'll still be time to buy some more tomorrow without losing on them." },


{ character: "PAN YUETING", line: "Shiqing, do you realize that your son's ill?" },


{ character: "LI SHIQING", line: "That's all right, don't worry about that — I think we should go on buying." },
{ character: "LI SHIQING", line: "Yes! That's settled, then. This is the chance of a lifetime, Yueting." },
{ character: "LI SHIQING", line: "When we've pulled this off successfully, I don't think the bank should take any more risks of this kind." },
{ character: "LI SHIQING", line: "Whatever happens, we should never act in such an unethical manner again. In the future, we must restore some credits." },
{ character: "LI SHIQING", line: "But this time, now that we've burnt our boats, we should have a look at the market first thing in the morning and buy some more." },


{ character: "PAN YUETING", line: "But —" },


{ character: "LI SHIQING", line: "We should add another five hundred thousand to make it an integer. This can't go wrong, I should say." },
{ character: "LI SHIQING", line: "The way I've been working it out, the first thing that we should do is to put the bank's credit on a firm footing," },
{ character: "LI SHIQING", line: "which means: first, the deposits should be —" },


{ character: "PAN YUETING", line: "Shiqing! Shiqing! Don't you realize your son's seriously ill?" },


{ character: "LI SHIQING", line: "Why must you keep on bringing that unhappy stuff up?" },


{ character: "PAN YUETING", line: "I think you're being too happy." },


{ character: "LI SHIQING", line: "Why not! I think I've helped you handle this bit of business in a way that does us credit, sir. Naturally, I'm happy!" },


{ character: "PAN YUETING", line: "I'm sorry, I forgot that you've been my assistant for the last two days." },


{ character: "LI SHIQING", line: "What do you mean, sir?" },


{ character: "PAN YUETING", line: "Nothing. Do you know that these bonds I'm holding are now money?" },


{ character: "LI SHIQING", line: "Of course." },


{ character: "PAN YUETING", line: "And this little bit of profit will be enough to, repay Mr. Jin's loan in full?" },


{ character: "LI SHIQING", line: "According to my reckoning there'll be some surplus." },


{ character: "PAN YUETING", line: "Well, excellent. Now, think: with this surplus, plus such influence and ability as I possess," },
{ character: "PAN YUETING", line: "is it likely that I'm going to stand for any nonsense from anybody?" },


{ character: "LI SHIQING", line: "I'm afraid I don't quite see where you're driving at, sir." },


{ character: "PAN YUETING", line: "For example, is it possible that someone might start putting it around that my bank has insufficient reserves?" },


{ character: "LI SHIQING", line: "Eh?" },


{ character: "PAN YUETING", line: "Or go round saying I've mortgaged all the bank's property." },


{ character: "LI SHIQING", line: "Oh?" },


{ character: "PAN YUETING", line: "Or, say that my bank has literally made no money this year and is about to close." },


{ character: "LI SHIQING", line: "But, what's the point of going into all this, sir? It's not —" },


{ character: "PAN YUETING", line: "I've no wish to bring the subject up, but there's always a chance that someone else will insist on bringing it up." },
{ character: "PAN YUETING", line: "What do you think I should do?" },


{ character: "LI SHIQING", line: "That's rather far-fetched, sir." },


{ character: "PAN YUETING", line: "It’s not that far. It seems that someone just said it to my face six or seven days ago." },


{ character: "LI SHIQING", line: "Now, don't vex yourself over it, sir." },
{ character: "LI SHIQING", line: "A wise man once said: 'If one is not patient in small things," },
{ character: "LI SHIQING", line: "one will never be able to control great ventures.'" },
{ character: "LI SHIQING", line: "It would always seem better for a man in charge of great affairs to be patient, rather than impatient." },


{ character: "PAN YUETING", line: "I think I've been patient enough these last few days. Let me tell you quite plainly," },
{ character: "PAN YUETING", line: "though, I dislike intensely having a self-opinionated person keep blowing his own trumpet to me," },
{ character: "PAN YUETING", line: "and I don't like having people think I'm a pushover, and imagining that I'm going to submit willingly to blackmail." },
{ character: "PAN YUETING", line: "But what is most detestable to me is when my colleagues in the bank call me" },
{ character: "PAN YUETING", line: "a blind old fool behind my back because I get an uneducated third-rater as my assistant." },


{ character: "LI SHIQING", line: "It wouldn't hurt you to be a little more polite, sir. You might weigh your words more carefully before saying them." },


{ character: "PAN YUETING", line: "I've weighed my words with the greatest care. They couldn’t be nicer." },


{ character: "LI SHIQING", line: "All right, then; the actual words you've been using are not very important." },
{ character: "LI SHIQING", line: "After all, first-raters and third-raters are much the same, very little difference, really." },
{ character: "LI SHIQING", line: "The point is, sir, we're both men with a good proportion of public responsibilities," },
{ character: "LI SHIQING", line: "and I think the least one can do, whether on large issues or small ones, is to keep one's word." },


{ character: "PAN YUETING", line: "Keep one's word? Is that what you're worried about, keeping one's word?" },
{ character: "PAN YUETING", line: "It's not that I never keep my word, but it depends on who I’m keeping my word to." },
{ character: "PAN YUETING", line: "And after being around for all these years, I think I ought to know to which type of people I keep my word," },
{ character: "PAN YUETING", line: "and to which I don’t even have to bother." },


{ character: "LI SHIQING", line: "Then it appears, sir, that you're not going to keep your word to me." },


{ character: "PAN YUETING", line: "That's not the sort of remark one would have expected from a clever man like you." },


{ character: "LI SHIQING", line: "Well, of course, you're much cleverer than the rest of us, sir." },


{ character: "PAN YUETING", line: "Not necessarily. But maybe I do know one teeny-tiny important thing: sometimes," },
{ character: "PAN YUETING", line: "I can definitely refuse to keep my word to self-opinionated scoundrels." },
{ character: "PAN YUETING", line: "Do you realize that your wife has been calling you?" },


{ character: "LI SHIQING", line: "I know, I know." },


{ character: "PAN YUETING", line: "Your son's seriously ill, dying. Mrs. Li urges you to go home." },


{ character: "LI SHIQING", line: "I'm going right away." },


{ character: "PAN YUETING", line: "That’s good. I hear your car's waiting for you outside. It won't take you long to get home by car." },
{ character: "PAN YUETING", line: "When you get home, you might get a bit of practice with your cleverness. I can't see a shrewd man like you lacking a job." },
{ character: "PAN YUETING", line: "When you do get a job, I suppose you can always open people's drawers, in order to see," },
{ character: "PAN YUETING", line: "for example, whether their property has been mortgaged or not, or to check up on the actual amount of their deposits" },
{ character: "PAN YUETING", line: "— Oh, I might as well tell you, while we're on the subject, that in order to spare you any further anxiety on my account," },
{ character: "PAN YUETING", line: "I've now taken the documents out of the drawer and put them in the safe." },


{ character: "LI SHIQING", line: "Oh!" },


{ character: "PAN YUETING", line: "This, Mr. Li, is the list of your salary. Let's do some math." },
{ character: "PAN YUETING", line: "The salary of a director's assistant is two hundred and seventy-five yuan a month." },
{ character: "PAN YUETING", line: "You were on this job for three days, and the accountant tells me you've already drawn in advance two hundred and fifty yuan," },
{ character: "PAN YUETING", line: "but I think I ought to treat you decently, so I'm paying you full salary for a mouth." },
{ character: "PAN YUETING", line: "So please, accept the remaining twenty-five yuan. However," },
{ character: "PAN YUETING", line: "the bank won't be able to pay the bill for the car you've been using today." },

{ character: "LI SHIQING", line: "But Mr. Pan — All right, give it to me, then." },


{ character: "PAN YUETING", line: "Well, I'll be off now. Drop in for a chat any time you're free." },
{ character: "PAN YUETING", line: "And you can call me whatever you please from now on, Yueting if you like; brothers, or just “hey”," },
{ character: "PAN YUETING", line: "it doesn’t matter, now that we're equal! Good-bye." },


{ character: "LI SHIQING", line: "All right, then! Twenty-five yuan! Twenty-five yuan. I’m going to kill you for this!" },
{ character: "LI SHIQING", line: "For the sake of these few bonds of yours, I even put my family out of my mind." },
{ character: "LI SHIQING", line: "I even ignore my child's illness." },
{ character: "LI SHIQING", line: "I spend my salary to make you look good, and on bribes to get information for you." },
{ character: "LI SHIQING", line: "But now that you've succeeded and made your money, you suddenly abandoned me. Abandoned me." },
{ character: "LI SHIQING", line: "You treat me like a thief, you call my names to my face, insult me, and look down on me!" },
{ character: "LI SHIQING", line: "Yes, you look down on me! You look down on Li Shiqing." },
{ character: "LI SHIQING", line: "Yes, you're making an asshole out of me with your trick, all right." },
{ character: "LI SHIQING", line: "So I'm a 'self-opinionated person!' I'm 'uneducated!' I'm a 'scoundrel!'" },
{ character: "LI SHIQING", line: "Huh, calling me a scoundrel is flattering to you, for I am a 'third-rater!'" },
{ character: "LI SHIQING", line: "And you think I'm going to let you get away with it just like that? Think I'm afraid of you?" },
{ character: "LI SHIQING", line: "— Huh! Today I'm going to finish you off, the whole gang of you." },
{ character: "LI SHIQING", line: "I won't leave one of you standing, not a single one of you. " },


{ character: "LI SHIQING", line: "Who is it?" },


{ character: "MRS. LI", line: "Shiqing! What's got into you? You've been out all day and still, you're not home!" },


{ character: "LI SHIQING", line: "I'm not going home!" },


{ character: "MRS. LI", line: "Little Wu is not going to make it. His tongue's gone cold already, Shiqing." },
{ character: "MRS. LI", line: "I got a taxi and mother and I have been to three hospitals with him, but none of them would take him." },


{ character: "LI SHIQING", line: "Wouldn't take him? They can’t treat him, then?" },


{ character: "MRS. LI", line: "They want money. They all want cash. Even the cheapest one needs fifty yuan for a deposit." },
{ character: "MRS. LI", line: "And all we've got at home is fifteen, so if I spend our last penny," },
{ character: "MRS. LI", line: "it still wouldn't be enough. Shiqing, you must find a way to save him." },


{ character: "LI SHIQING", line: "Here, take these." },


{ character: "MRS. LI", line: "There's — there's only seventeen yuan and a bit here." },


{ character: "LI SHIQING", line: "Well…then…in that case, there's nothing we can do." },


{ character: "MRS. LI", line: "Shiqing, our little Wu —" },


{ character: "LI SHIQING", line: "Why did we have to go and have all these children? Take it, take it! Twenty-five yuan, the price of my self-respect. " },


{ character: "MRS. LI", line: "But Shiqing, aren't you coming with me?" },


{ character: "LI SHIQING", line: "You go ahead. I'll be there later." },


{ character: "MRS. LI", line: "But, Shiqing —" },


{ character: "LI SHIQING", line: "When I tell you to go ahead, you go ahead. What are you yelling about? Go! Go! Do not piss me off!" },


{ character: "MRS. LI", line: "But Shiqing — Someone’s here!" },


{ character: "LI SHIQING", line: "Who is it? Come in! Who is it? Who? " },


{ character: "LI SHIQING", line: "You! You've come at a good time." },


{ character: "LI SHIQING", line: "You'd better go. Someone is here." },


{ character: "MRS. LI", line: "Shiqing —" },


{ character: "LI SHIQING", line: "Huh, I'm not going. I'm not going. I'll die before I leave here without finding a way to get even with him. " },


{ character: "HUANG XINGSAN", line: "Sir!" },


{ character: "LI SHIQING", line: "Oh, you — you tramp. Why are you haunting me again?" },


{ character: "HUANG XINGSAN", line: "Em, sir!" },


{ character: "LI SHIQING", line: "What, sir? Who told you to call me “sir”?" },


{ character: "HUANG XINGSAN", line: "Sir, I'm a petty clerk at the bank. My name's Huang, Huang Xingsan, and I earn ten yuan twenty-five cents a month." },
{ character: "HUANG XINGSAN", line: "I've three children, sir, three... and I earn ten yuan twenty-five a month! My name's Huang, Huang Xingsan…" },


{ character: "LI SHIQING", line: "You! You're — What are you coming round after me again for? Do you know who I am? What do you want from me?" },


{ character: "HUANG XINGSAN", line: "Mr. Pan! I beg you, I beg you!" },


{ character: "LI SHIQING", line: "I’m not Mr. Pan! My name's not Pan, it's Li! Surely you know me? Don't you?" },


{ character: "HUANG XINGSAN", line: "Yes, I know you." },


{ character: "LI SHIQING", line: "Who am I?" },


{ character: "HUANG XINGSAN", line: "You’re Mr. Pan." },


{ character: "LI SHIQING", line: "Bah! What's the matter with you? Why do you have to choose this of all times to come to make fun of me?" },
{ character: "HUANG XINGSAN", line: "What do you want from me?" },


{ character: "HUANG XINGSAN", line: "They won't let me die! They won't agree to let me die." },


{ character: "LI SHIQING", line: "You can die if you like. Why won’t they let you die?" },


{ character: "HUANG XINGSAN", line: "But the officials and the other gentlemen, they insisted on letting me go. " },


{ character: "LI SHIQING", line: "Oh, they let you go." },


{ character: "HUANG XINGSAN", line: "They insisted that my mind was deranged at the time." },
{ character: "HUANG XINGSAN", line: "They insisted that I was innocent." },
{ character: "HUANG XINGSAN", line: "I beg you. I beg you, please, do me one favor; punch me again hard," },
{ character: "HUANG XINGSAN", line: "here; just one punch, please, Mr. Pan, please." },


{ character: "LI SHIQING", line: "Didn't you hear me? My name isn't Pan. Now have a good look at me." },
{ character: "LI SHIQING", line: "My name's not Pan, it's Li, Li Shiqing." },


{ character: "HUANG XINGSAN", line: "My children, my poor children, I killed you, your daddy made you die." },


{ character: "Ll", line: "You mean your children are all —" },


{ character: "HUANG XINGSAN", line: "All gone to heaven. Why won't you let me die? I'm not insane! I tell you, Your Honor, I'm not insane." },
{ character: "HUANG XINGSAN", line: "My mind was quite clear, I bought the opium myself out of the three yuan that" },
{ character: "HUANG XINGSAN", line: "Mr. Pan gave me: two yuan to pay rent and the other one for the opium." },
{ character: "HUANG XINGSAN", line: "Your Honor, I bought the brown sugar myself to mix with it. I made the children take it, I poisoned them with my own hands. I'd no money to buy any more opium." },
{ character: "HUANG XINGSAN", line: "Why couldn't you let me jump in the river? Why won't you let me die? Your Honor, do not believe these neighbors of mine." },
{ character: "HUANG XINGSAN", line: "They don’t know what they’re saying. My mind's quite clear, I'm not in the least bit insane." },
{ character: "HUANG XINGSAN", line: "The law's the law, you can't just let me go. Your Honor, I've murdered with my own hands," },
{ character: "HUANG XINGSAN", line: "I've poisoned my children, my Wang, my little Yun, my ... You have to kill me, Your Honor!" },


{ character: "LI SHIQING", line: "Get away, take your hands off me, you stupid idiot! Look where you are. Look at me, who am I?" },


{ character: "HUANG XINGSAN", line: "Mr. — Mr. Pan, where am I?" },


{ character: "LI SHIQING", line: "Bah! What do you keep pestering me for, you bag of bones!" },
{ character: "LI SHIQING", line: "Go, go! Get out, get out, or else I'll send for the police to take you away." },


{ character: "HUANG XINGSAN", line: "No, don't, don't send for the police. Pan, Mr. Pan, human beings can't treat each other like this, they just can't!" },
{ character: "HUANG XINGSAN", line: "A few days ago, my children were alive and I wanted to be alive; I begged you to let me stay alive, but you wouldn't." },
{ character: "HUANG XINGSAN", line: "Now they're dead, now I want to die. I'm begging you to let me die and you won't let me." },
{ character: "HUANG XINGSAN", line: "We're all human beings, Mr. Pan. Human beings can't treat each other like this!" },
{ character: "HUANG XINGSAN", line: "They can't treat each other like this!" },


{ character: "LI SHIQING", line: "Bah! ... You bastard! You're stirring my heart." },
{ character: "LI SHIQING", line: "Get out, get out, you almost drive me mad as well. Out, you rascal, right out." },


{ character: "HUANG XINGSAN", line: "No, please, Mr. Pan, have some mercy. I can't go on living any longer." },
{ character: "HUANG XINGSAN", line: "I’m begging on my knees, have some mercy. Please stop pushing me. Let me go the easy way. " },


{ character: "LI SHIQING", line: "All right, I will, I'll let you die. Just get up first. You should know who I am." },
{ character: "LI SHIQING", line: "My name's Li. Now listen carefully once more: my name's Li. Li, Li, Li." },


{ character: "HUANG XINGSAN", line: "Li?" },


{ character: "LI SHIQING", line: "Don't you remember coming here to see me the other day? ..." },
{ character: "LI SHIQING", line: "When I... I advised you to go rickshaw-pulling?" },


{ character: "HUANG XINGSAN", line: "Yes?" },


{ character: "Li", line: "And I also advised you to beg on the street?" },


{ character: "HUANG XINGSAN", line: "Yes?" },


{ character: "LI SHIQING", line: "And I also advised you to steal?" },


{ character: "HUANG XINGSAN", line: "That's it, you also advised me to throw myself off the top of a building!" },


{ character: "LI SHIQING", line: "Fusheng! Fusheng!" },


{ character: "LI SHIQING", line: "Drag him out. This man is crazy." },


{ character: "WANG FUSHENG", line: "You’re back again!" },


{ character: "HUANG XINGSAN", line: "Mr. Li, I'm not mad! I'm not mad!" },


{ character: "LI SHIQING", line: "My God! You stupid bastard, why go mad? Why let yourself be driven mad?" },
{ character: "LI SHIQING", line: "You let him off too easily!" },


{ character: "LI SHIQING", line: "Hello? Who? Mr. Zhang at the newspaper offices? Oh, this is Shiqing. What? You rang a short while ago?" },
{ character: "LI SHIQING", line: "Nobody picks it up? Oh ... I see ... you've already sent a letter round by hand. Oh！Yes…take it easy now ..." },
{ character: "LI SHIQING", line: "What? Bad news? Who says so? You mean it was also leaked out by Jin's men?" },
{ character: "LI SHIQING", line: "Impossible! But these past few days we've been hearing that Jin's been buying himself! ... Eh? He hasn't bought a thing? ..." },
{ character: "LI SHIQING", line: "Ah, so the rise we've been expecting this week is nothing more than one of his rumors..." },
{ character: "LI SHIQING", line: "Eh? He started getting rid of his holdings yesterday? ... Is that really true? What?" },
{ character: "LI SHIQING", line: "So the news is already going round, is it? ..." },
{ character: "LI SHIQING", line: "Yes, yes, that means the market will start dropping fast tomorrow as soon as the session opens." },
{ character: "LI SHIQING", line: "By the way, how much do you think it'll drop by? ..." },
{ character: "LI SHIQING", line: "What? They'll close in the second session? Ah ... I see ... Say it …" },
{ character: "LI SHIQING", line: "The Ta Feng Bank's been screwed up badly by Jin over these bonds ... Yes … yes, that's what I think." },
{ character: "LI SHIQING", line: "Chances are Jin’ll be demanding his deposit back ... Jolly good — I mean it's a great blow." },
{ character: "LI SHIQING", line: "Yes ... yes, I see, the letter you’ve written has already been sent round here by hand." },
{ character: "LI SHIQING", line: "Right, see you later. Yes, I'll let Mr. Pan have it." },


{ character: "LI SHIQING", line: "Fusheng, Fusheng!" },


{ character: "LI SHIQING", line: "Mr. Zhang at the newspaper offices sent a messenger round with a letter for Mr." },
{ character: "LI SHIQING", line: "Pan a short while ago. Have you seen it?" },


{ character: "WANG FUSHENG", line: "Yes, it came some time ago." },


{ character: "LI SHIQING", line: "Where is it?" },


{ character: "WANG FUSHENG", line: "Here it is." },


{ character: "LI SHIQING", line: "Give it to me! Just give it to me! Why didn't you say anything about it before?" },


{ character: "WANG FUSHENG", line: "I was going to give it to Mr. Pan before, but I found him busy playing mahjong." },
{ character: "WANG FUSHENG", line: "He was doing very well and was about to win, so I didn't disturb him." },


{ character: "LI SHIQING", line: "Go, go! Get out! Don't stand there interrupting me." },


{ character: "WANG FUSHENG", line: "Yes, sir." },


{ character: "LI SHIQING", line: "You've come just right! Just tight! You couldn't have come at a better moment." },


{ character: "LI SHIQING", line: "Ah, Miss Chen. Haven’t your visitors left yet?" },


{ character: "CHEN BAILU", line: "They'll be leaving any minute now. I’m just walking them to the door. What’s the matter, sir? You look happy." },


{ character: "LI SHIQING", line: "Huh, people are happy when good things happen to them, maybe now —" },
{ character: "LI SHIQING", line: "immediately the best thing is going to happen to me. " },


{ character: "CHEN BAILU", line: "Are you getting promoted to assistant manager again?" },


{ character: "LI SHIQING", line: "This one will make me happy just like that. If you're just going in there," },
{ character: "LI SHIQING", line: "Miss, I wonder if I could trouble you to ask Mr. Pan to come out here for a moment as soon as he can." },
{ character: "LI SHIQING", line: "There's a letter here for him that's just been brought around, something extremely important has happened." },
{ character: "LI SHIQING", line: "So could you ask him to come out at once and give instructions on what should be done about it?" },


{ character: "PAILU", line: "Strangely, you're suddenly very polite again." },


{ character: "LI SHIQING", line: "You should always be polite in front of a lady." },


{ character: "LI SHIQING", line: "Oh...oh...Why can’t I get a hold of myself now?" },


{ character: "PAN YUETING", line: "Oh, haven't you gone home yet?" },


{ character: "LI SHIQING", line: "No, sir, I can't tear myself away when all I can think about is your bank's affairs." },


{ character: "PAN YUETING", line: "Why did you ask to see me?" },


{ character: "LI SHIQING", line: "How's your game going?" },


{ character: "PAN YUETING", line: "It went well!" },


{ character: "LI SHIQING", line: "I heard you're lucky tonight, sir." },


{ character: "PAN YUETING", line: "Not bad. " },


{ character: "LI SHIQING", line: "How many times did you win?" },


{ character: "PAN YUETING", line: "I expected you to come to me again, but I didn't think you'd say anything like that when you saw me." },


{ character: "LI SHIQING", line: "You think I’d come to you, begging you to spare me a job — Of course, I have no money, I'm living off the bank." },
{ character: "LI SHIQING", line: "Think about it, you just —" },


{ character: "PAN YUETING", line: "Where's the letter?" },


{ character: "LI SHIQING", line: "Which letter?" },


{ character: "PAN YUETING", line: "Bailu said you had a letter addressed to me." },


{ character: "LI SHIQING", line: "Oh, yes, of course. From Mr. Zhang at the newspaper offices. He sent it around by hand." },


{ character: "PAN YUETING", line: "Give it to me now. " },


{ character: "LI SHIQING", line: "But I was afraid you'd be too surprised after reading it, so I didn't dare send it to you right away." },


{ character: "PAN YUETING", line: "What's the matter? Are the bonds going up again?" },


{ character: "LI SHIQING", line: "Naturally, it's the bonds. I just took a look at them, and let me tell you, I couldn’t be more surprised." },


{ character: "PAN YUETING", line: "Great. It’s definitely good news when it comes to bonds. I am right this time. Ok, give it to me." },


{ character: "LI SHIQING", line: "But sir, I opened it and read it without waiting for you." },


{ character: "PAN YUETING", line: "What? How dare you open it?" },


{ character: "LI SHIQING", line: "But sir, if I didn't open it, how would I know whether it was good news or not," },
{ character: "LI SHIQING", line: "and how I should break it to you? " },


{ character: "PAN YUETING", line: "Yes, yes, sure, just give it to me." },


{ character: "LI SHIQING", line: "You won't be angry with me? You won't say I'm self-opinionated or over-inquisitive?" },
{ character: "LI SHIQING", line: "Read it carefully, sir." },


{ character: "PAN YUETING", line: "Ok, ok." },

{ character: "LI SHIQING", line: "It's a thing I'd never expected. There’s no coincidence like this." },
{ character: "LI SHIQING", line: "Things just don't work out as neatly as this. I'm certain it's all a rumor. It's all happening too fast." },
{ character: "LI SHIQING", line: "You see, I’m a person who likes to interrupt, who talks a little too much. Do you find me annoying, sir?" },


{ character: "PAN YUETING", line: "I — I don't believe it. It's not true. This information can't be reliable." },
{ character: "PAN YUETING", line: "Hello, is that New Bao News? My name's Pan, Pan Yueting …" },
{ character: "PAN YUETING", line: "I want to speak to the editor, Mr. Zhang. And hurry, it's urgent! … What? He's gone out? But a moment ago he ... Oh, I see, he went out just this minute." },
{ character: "PAN YUETING", line: "Do you know where he's gone? You don't know?..." },
{ character: "PAN YUETING", line: "Why didn't you ask him, you idiot? ... Hello, Huixian Club? I want to speak to Mr. Ding..." },
{ character: "PAN YUETING", line: "Who? Mr. Jin's personal secretary, Mr. Ding Muzhi ..." },
{ character: "PAN YUETING", line: "What? Gone home? How could he have gone already? It's now only, only —" },


{ character: "LI SHIQING", line: "It's now only just after five. It'll soon be light." },


{ character: "PAN YUETING", line: "What's his home number, then? … 43543, yes … all right …" },
{ character: "PAN YUETING", line: "Awkward lot, you can never find them when you want them in a hurry …" },
{ character: "PAN YUETING", line: "Hello … hello … hello, is that Mr. Ding's residence?" },
{ character: "PAN YUETING", line: "Hello ... hello … hello. How can there be no reply?" },


{ character: "LI SHIQING", line: "The servants are probably all asleep by now." },


{ character: "PAN YUETING", line: "They must sleep like the dead! It's nonsense! Nonsense!" },
{ character: "PAN YUETING", line: "	His information can't be reliable. It's impossible. Impossible." },


{ character: "PAN YUETING", line: "Lulu! Lulu!" },


{ character: "CHEN BAILU", line: "What for? Yueting?" },


{ character: "PAN YUETING", line: "Could I bother you to get me a glass of water?" },


{ character: "CHEN BAILU", line: "What's the matter?" },


{ character: "PAN YUETING", line: "I've got a bit of a headache." },


{ character: "LI SHIQING", line: "I agree his information must be unreliable." },
{ character: "PAN YUETING", line: "You hadn't heard anything of the kind up to this morning, had you!" },


{ character: "PAN YUETING", line: "This is a bit of a joke. It's a joke." },


{ character: "CHEN BAILU", line: "What's the matter, Yueting?" },


{ character: "PAN YUETING", line: "This letter, look at it!" },


{ character: "LI SHIQING", line: "In actual fact, sir, it wouldn't be such a terrible blow." },
{ character: "LI SHIQING", line: "You wouldn't lose all that amount even if prices did drop a couple of cents." },
{ character: "LI SHIQING", line: "Did you read the letter carefully, sir, to see whether it actually said how big the drop would be?" },


{ character: "PAN YUETING", line: "Ah, yes. Lulu, give me the letter." },


{ character: "LI SHIQING", line: "No, not there, it's on this page, here. '… This information has already got around," },
{ character: "LI SHIQING", line: "and prices are bound to make a sudden steep plunge tomorrow. No doubt about it ...'" },


{ character: "CHEN BAILU", line: "He says quite plainly that there's bound to be a complete slump." },


{ character: "PAN YUETING", line: "Yes. What he said is that they'll close trading as soon as the session opens tomorrow." },


{ character: "LI SHIQING", line: "After Mr. Zhang had sent the letter, he also phoned." },


{ character: "PAN YUETING", line: "He phoned? Well, what did he say?" },


{ character: "LI SHIQING", line: "He said there was nothing we could do about it. Mr. Jin's behind the scenes pulling the strings," },
{ character: "LI SHIQING", line: "so there's not the slightest thing we can do." },


{ character: "PAN YUETING", line: "The bastard!" },


{ character: "CHEN BAILU", line: "What is it?" },


{ character: "WANG FUSHENG", line: "Mr. Zhang from the newspaper's here." },


{ character: "CHEN BAILU", line: "Let him in." },


{ character: "WANG FUSHENG", line: "He says there are too many people over here, so he's waiting for you in Suite 10." },


{ character: "LI SHIQING", line: "Hello, who is it? ... This is Suite 52. Oh … this is Shiqing …" },
{ character: "LI SHIQING", line: "Oh, you want Mr. Pan? He's here now. Mr. Jin's secretary, Mr. Ding wants to talk to you." },


{ character: "PAN YUETING", line: "Mr. Ding? Yueting here. I've been looking for you. Yes … yes … yes, not at all... What? He wants to withdraw …" },
{ character: "PAN YUETING", line: "What! The whole lot, tomorrow morning? Yes, but listen, it was agreed between Mr. Jin and me that it would be extended a further week ..." },
{ character: "PAN YUETING", line: "Then he's... why, he must be fooling me around! ... Now listen, Mr. Ding." },
{ character: "PAN YUETING", line: "He can't go back on his word like this. ... His WORD! Tell him." },
{ character: "PAN YUETING", line: "He agreed to give me another week, and now he suddenly turns round and... Now listen … listen ... I'd be obliged if he'd have a word with me." },
{ character: "PAN YUETING", line: "What? He's not seeing anyone just now? ... But … Listen, tell me this," },
{ character: "PAN YUETING", line: "Muzhi: has Mr. Jin bought any government bonds in the last few days? …" },
{ character: "PAN YUETING", line: "What? … He can't get rid of them fast enough?... Oh ... Hello! Hello! ..." },
{ character: "PAN YUETING", line: "Listen, listen! Bastard, he got drunk in some girl’s place and didn’t tell me this until this hour." },


{ character: "WANG FUSHENG", line: "Sir, Mr. Zhang —" },


{ character: "PAN YUETING", line: "Oh, get out! And don't come bothering me again, any of you." },


{ character: "LI SHIQING", line: "But, sir —" },


{ character: "PAN YUETING", line: "Go on, get away! Go away, I say! If you'd just go over there and let me have a rest." },


{ character: "CHEN BAILU", line: "Yueting, you —" },


{ character: "PAN YUETING", line: "You'd better go and see your guests. They're probably ready to go." },


{ character: "PAN YUETING", line: "Oh, no way, this is a dead end. I can see Jin's determination to settle my hash once and for all." },


{ character: "PAN YUETING", line: "Who? Who is it?" },


{ character: "LI SHIQING", line: "Me, sir. The self-opinionated scoundrel is back again." },


{ character: "PAN YUETING", line: "What — what do you want?" },


{ character: "LI SHIQING", line: "I thought it would be more satisfactory for the two of us to talk alone." },


{ character: "PAN YUETING", line: "What more is there to talk about?" },


{ character: "LI SHIQING", line: "Nothing. Just a third-rater coming to see how the first-rater's getting along now." },


{ character: "PAN YUETING", line: "You scoundrel!" },


{ character: "LI SHIQING", line: "Scoundrel yourself!" },


{ character: "PAN YUETING", line: "Get out!" },


{ character: "LI SHIQING", line: "You get out! You're forgetting that we're equal now." },


{ character: "PAN YUETING", line: "You'd better watch out, speaking like this. You’ll have to watch out." },


{ character: "LI SHIQING", line: "I do not need to watch out. I haven't a penny to my name and my pockets are full of pawn tickets. No need for me to watch out!" },


{ character: "PAN YUETING", line: "But you should worry about being sued, you pauper." },


{ character: "LI SHIQING", line: "As you say, a pauper. But before you say that you'd better have a look at yourself, my dear Mr. Pan." },
{ character: "LI SHIQING", line: "I'm not in debt, I'm not tens of thousands of yuan in debt. I haven't got people forcing me for money." },
{ character: "LI SHIQING", line: "I haven't had money snatched from under my very nose just as I thought it was mine." },
{ character: "LI SHIQING", line: "You'd better start feeling sorry for yourself, Mr. Pan. You don't even qualify as a pauper." },
{ character: "LI SHIQING", line: "I was made a fool of by a scoundrel, and I'm just poor, but you've been made a fool of by an even greater scoundrel," },
{ character: "LI SHIQING", line: "and he's after your blood!" },
{ character: "LI SHIQING", line: "Yes, you wouldn't keep your word to a self-opinionated scoundrel, and now you've been paid in your own coin!" },
{ character: "LI SHIQING", line: "You may go back on your word but other people can beat you at it. You thought you were clever, but somebody was cleverer than you were!" },
{ character: "LI SHIQING", line: "You scolded me, you made fun of me." },
{ character: "LI SHIQING", line: "You insulted me, yes, and despised me, too. But now I'm very happy, very glad!" },
{ character: "LI SHIQING", line: "Tomorrow morning I'll be able to watch the rush on your bank with my own eyes," },
{ character: "LI SHIQING", line: "I'll see you unable to pay up, I'll see the small savers who’ve only got nine or ten yuan in your bank, scolding you," },
{ character: "LI SHIQING", line: "cursing you — yes, they'll lynch you, they'll eat you alive! You've ruined them!" },
{ character: "LI SHIQING", line: "You've ruined them, and they'll flay the skin off your back, they'll gouge out your eyes!" },
{ character: "LI SHIQING", line: "The only thing that can satisfy them now is your death! Death is your only escape!" },


{ character: "PAN YUETING", line: "Stop it! Stop it!" },


{ character: "LI SHIQING", line: "No, I am saying it out loud — you doddering old fool, you born mug, blind and muddle-headed —" },


{ character: "PAN YUETING", line: "I'll - I'll kill you! Here and now!" },


{ character: "CHEN BAILU", line: "Yueting! Yueting! Let go of him!" },


{ character: "LI SHIQING", line: "Kill me, then! Kill me! But Jin won't let you get away. Outside…outside…" },


{ character: "CHEN BAILU", line: "Let him go, Yueting." },


{ character: "PAN YUETING", line: "What about outside?" },


{ character: "LI SHIQING", line: "Outside San's waiting for you. Mr. Jin told him to wait for you." },


{ character: "PAN YUETING", line: "Why … what for?" },


{ character: "LI SHIQING", line: "Mr. Jin's sent him and the gang to keep an eye on you. He's afraid you might try to escape." },


{ character: "CHEN BAILU", line: "Jin, Jin! Why is he all over the place?" },


{ character: "PAN YUETING", line: "He’s killing me. I suppose you’re satisfied now!" },


{ character: "PAN YUETING", line: "Take it for me, Bailu. It’s probably from Jin." },


{ character: "LI SHIQING", line: "Let me take it." },


{ character: "CHEN BAILU", line: "No, no, I'll get it. Hello, who is it? This is suite 52, Chen Bailu. Ah, Mrs. Li." },
{ character: "CHEN BAILU", line: "I see ... you want Shiqing? Shiqing's here now. It's Mrs. Li, phoning from the hospital." },


{ character: "LI SHIQING", line: "Shiqing here! You got to the hospital, then? Oh, I see…little Wu's what? What?" },
{ character: "LI SHIQING", line: "Say it again. I can't hear very well...What! Little Wu's passed...passed…passed out?" },
{ character: "LI SHIQING", line: "Then … then get a doctor! Get a doctor! You've got the money with you, haven't you? Pay them! Give them the money! ...What? He…he died on the…on the way? ..." },
{ character: "LI SHIQING", line: "Calling 'Daddy' and then ... Oh, my boy! My little Wu. I'm coming over! Coming soon!" },


{ character: "CHEN BAILU", line: "Poor thing! What was all that about, Yueting?" },


{ character: "PAN YUETING", line: "Your visitors gone, Bailu?" },


{ character: "CHEN BAILU", line: "Yes, long ago. There's only Hu Si and Mrs. Gu still here." },


{ character: "PAN YUETING", line: "To think that this should ever happen to me? If you'll wait a moment," },
{ character: "PAN YUETING", line: "Bailu, 1 think I'll go and talk things over with Mr. Zhang from the newspaper." },


{ character: "CHEN BAILU", line: "Feeling better now, Yueting?" },


{ character: "PAN YUETING", line: "Well enough. I'll be off now. I'll be back later." },


{ character: "PAL-LU", line: "Are you leaving me now?" },


{ character: "PAN YUETING", line: "No, I'll be back later." },


{ character: "CHEN BAILU", line: "All right, off you go, then." },


{ character: "CHEN BAILU", line: "It'll soon be morning again, Bailu. " },


{ character: "HU SI", line: "Not a bad drop of opium, that. It's really pepped me up! Then straight after that comes the introduction of the drum." },
{ character: "HU SI", line: "And the large gong and the small one both join in: ba-la-da-Chang, ba-la-da-Chang," },
{ character: "HU SI", line: "ba-la-da-Chang, Chang-Chang-ling-Chang, ba-la-da, da, da ..." },


{ character: "GU", line: "Spitting again! Come on, teach me properly. Listen, Lulu. Listen to Hu Si teaching me Staying the Night and Killing Hsichiao." },
{ character: "GU", line: "That introduction was called 'The Rushing Wind.'" },


{ character: "HU SI", line: "'The Rushing wind,' she says! You'll never learn opera if your memory's as bad as that." },


{ character: "GU", line: "No, I mean it's the 'Long Slow Stabs.'" },


{ character: "HU SI", line: "Oh, come on, forget it! It's not called the 'Long Slow Stabs.'" },
{ character: "HU SI", line: "Now let's get on with it. It'll be enough if you just pay attention to the rhythm of it: ba-la-da-Chang, ba-la-da-Chang, ba-la-da-Chang, Chang-Chang-ling-Chang." },
{ character: "HU SI", line: "Ba-la-dal. Da! Da! Da! Chang! Now, watch: after the introduction the old man swings his beard," },
{ character: "HU SI", line: "knits his brows, glares, quivering all over." },
{ character: "HU SI", line: "Then the drum gives him his accompaniment and the old man grinds his teeth, points," },
{ character: "HU SI", line: "and shouts: 'You cheap jade! ...'" },


{ character: "GU", line: "Can't we have something else besides 'cheap jades' all the time? I don't want to hear the 'old man' parts." },
{ character: "GU", line: "It's the soubrette parts that I'm studying." },


{ character: "HU SI", line: "Soubrette? You? All right, then, but you'll have to tell me which passage you want to do." },


{ character: "GU", line: "That bit that goes 'Suddenly I hear ...' or whatever it is, after the part where 'somebody sings " },
{ character: "GU", line: "I'll ask her to open the door.'" },


{ character: "HU SI", line: "Oh, that's simple, that's an easy bit!" },


{ character: "GU", line: "Let's see you sing it with all the actions, then." },


{ character: "HU SI", line: "Easy. Nothing to it. Fiddle playing the Siping melody: yi-ge-lung-ge-li-ge-lung-ge-lung-ge-lung." },
{ character: "HU SI", line: "Sing: 'I will ask her to open the door!' Back to speak voice: 'My dear young lady, come and let me in!'" },


{ character: "GU", line: "I want the soubrette part." },


{ character: "HU SI", line: "Don't get impatient! Immediately afterward, the curtain is lifted aside, and the soubrette comes on." },
{ character: "HU SI", line: "Your steps must be light and graceful, your eyes lively, and when you come out onto the stage you strike a pose" },
{ character: "HU SI", line: "— the audience likes a bit of swank! Like this!" },
{ character: "HU SI", line: "Yi-ge-lung-ge-li-ge-lung-ge-lung-ge-lung. 'Suddenly I hear' — lung-ge-li-ge-lung-ge-lung-ge-lung-ge-lung —" },
{ character: "HU SI", line: "'Someone calling me outside the door?' Lung-ge-Lung-li-ge-lung-ge-go-lung-ge…" },


{ character: "CHEN BAILU", line: "Listen, listen to that." },


{ character: "HU SI", line: "What?" },


{ character: "CHEN BAILU", line: "A cock crowing." },

{ character: "GU", line: "Why, so it is! Why, it'll soon be light. Come on, we must be going! Time for bed." },
{ character: "GU", line: "We've been here longer than usual tonight." },


{ character: "HU SI", line: "By the way, what about that five-hundred-yuan bill of mine?" },


{ character: "GU", line: "I'll write a check to you from the Ta Feng Bank as soon as I get home. Though you —" },


{ character: "HU SI", line: "I'll listen to you. I won’t see that bad woman again." },


{ character: "GU", line: "Now then, don't start making a fool of yourself in front of Lulu. Hurry up, put your clothes on and we'll be going." },
{ character: "GU", line: "Don't you have to go to the film studio to do some film tomorrow, no, today?" },


{ character: "HU SI", line: "Yes, I have. The director said if I didn't turn up today, they couldn't shoot it." },


{ character: "GU", line: "Then hurry up and put your clothes on and go home to bed. I'm going with you to the studios myself today to have a look around." },


{ character: "HU SI", line: "Oh, are you? I — er…" },


{ character: "GU", line: "You know, Lulu, Hu Si's going to be a great film star. In no time at all he'll be a great success." },
{ character: "GU", line: "The Company says he's a unique, unprecedented chef d'oeuvre, and they want him to do three films in a row." },
{ character: "GU", line: "In a few days, the film magazines will be printing his picture." },
{ character: "GU", line: "And they may be printing mine, too." },


{ character: "CHEN BAILU", line: "Yours?" },


{ character: "GU", line: "Yes, mine, one of me and Hu Si. One of Mrs. Gu with Hu Si, that great star of the screen, the greatest in China." },
{ character: "GU", line: "You see, I'm going to ... I'm now going to accept him after all. I'm hoping ..." },
{ character: "GU", line: "I'm hoping that the day after tomorrow we'll ... we'll be getting married. There, Lulu, don't you think that will be nice?" },


{ character: "CHEN BAILU", line: "Yes, very nice. But —" },


{ character: "GU", line: "Lulu, you'll be one of the bridesmaids, now don't say you won't." },


{ character: "CHEN BAILU", line: "All right, then, but —" },


{ character: "GU", line: "What?" },


{ character: "CHEN BAILU", line: "I was going to ask whether your money is in the Ta Feng Bank at the moment." },


{ character: "GU", line: "Of course it is. Why do you ask?" },


{ character: "CHEN BAILU", line: "Oh, nothing. Just thought I’d ask." },


{ character: "GU", line: "Ah! Look at that, Lulu! I don't know what I'm keeping these for? I'd better give them back to you." },
{ character: "GU", line: "I don't need them now, thanks all the same." },


{ character: "CHEN BAILU", line: "Thank you. I was just going to ask you for them back." },


{ character: "GU", line: "Good, I'd rather you keep them." },


{ character: "HU SI", line: "Come on, then, let's go." },


{ character: "GU", line: "No, I have to do my face first." },


{ character: "HU SI", line: "Oh, skip it. Who's going to see you at this time of morning? Come on, let's go!" },


{ character: "GU", line: "See the way he bosses me around? Goodbye, then!" },


{ character: "HU SI & CHEN BAILU", line: "Goodbye." },


{ character: "CHEN BAILU", line: "Come in." },


{ character: "CHEN BAILU", line: "How's it going, Yueting?" },


{ character: "WANG FUSHENG", line: "Miss." },


{ character: "CHEN BAILU", line: "Oh, it's you." },


{ character: "WANG FUSHENG", line: "Mr. Pan sent me over to tell you he won't be coming after all." },


{ character: "CHEN BAILU", line: "I see." },


{ character: "WANG FUSHENG", line: "He says he doesn't think he'll be able to come in the next few days, either." },


{ character: "CHEN BAILU", line: "I know." },


{ character: "WANG FUSHENG", line: "He told me to tell you to look after yourself," },
{ character: "WANG FUSHENG", line: "and he said you must always be careful what you're doing. and take care of yourself. He said —" },


{ character: "CHEN BAILU", line: "I understand. He won't be able to come any more." },


{ character: "WANG FUSHENG", line: "That's right. But Miss, why must you go and offend a wealthy man like Mr. Pan?..." },
{ character: "WANG FUSHENG", line: "Isn't it enough to have offended Mr. Jin, without —" },


{ character: "CHEN BAILU", line: "You don't understand. I didn’t offend him." },


{ character: "WANG FUSHENG", line: "But when I gave him the bills that you owe a minute ago, just casually like," },
{ character: "WANG FUSHENG", line: "all he did was to shake his head and sigh, and he went off without saying a word." },


{ character: "CHEN BAILU", line: "Why did you have to go show him my bills again?" },


{ character: "WANG FUSHENG", line: "But Miss, we have to pay the bills by today. They say they won't take any excuses this time." },
{ character: "WANG FUSHENG", line: "It’s two thousand five hundred yuan altogether, and they won't take a penny less." },
{ character: "WANG FUSHENG", line: "And you are too proud to go to court, have a long row with them, and make a scandal!" },
{ character: "WANG FUSHENG", line: "Tell me, if we don’t get the money from Mr. Pan, would it just pop up in the sky for us?" },


{ character: "CHEN BAILU", line: "It might just pop up in the sky." },


{ character: "WANG FUSHENG", line: "Oh well, it's up to you to do what you can in the next few hours. I've done all I can; I can't keep them at bay for you any longer." },


{ character: "CHEN BAILU", line: "All right, you can go now." },


{ character: "VOICE", line: " Open the door, open up!" },

{ character: "GEORGY", line: "Here, why did you lock the door?" },


{ character: "WANG FUSHENG", line: "It wasn't locked. Why should it be?" },


{ character: "GEORGY", line: "I had a horrible dream, Bailu. J'ai fait un rêve. It was horrible, ghastly! C'était affreux! Afreux!" },
{ character: "GEORGY", line: "I dreamed the building was full of devils, jumping and leaping all over the place, on the stairs, in the dining room, on the beds," },
{ character: "GEORGY", line: "under the sofa, on top of the tables, all chewing on living heads, living arms," },
{ character: "GEORGY", line: "living thighs, laughing and gibbering, throwing human skulls back and forth, croaking and snarling." },
{ character: "GEORGY", line: "Suddenly there was a great crash and the whole building collapsed," },
{ character: "GEORGY", line: "with you crushed beneath it, and me crushed beneath it, and a whole lot of other people crushed beneath it…" },


{ character: "CHEN BAILU", line: "Georgy, what were you doing?" },


{ character: "GEORGY", line: "I was sleeping." },


{ character: "CHEN BAILU", line: "You didn’t leave?" },


{ character: "GEORGY", line: "Well, you wouldn't be able to see me here now if I had, now would you!" },
{ character: "GEORGY", line: "I fell asleep on a sofa in the corner in there, so I had such a dream." },
{ character: "GEORGY", line: "Oh, affreux! Afreux! It was so horrible." },


{ character: "CHEN BAILU", line: "You've been drinking a lot just now." },


{ character: "GEORGY", line: "Yes, I don't deny it. I drank too much and it upset my nerves." },
{ character: "GEORGY", line: "That's what made me have this nightmare. I'm tired. I'll be going home now. Oh, yes," },
{ character: "GEORGY", line: "I've got something to tell you —" },


{ character: "CHEN BAILU", line: "No, I want to ask…ask you to do something for me." },


{ character: "GEORGY", line: "Go ahead. Anything you like." },


{ character: "CHEN BAILU", line: "Someone...wants...wants me to lend them three thousand yuan." },


{ character: "GEORGY", line: "Oh, oh." },


{ character: "CHEN BAILU", line: "But just at the moment I don’t have enough money for them." },


{ character: "GEORGY", line: "I see." },


{ character: "CHEN BAILU", line: "Georgy, couldn't you find three thousand yuan for me, to lend this person?" },


{ character: "GEORGY", line: "Well...er…of course...that's rather a different matter. I've always been a generous man." },
{ character: "GEORGY", line: "Though it depends on who's involved. No, I can't lend money to your friend, because...because I'm jealous of him, whoever he is." },
{ character: "GEORGY", line: "Though of course if it was someone as clever as yourself who wanted to borrow" },
{ character: "GEORGY", line: "such a paltry sum for themselves, then I wouldn't hesitate for a moment." },


{ character: "CHEN BAILU", line: "All right, then: let's pretend I'm borrowing it from you myself." },


{ character: "GEORGY", line: "You? Lulu borrows money from me? Borrow money from Georgy Zhang?" },


{ character: "CHEN BAILU", line: "Yes, why not?" },


{ character: "GEORGY", line: "Come on, I can never believe that. Lulu would need a few bucks like that?" },
{ character: "GEORGY", line: "Non, non, je ne peux pas y croire!" },
{ character: "GEORGY", line: "I can never believe that. Now you are making fun of me. You sure can tell a joke," },
{ character: "GEORGY", line: "Lulu borrowing money from me, and for such a few bucks." },
{ character: "GEORGY", line: "Oh, my little Lulu, you're a clever girl, you have a wonderful sense of humor." },
{ character: "GEORGY", line: "There's not another girl in the world as clever as you. Ah well, I'll say goodbye now." },


{ character: "CHEN BAILU", line: "Goodbye, then. You're very clever yourself, either." },


{ character: "GEORGY", line: "Thank you, thanks! Oh, yes, before I forget, there's something I want to tell you." },
{ character: "GEORGY", line: "I couldn't hold out any longer, so I accepted her after all." },
{ character: "GEORGY", line: "I'm thinking — we're thinking of getting married tomorrow." },
{ character: "GEORGY", line: "But I told her I must have you as the bridesmaid." },


{ character: "CHEN BAILU", line: "You want me as the bridesmaid?" },


{ character: "GEORGY", line: "Of course. There’s no one as suitable as you." },


{ character: "CHEN BAILU", line: "Yes, I know. Well, goodbye." },


{ character: "GEORGY", line: "Goodbye. So it's agreed. Bonne nuit! — I mean, bonjour, my little Lulu. " },


{ character: "CHEN BAILU", line: "What do you want?" },


{ character: "WANG FUSHENG", line: "Aren't you going to bed yet? It's light, and the sun's already up." },


{ character: "CHEN BAILU", line: "Yes, I know." },


{ character: "WANG FUSHENG", line: "Shall I get you a drink of bean milk before you go to bed?" },


{ character: "CHEN BAILU", line: "No, don't bother. You should go." },


{ character: "WANG FUSHENG", line: "Er…Miss, these are the bills that have got to be paid today. I'll…I’ll leave them here so that you can check them." },


{ character: "CHEN BAILU", line: "All right, leave them there, then." },


{ character: "WANG FUSHENG", line: "You don’t need anything more?" },


{ character: "CHEN BAILU", line: "Yes." },


{ character: "CHEN BAILU", line: "Not what you'd call unattractive, really. You couldn't call her old. Yet ... One, two, three, four, five, six, seven, eight, nine, ten. So — young, and — so — beautiful, so —" },


{ character: "CHEN BAILU", line: "'The sun has risen, and the darkness is left behind; but the sun is not for us, for we shall be asleep.'" },


{ character: "FANG DASHENG", line: "Zhujun! Zhujun! " },


{ character: "FANG DASHENG", line: "Zhujun! Zhujun! Is there someone with you? Zhujun! Zhujun! I’m leaving now! I'm coming in, then, Zhujun." },


{ character: "FANG DASHE", line: "Zhujun! I say — It’s weird, how you don’t let the sun in." },
{ character: "FANG DASHENG", line: "Listen while I tell you something, Zhujun. If you go on living like this, you'll be digging your own grave." },
{ character: "FANG DASHE", line: "Now listen, why not come with me instead of hanging around with these people, alright?" },
{ character: "FANG DASHENG", line: "Look, the sun's shining, it's spring." },


{ character: "WORKERS", line: "The sun comes up from the east; the whole world is in red…" },


{ character: "FANG DASHENG", line: "Listen! Listen! The sun is shining. The sun is shining all over their bodies." },
{ character: "FANG DASHE", line: "Come with me, together we can do something. We can fight Mr. Jin, we can —" },
{ character: "FANG DASHENG", line: "Zhujun, why won't you answer me?" },
{ character: "FANG DASHE", line: "Why won't you — You're too clever. You won’t do this kind of stupid thing like I do." },
{ character: "FANG DASHE", line: "All right, then, I'll just have to go. Goodbye. " },


  ];

const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  // Function to go to the previous slide
const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide(); // Right arrow key pressed
      } else if (event.key === 'ArrowLeft') {
        prevSlide(); // Left arrow key pressed
      }
    };

    window.addEventListener('keydown', handleKeyDown); // Add event listener for keydown

    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Clean up event listener on unmount
    };
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative">
      <Slide {...slides[currentSlide]} />
      <button
        className="absolute top-3/4 left-4 bg-white text-black p-2 rounded"
        onClick={prevSlide}
      >
        Previous
      </button>

      <button
        className="absolute top-3/4 right-4 bg-white text-black p-2 rounded"
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

export default Slideshow4;