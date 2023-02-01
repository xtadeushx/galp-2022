function tabs(headerSelector, tabsSelector, contentSelector, activeClass, display = "flex") {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector);
    function hideTabContent() {
        content.forEach(element => {
            element.style.display = 'none';
        });
        tabs.forEach(tab => {
            tab.classList.remove(activeClass)
        })
    };

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tabs[i].classList.add(activeClass)
    };

    hideTabContent();
    showTabContent();
    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains(tabsSelector.replace(/\./, '')
            ||
            target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))){
            tabs.forEach((tab, i) => {
                if (target === tab || target.parentNode === tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
}

tabs('.tabs__header','.tabs__header-item', '.tabs__content-item', 'active')

