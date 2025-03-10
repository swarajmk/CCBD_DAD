export {default as Loading} from './img/loading.gif';
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

export {default as TypingSFX} from './audio/boop.mp3';
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

async function getTxtFile(url) {
    const response = await fetch(url);
    return await response.text();
}

export async function getDefaultCharacters() {
    let char1 = await getTxtFile('/characters/char1.txt');
    let char2 = await getTxtFile('/characters/char2.txt');
    let char3 = await getTxtFile('/characters/char3.txt');
    let char4 = await getTxtFile('/characters/char4.txt');
    let char5 = await getTxtFile('/characters/char5.txt');
    let char6 = await getTxtFile('/characters/char6.txt');
    let char7 = await getTxtFile('/characters/char7.txt');
    let char8 = await getTxtFile('/characters/char8.txt');
    let char9 = await getTxtFile('/characters/char9.txt');
    let char10 = await getTxtFile('/characters/char10.txt');
    let charSelmon1 = await getTxtFile('/characters/charSelmon1.txt');
    let charSelmon2 = await getTxtFile('/characters/charSelmon2.txt');
    let charSelmon3 = await getTxtFile('/characters/charSelmon3.txt');

    let sheet1 = await getTxtFile('/characters/sheet1.txt');
    let sheet2 = await getTxtFile('/characters/sheet2.txt');
    let sheet3 = await getTxtFile('/characters/sheet3.txt');
    let sheet4 = await getTxtFile('/characters/sheet4.txt');
    let sheet5 = await getTxtFile('/characters/sheet5.txt');
    let sheet6 = await getTxtFile('/characters/sheet6.txt');
    let sheet7 = await getTxtFile('/characters/sheet7.txt');
    let sheet8 = await getTxtFile('/characters/sheet8.txt');
    let sheet9 = await getTxtFile('/characters/sheet9.txt');
    let sheet10 = await getTxtFile('/characters/sheet10.txt');
    let sheetSelmon1 = await getTxtFile('/characters/sheetSelmon1.txt');
    let sheetSelmon2 = await getTxtFile('/characters/sheetSelmon2.txt');
    let sheetSelmon3 = await getTxtFile('/characters/sheetSelmon3.txt');

    return [
        {
            name: 'Deeps',
            pfp: char1,
            desc: sheet1,
        },
        {
            name: 'Aphrodite',
            pfp: char2,
            desc: sheet2,
        },
        {
            name: 'Drawf',
            pfp: char3,
            desc: sheet3,
        },
        {
            name: 'Cham',
            pfp: char4,
            desc: sheet4,
        },
        {
            name: 'Edamame',
            pfp: char5,
            desc: sheet5,
        },
        {
            name: 'Soup',
            pfp: char6,
            desc: sheet6,
        },
        {
            name: 'Cobra Bhai',
            pfp: char7,
            desc: sheet7,
        },
        {
            name: 'Dr. Volt',
            pfp: char8,
            desc: sheet8,
        },
        {
            name: 'The Penguin',
            pfp: char9,
            desc: sheet9,
        },
        {
            name: 'Raven',
            pfp: char10,
            desc: sheet10,
        },
        {
            name: 'Deer Killer',
            pfp: charSelmon1,
            desc: sheetSelmon1,
        },
        {
            name: 'Heavy Driver',
            pfp: charSelmon2,
            desc: sheetSelmon2,
        },
        {
            name: 'Selmon Bhai',
            pfp: charSelmon3,
            desc: sheetSelmon3,
        },
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

Weakness (5): Puppies, retirement, and a never-ending hit list.  

Fear (3): Running out of bullets, losing another dog, and office jobs.  

Agility (19): Moves like a ninja, fights like a wrecking ball.  

Morality (12): Chaotic Good—unless you wrong him, then it's Chaotic Obliteration.  

Fame (18): Known worldwide; feared even by people who have never met him.  

Special Abilities: Turns everyday objects into weapons and pain into motivation.  


Backstory:
Once a feared assassin, John Wick retired for love, but fate and some very unlucky gangsters forced him back into the game. What started as a personal vendetta spiraled into a global assassin war, all because people keep **underestimating John Wick.** Now, he seeks peace, but destiny (and his enemies) have other plans.


Here is the latest character description: `;


















export let avatarGenerationPrompt = `Given a character name, description, and character sheet, generate a highly detailed prompt for a Stable Diffusion model to create a **portrait** of the character. 

1. **Prioritize the actual appearance of the character based on knowledge** (if the character exists in popular media, mythology, or history).    
2. **If the character is unknown, use the description as the primary source** and generate a detailed visual representation.  
3. **For masked characters, describe their mask or helmet instead of facial features.**  


The output must be in the following format:

"portrait of [character name], [age], [gender], [ethnicity or fantasy race if applicable]. [If known character: Using well-established appearance, featuring (eye color, hair style, defining traits)]. [If unknown: Generating features based on the description provided]. [If masked: Wearing (mask/helmet description), covering facial features]. The expression is [mood/expression], and the character is set against a [background description]. The lighting is [lighting style], with a [artistic/cinematic enhancement]. Rendered in [art style, e.g., hyperrealistic, digital painting, anime-style, fantasy illustration, etc.]. 



---

### **Example 1 (Known Character - Knowledge Override Applied)**
**Input:**
"Generate a portrait of Rocky Bhai from KGF, short-haired version."

**Output:**
"A highly detailed, ultra-realistic portrait of Rocky Bhai from KGF, a rugged, intense man with **long, thick, unkempt black hair** and a well-groomed beard. His piercing gaze is filled with determination. His expression is brooding, with a slight smirk. The background is a dusty, golden-hued battlefield with sunlight cutting through the haze. The lighting is dramatic, with deep shadows enhancing his features. Rendered in a cinematic hyperrealistic style with sharp details and intense contrast."

---

### **Example 2 (Masked Character)**
**Input:**
"Generate a portrait of Spider-Man, showing his brown eyes and messy hair."

**Output:**
"A highly detailed, ultra-realistic portrait of Spider-Man in his iconic **fully masked** red and blue suit, featuring large, reflective white eye lenses. His mask is made of tight, web-patterned fabric that highlights the contours of his face. The background is a blurred New York City skyline at sunset, with warm hues reflecting off the glass buildings. The lighting is cinematic, with a soft golden glow. Rendered in a hyperrealistic comic-book style."


---
`;
















export let themePrompt = `Given a story, generate an image prompt for a pixel art image that visually represents the scene. The output must be in the following format:

tag1, tag2, tag3, ...

Example Input:

Story Introduction:

Joe Goldberg, the Stalkerazzi Bard, has found himself in the bustling city of New York, the perfect place to find his next muse. He's been working on a new love ballad, but he can't seem to find the right inspiration. That is, until he meets the beautiful and enigmatic librarian, Jane. She's intelligent, charming, and has a love for books that rivals his own. Joe is instantly smitten and begins to follow her every move, from her morning coffee run to her evening yoga class.

But just as Joe is about to make his move, he discovers that Jane is the lead singer of a popular punk rock band, and she's about to go on tour. Joe is heartbroken, but he's not about to let Jane slip away. He decides to follow her on tour, determined to win her heart and become her number one fan.

Challenging Scenario:

You've managed to sneak your way backstage at Jane's concert, but the security guards are getting suspicious. You're hiding behind a stack of amps, trying to catch a glimpse of Jane. Suddenly, one of the guards turns around and spots you.

Example Output:

pixel art, 32 bit, Jane, lead singer, petite, long black hair, dark eyeliner, ripped fishnet top, leather pants, singing, microphone, Joe Goldberg, pale skin, dark hair, black hoodie, jeans, hiding, amps, backstage, low contrast, film grain, focus on Jane, focus on Joe
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

What do you say?
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