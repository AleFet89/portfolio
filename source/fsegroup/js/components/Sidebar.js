export default class Sidebar {
    static start() {
        let button = document.querySelectorAll('[sidebar-button]')
        if (!button) return
        button.forEach((el) => {
            let sidebar = el.closest('[sidebar-item]')
            let submenu = sidebar.querySelector('[sidebar-menu]')
            if (sidebar.classList.contains('open-menu')) {
                submenu.style.height = submenu.scrollHeight + 'px'
            }
            el.addEventListener('click', () => {
                if (sidebar.classList.contains('open-menu')) {
                    sidebar.classList.remove('open-menu')
                    submenu.style.height = '0'
                } else {
                    sidebar.classList.add('open-menu')
                    submenu.style.height = submenu.scrollHeight + 'px'
                }
            })
        })
    }
}