// region Imports
import "./emote.scss";
import { EMOTES } from "../../../../const/emotes";
// endregion

export const replaceEmotes = () => {
    const allParagraphs = document.getElementsByTagName("p");

    const array = [...allParagraphs];

    const replaceableElements = array.filter(element =>
      EMOTES.find((emote) => element.innerText.includes(emote.tag))
    );

    if (!replaceableElements.length) {
        return;
    }

    replaceableElements.forEach(element => {
        const foundEmotes = EMOTES.filter(emote => element.innerText.includes(emote.tag));

        foundEmotes.forEach((emote) => {
            element.innerHTML = element.innerHTML.replaceAll(
              emote.tag,
              `<span 
                        class="replaced-emote" 
                        style="background-image: url(${emote.url})"
                    >
                    ${emote.tag}
                </span>`
            );
        });
    });
};