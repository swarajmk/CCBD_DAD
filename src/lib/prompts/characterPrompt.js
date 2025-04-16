export let characterSheetPrompt = `

Given a character description, or a character name, Create a character sheet that is humourous, detailed (but in one line). Example is mentioned below, use the exact format including spaces, the parameters have a number range to describe how good the parameter is from 0-20, no restrictions.
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






export let avatarGenerationPrompt = `

Given a character name and description, generate a highly detailed prompt for a Stable Diffusion model to create a **portrait** of the character. 

1. **Prioritize accurate details from well-known anime, game, or movie characters** using established canon appearances.  
2. **Override incorrect user-provided details if they conflict with known features** (e.g., Gojo Satoru has **white** hair and a blindfold, NOT blue hair).  
3. **Ensure correct colors for outfits and features** (e.g., Sage from Valorant has a **white and teal outfit**, NOT white and blue).  
4. **If the character is unknown, use the description as the primary source** to generate a visually appealing version.  
5. **For masked characters, like spiderman, describe their mask instead of facial features**   

---

### **Output Format:**
"A highly detailed, ultra-realistic portrait of [character name], [age], [gender], [anime/game/movie reference if applicable]. [Canon features include (eye color, hair style, skin color, defining traits, correct outfit colors)]. [If masked: Wearing (mask/helmet description), covering facial features]. The expression is [mood/expression], and the character is set against a [background description]. The lighting is [lighting style], with a [artistic/cinematic enhancement]. Rendered in [art style, e.g., anime-style, hyperrealistic, digital painting, fantasy illustration, etc.]. 


---

### **Example 1 (Anime Character - Accurate Details)**
**Input:**  
"Gojo Satoru from Jujutsu Kaisen"  

**Output:**  
"A highly detailed, ultra-realistic portrait of Gojo Satoru from *Jujutsu Kaisen*, a tall, charismatic man with **snow-white spiky hair** and a **black blindfold covering his eyes**. His **striking blue eyes glow when revealed**, and his smirk exudes confidence. His outfit is a **dark high-collared jacket**, reflecting his stylish, modern aesthetic. The background is a **mystical energy field with flowing blue-purple Cursed Energy wisps**. The lighting is cinematic, enhancing the cool tones of his design. Rendered in an anime-inspired hyperrealistic style."  

---

### **Example 2 (Game Character - Correct Outfit Colors)**  
**Input:**  
"Sage from Valorant"  

**Output:**  
"A highly detailed, ultra-realistic portrait of Sage from *Valorant*, a calm and composed healer with **long, flowing black hair tied into a high ponytail**. Her **sharp green eyes** convey wisdom and strength. She wears a **white and teal (blue-green) battle robe with black accents**, detailed with mystical jade symbols. The background is a futuristic battlefield, with glowing blue healing orbs floating around her hands. The lighting is soft yet dramatic, emphasizing her ethereal presence. Rendered in a semi-realistic Valorant-inspired style."  

---

### **Example 3 (Known Character - Knowledge Override Applied)**
**Input:**
"Rocky Bhai from KGF"

**Output:**
"A highly detailed, ultra-realistic portrait of Rocky Bhai from KGF, a rugged, intense man with **long, thick, unkempt black hair** and a well-groomed beard. His piercing gaze is filled with determination. His expression is brooding, with a slight smirk. The background is a dusty, golden-hued battlefield with sunlight cutting through the haze. The lighting is dramatic, with deep shadows enhancing his features. Rendered in a cinematic hyperrealistic style with sharp details and intense contrast."

---

### **Example 4 (Masked Character)**
**Input:**
"Spiderman"

**Output:**
"A highly detailed, ultra-realistic portrait of Spider-Man in his iconic **fully masked** red and blue suit, featuring large, reflective white eye lenses. His mask is made of tight, web-patterned fabric that highlights the contours of his face. The background is a blurred New York City skyline at sunset, with warm hues reflecting off the glass buildings. The lighting is cinematic, with a soft golden glow. Rendered in a hyperrealistic comic-book style."

---

`;