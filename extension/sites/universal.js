window.BananaSites = window.BananaSites || {};

class UniversalSite extends window.BananaSites.Base {
    constructor() {
        super();
        this.lastFocusedElement = null;
        this.trackFocusedElement();
    }

    trackFocusedElement() {
        document.addEventListener('focusin', (e) => {
            if (this.isEditableElement(e.target)) {
                this.lastFocusedElement = e.target;
            }
        });
    }

    async findPromptInput() {
        if (this.lastFocusedElement && this.isEditableElement(this.lastFocusedElement)) {
            return this.lastFocusedElement;
        }

        const active = document.activeElement;
        if (this.isEditableElement(active)) {
            return active;
        }
        return null;
    }

    handleInputMissing() {
        alert('🍌 请先点击输入框，然后再右键选择 Banana Prompts');
    }
};
