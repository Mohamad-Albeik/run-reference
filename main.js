document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize UI
    UI.init(runData);

    // 2. DOM Elements
    const searchInput = document.getElementById('searchInput');
    const sections = document.querySelectorAll('.category-section');
    const sidebarNav = document.getElementById('sidebarNav');
    const logo = document.querySelector('.logo');
    const cards = document.querySelectorAll('.command-card');

    // 3. Search Logic
    const handleSearch = (query) => {
        const term = query.toLowerCase().trim();
        let hasResults = false;

        sections.forEach(section => {
            let sectionHasVisibleCards = false;
            const sectionCards = section.querySelectorAll('.command-card');

            sectionCards.forEach(card => {
                const keywords = card.dataset.keywords.toLowerCase();
                const isMatch = keywords.includes(term);
                
                card.style.display = isMatch ? 'block' : 'none';
                if (isMatch) sectionHasVisibleCards = true;
            });

            // Hide empty categories
            section.style.display = sectionHasVisibleCards ? 'block' : 'none';
            
            // Update Sidebar Links opacity based on visibility
            const navLink = document.querySelector(`.nav-link[data-target="${section.id}"]`);
            if(navLink) {
                navLink.style.opacity = sectionHasVisibleCards ? '1' : '0.3';
                navLink.style.pointerEvents = sectionHasVisibleCards ? 'auto' : 'none';
            }

            if (sectionHasVisibleCards) hasResults = true;
        });
        
        // Update URL state without reloading
        if(term) {
            history.replaceState(null, null, `#search=${encodeURIComponent(term)}`);
        } else {
            history.replaceState(null, null, ' ');
        }
    };

    // 4. Event Listeners
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));

    logo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        searchInput.value = '';
        handleSearch('');
        history.replaceState(null, null, ' ');
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        // Press '/' to focus search
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
        // Press 'Esc' to clear search
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.blur();
            handleSearch('');
        }
    });

    // Smooth Scroll for Sidebar Links
    sidebarNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Use scrollIntoView for a smooth transition
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Update the URL hash without jumping
                history.pushState(null, null, targetId);
            }
        }
    });

    // Active Nav Link on Scroll (Scroll-Spy using IntersectionObserver)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                // Remove active class from all links first
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                if(navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-40% 0px -40% 0px', // Activates when the section is more centered in the viewport
        threshold: 0.5
    });

    sections.forEach(section => observer.observe(section));

    // 5. Initial State Check (URL Hash)
    const checkHash = () => {
        const hash = window.location.hash;
        if (hash.includes('search=')) {
            const term = decodeURIComponent(hash.split('search=')[1]);
            searchInput.value = term;
            handleSearch(term);
        }
    };
    
    checkHash();

    // 6. Inject Copyright
    const injectCopyright = () => {
        const footer = document.querySelector('.app-footer');
        if (footer) {
            const copyrightEl = document.createElement('p');
            copyrightEl.className = 'copyright';
            copyrightEl.innerHTML = `© 2026 Windows Run Command Reference.<br>Built with passion and continuous learning.`;
            footer.appendChild(copyrightEl);
        }
    };
    injectCopyright();
});
