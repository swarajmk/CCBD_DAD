export {default as Loading} from './img/loading.gif';
export {default as TypingSFX} from './audio/boop.mp3';
export {default as char1} from './characters/char1.png';
export {default as char2} from './characters/char2.png';
export {default as char3} from './characters/char3.png';
export {default as back} from './img/back.png';
export {default as back1} from './img/back1.png';

export {default as bgm} from './audio/bgm.mp3';
export {default as bgm1} from './audio/bgm1.mp3';
export {default as bgm2} from './audio/bgm2.mp3';
export {default as bgm3} from './audio/bgm3.mp3';
export {default as bgm4} from './audio/bgm4.mp3';
export {default as bgm5} from './audio/bgm5.mp3';
export {default as bgm6} from './audio/bgm6.mp3';
export {default as bgm7} from './audio/bgm7.mp3';
export {default as bgm8} from './audio/bgm8.mp3';
export {default as bgm9} from './audio/bgm9.mp3';
export {default as bgm10} from './audio/bgm10.mp3';
export {default as bgm11} from './audio/bgm11.mp3';
export {default as bgm12} from './audio/bgm12.mp3';

export {default as blip1} from './audio/blip1.mp3';
export {default as blip2} from './audio/blip2.mp3';
export {default as death} from './audio/death.mp3';
export {default as select} from './audio/select.mp3';
export {default as switchSFX} from './audio/switch.mp3';

export let initialText = 'Press any key to continue... ';

export let gameLogo = `
██████╗░░█████╗░██████╗░
██╔══██╗██╔══██╗██╔══██╗
██║░░██║███████║██║░░██║
██║░░██║██╔══██║██║░░██║
██████╔╝██║░░██║██████╔╝
╚═════╝░╚═╝░░╚═╝╚═════╝░

Dungeons, AI & Dragons.`;

async function getBase64FromTxt(url) {
    const response = await fetch(url);
    return await response.text();
}

export async function getDefaultCharacters() {
    let charPfp1 = await getBase64FromTxt('/src/lib/characters/char1.txt');
    let charPfp2 = await getBase64FromTxt('/src/lib/characters/char1.txt');
    let charPfp3 = await getBase64FromTxt('/src/lib/characters/char1.txt');

    return [
        {
            pfp: charPfp1,
            desc: '1',
        },
        {
            pfp: charPfp2,
            desc: '2',
        },
        {
            pfp: charPfp3,
            desc: '3',
        }
    ];
}

export let characterSheetPrompt = `Given a character description, or a character name, Create a character sheet that is humourous, detailed (but in one line). Example is mentioned below, use the exact format including spaces, the parameters have a number range to describe how good the parameter is from 0-20, no restrictions.
Example:
character description: John Wick
character sheet:
----------CHARACTER SHEET----------

Name: John Wick  
Class: Legendary Hitman
Race: Human (with possible supernatural endurance)  

Strength (20): Can clear a room of enemies before his coffee gets cold.  

Weakness: (5): Puppies, retirement, and a never-ending hit list.  

Fear (3): Running out of bullets, losing another dog, and office jobs.  

Agility (19): Moves like a ninja, fights like a wrecking ball.  

Morality (12): Chaotic Good—unless you wrong him, then it's Chaotic Obliteration.  

Fame (18): Known worldwide; feared even by people who have never met him.  

Special Abilities: Turns everyday objects into weapons and pain into motivation.  


Backstory:
Once a feared assassin, John Wick retired for love, but fate and some very unlucky gangsters forced him back into the game. What started as a personal vendetta spiraled into a global assassin war, all because people keep **underestimating John Wick.** Now, he seeks peace, but destiny (and his enemies) have other plans.


Here is the latest character description: `;

export let themePrompt = `Given a story, generate an image prompt for a pixel art image that visually represents the scene. The output must be in the following format:

tag1, tag2, tag3, ...

Example Input:

Story Introduction:

Joe Goldberg, the Stalkerazzi Bard, has found himself in the bustling city of New York, the perfect place to find his next muse. He's been working on a new love ballad, but he can't seem to find the right inspiration. That is, until he meets the beautiful and enigmatic librarian, Jane. She's intelligent, charming, and has a love for books that rivals his own. Joe is instantly smitten and begins to follow her every move, from her morning coffee run to her evening yoga class.

But just as Joe is about to make his move, he discovers that Jane is the lead singer of a popular punk rock band, and she's about to go on tour. Joe is heartbroken, but he's not about to let Jane slip away. He decides to follow her on tour, determined to win her heart and become her number one fan.

Challenging Scenario:

You've managed to sneak your way backstage at Jane's concert, but the security guards are getting suspicious. You're hiding behind a stack of amps, trying to catch a glimpse of Jane. Suddenly, one of the guards turns around and spots you.

Example Output:

pixel art, 32 bit, Jane, lead singer, petite, long black hair, dark eyeliner, top, leather pants, singing, microphone, Joe Goldberg, pale skin, dark hair, black hoodie, jeans, hiding, amps, backstage, low contrast, film grain, focus on Jane, focus on Joe
`;

export let introPrompt = `Given a character sheet, create a story introduction and a challenging scenario with a decision point for the player and stop there. DO NOT mention potential consequences or give options. The plot should be as detailed as a movie. The story should be tailored to the character's abilities, weaknesses, and backstory, and should be humorous.

Example Input:

Character Sheet:

Name: John Wick
Class: Lethally Efficient Murderhobo
Race: Human (but seriously, how does he do that?)
...
Example Output:

John Wick, the legendary assassin, finds himself in a seedy, neon-lit metropolis, Tokyo. He's been hired to retrieve a stolen antique katana, a family heirloom. The only problem? The thief is a yakuza boss with a penchant for violence and a taste for exotic pets.

Scenario:

You've tracked the thief to a dimly lit, smoke-filled yakuza club. The bouncer, a hulking brute with a face like a smashed watermelon, blocks your path. "Password?" he growls.

What do say?
`;

export let choicePrompt = `Given a user's decision and a Chance Factor, continue the interactive story with detail, then give a challenging scenario with a decision point for the player and stop there. Do not mention potential consequences or give options. The plot should be as detailed as a movie. The story should be tailored to the character's abilities, weaknesses, and backstory, and should be humorous.

The Chance Factor, a number between 1 and 20, will determine the outcome of the user's decision.

1-5: A critical failure. The user's plan goes horribly wrong, with potentially disastrous consequences.
6-10: A significant setback. The user's plan is partially successful, but at a high cost.
11-15: A mixed result. The user's plan is partially successful, with both positive and negative outcomes.
16-20: A critical success. The user's plan works perfectly, with unexpected benefits.
Example Input:

User's Decision and Chance Factor: "I'll shove Deepesh in front of the horde to distract them, then escape." {5}
Example Output:

You shove Deepesh into the horde of zombies, hoping to distract them long enough to make your escape. Unfortunately, your plan backfires spectacularly. Not only does Deepesh get devoured, but the zombies are now even more enraged. They turn their attention to you, their decaying jaws gnashing with renewed hunger.

You draw your trusty katana and prepare to fight. A horde of shambling corpses rushes towards you.

What do you do?
`;

export let continuePrompt = `
`;

export let finalePrompt = `
`;

export let summaryPrompt = `
`;

export let loadingText = `















                loading... 
               
               
               
               
               
               
               
               
               `