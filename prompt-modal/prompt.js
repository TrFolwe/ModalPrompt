//PROMPT QUESTİON BUTTONS
document.querySelectorAll(".prompt-modal[type='prompt-question'] .modal-elements button[modal-btn-type='ok'], .prompt-modal[type='prompt-question'] .modal-elements button[modal-btn-type='cancel']").forEach(modalBtn => {
    modalBtn.addEventListener("click", () => {
        if (modalBtn.getAttribute("modal-btn-type") === "ok") { //OK
            alert("Kabul edildi!")
        } else if (modalBtn.getAttribute("modal-btn-type") === "cancel") { //CANCEL
            alert("Reddedildi!");
        }
    });
});

//INPUT PROMPT SUBMIT BUTTON

document.querySelectorAll(`.prompt-modal[type='input-question']`).forEach(modals => {
    const modalInputs = modals.querySelectorAll("input");
    modals.querySelector(".modal-elements button")?.addEventListener("click", () => {
        const toJSON = () => {
            const jsonData = [];
            Array.from(modalInputs).forEach(input => {
                jsonData.push({
                    name: input.getAttribute("name") || undefined,
                    value: input.value.trim() || undefined
                });
            });
            return jsonData;
        }
    });
});