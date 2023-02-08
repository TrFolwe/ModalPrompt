/**
 * 
 * @param {*} promptType 
 */

const PROMPT_TYPES = [
    "input",
    "question"
];


const PROMPTS = [];

/**
 * 
 * @param {*} promptName 
 * @param {*} sourceElement 
 * @param {*} promptType 
 * @param {*} question 
 * @param {*} inputData 
 * @param {*} promptCallback 
 */
function showPrompt(promptName, sourceElement, promptType, question, inputData = undefined, promptCallback) {
    if (!PROMPT_TYPES.includes(promptType)) throw new Error(`Prompt type not found, Prompts: ${PROMPT_TYPES.join(", ")}`);
    const promptElement = `
    <div promptName="${promptName}" type="${promptType}-prompt" class="prompt-modal">
        <header class="prompt-header">
            <h4>${question}</h4>
            <hr style="margin: 4px">
        </header>
        <div class="modal-elements">
        ${promptType === "question" ? `<button onclick="${() => promptCallback("ok")}" modal-btn-type="ok" class="ok-btn">OK</button>
        <button onclick="${() => promptCallback("cancel")}" modal-btn-type="cancel" class="cancel-btn">CANCEL</button>` : (() => {
            if (inputData) return [...inputData.map(input => `<input name="${input?.name}" type="${input?.type || "text"}" placeholder="${input?.placeholder}">`), `<button onclick='${() => promptCallback(
                (() => {
                    const inputJsonData = [];
                    Array.from(sourceElement.querySelectorAll(`.prompt-modal[promptName="${promptName}"] .modal-elements input`)).forEach(input => {
                        inputJsonData.push({
                            name: input.getAttribute("name") || undefined,
                            value: input.value.trim() || undefined
                        });
                    });
                    return inputJsonData;
                })()
            )}' style="width: 100%;">GÖNDER</button>`].join('')
        })()}
        </div>
    `;
    sourceElement.innerHTML += promptElement;
    PROMPTS.push({
        "promptName": promptName,
        "promptElement": sourceElement.querySelector(`.prompt-modal[promptName="${promptName}"]`)
    });
}