export default class OnChange {
    static addFile() {
        let inputFile = document.querySelector('[name="file"]')
        let inputText = document.querySelector('.form-file-format')
        if (!inputFile) return
        inputFile.addEventListener('change', () => {
            inputText.textContent = 'Файл добавлен'
        })
    }
}