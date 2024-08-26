import Fetch from './form/Fetch.js'

export default class Logout {
    static exit(popup) {
        let btn = document.querySelector('[exit-lk]')
        if (!btn) return
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const formData = new FormData()
            formData.append('modul', 'logout')
            Fetch.request(formData)
            .then(() => {
                document.location.reload()
            })
            .catch(() => {
                popup.confirm('#server-popup') 
                setTimeout(() => popup.close(), 3000)
            })
        })
    }
}