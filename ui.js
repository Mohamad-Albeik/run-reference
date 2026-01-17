const UI = {
    // Icons mapping (Inline SVG for portability)
    icons: {
        cpu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
        settings: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
        tool: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
        folder: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>'
    },

    init(data) {
        this.renderSidebar(data);
        this.renderMainContent(data);
        this.setupDelegatedEvents();
    },

    renderSidebar(data) {
        const nav = document.getElementById('sidebarNav');
        nav.innerHTML = data.map(cat => 
            `<a href="#${cat.id}" class="nav-link" data-target="${cat.id}">${cat.category}</a>`
        ).join('');
    },

    renderMainContent(data) {
        const main = document.getElementById('mainContent');
        main.innerHTML = data.map(cat => this.createCategoryHTML(cat)).join('');
    },

    createCategoryHTML(category) {
        const iconSvg = this.icons[category.icon] || '';
        return `
            <section id="${category.id}" class="category-section">
                <h2 class="category-title">${iconSvg} ${category.category}</h2>
                <div class="cards-grid">
                    ${category.commands.map(cmd => this.createCardHTML(cmd)).join('')}
                </div>
            </section>
        `;
    },

    createCardHTML(cmd) {
        const badges = [];
        if (cmd.admin) badges.push('<span class="badge admin">Admin</span>');
        if (cmd.dangerous) badges.push('<span class="badge danger">Warning</span>');

        // Dangerous content logic
        const contentClass = cmd.dangerous ? 'blur-content' : '';
        const overlay = cmd.dangerous ? `
            <div class="blur-overlay">
                <button class="btn-reveal">Reveal Dangerous Command</button>
            </div>
        ` : '';

        return `
            <article class="command-card" data-keywords="${cmd.name} ${cmd.desc} ${cmd.keywords ? cmd.keywords.join(' ') : ''}">
                ${overlay}
                <div class="${contentClass}">
                    <div class="card-header">
                        <span class="cmd-name">${cmd.name}</span>
                        <div class="badges">${badges.join('')}</div>
                    </div>
                    <p class="cmd-desc">${cmd.desc}</p>
                    <div class="syntax-block">
                        <code>${cmd.syntax}</code>
                        <button class="btn-copy" aria-label="Copy command" data-cmd="${cmd.syntax}">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        </button>
                    </div>
                </div>
            </article>
        `;
    },

    setupDelegatedEvents() {
        const main = document.getElementById('mainContent');

        main.addEventListener('click', (e) => {
            // Handle Reveal
            if (e.target.classList.contains('btn-reveal')) {
                const card = e.target.closest('.command-card');
                card.classList.add('revealed');
            }

            // Handle Copy
            const copyBtn = e.target.closest('.btn-copy');
            if (copyBtn) {
                const text = copyBtn.dataset.cmd;
                navigator.clipboard.writeText(text).then(() => {
                    const originalHTML = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<span style="color: var(--color-success)">✓</span>';
                    setTimeout(() => copyBtn.innerHTML = originalHTML, 1500);
                });
            }
        });
    }
};
