        document.addEventListener('DOMContentLoaded', function () {
            const btn = document.querySelector('#btn');
            const navtoggle = document.querySelector('.navtoggle');
            const toggleIcon = document.getElementById('toggle-icon');

            btn.onclick = function () {
                if (navtoggle.classList.contains('collapsed')) {
                    navtoggle.classList.remove('collapsed');
                    navtoggle.classList.add('expanded');
                    toggleIcon.src = 'images/arrow-left.png'; // Change to left arrow when expanded
                } else {
                    navtoggle.classList.remove('expanded');
                    navtoggle.classList.add('collapsed');
                    toggleIcon.src = 'images/arrow-right.png'; // Change to right arrow when collapsed
                }
            };

            const friesButton = document.getElementById('friesButton');
            const sidebar = document.getElementById('sidebar');

            friesButton.onclick = function () {
                if (sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    sidebar.setAttribute('aria-hidden', 'true');
                } else {
                    sidebar.classList.add('open');
                    sidebar.setAttribute('aria-hidden', 'false');
                }
            };
        });
        document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchPopup = document.getElementById('searchPopup');
    const closePopup = document.querySelector('.search-popup .close');
    const searchSubmit = document.getElementById('searchSubmit');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchButton.onclick = function () {
        searchPopup.style.display = 'block';
    };

    closePopup.onclick = function () {
        searchPopup.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == searchPopup) {
            searchPopup.style.display = 'none';
        }
    };

    searchSubmit.onclick = function () {
        const query = searchInput.value.toLowerCase().trim();
        if (query === "") {
            searchResults.innerHTML = "<p>Please enter a search term.</p>";
            return;
        }

        // Mock search results
        const results = [
            { name: "Tropical Destinations", url: "explore.html" },
            { name: "Flight Information", url: "transportation.html" },
            { name: "Car Rentals", url: "transportation.html" },
            { name: "Cruise Options", url: "transportation.html" },
            { name: "Accommodation", url: "stays.html" },
            { name: "Food", url: "dining.html" },
            { name: "Eat", url: "dining.html" },
            { name: "Fun", url: "events.html" },
            { name: "Stuff to do", url: "events.html" },
            { name: "Where to go", url: "events.html" },
            { name: "Excursions", url: "events.html" },
            { name: "Dining", url: "dining.html" },
            { name: "Flights", url: "transportation.html" },
            { name: "Jet ski", url: "events.html" },
            { name: "Honeymoon", url: "stays.html" },
            { name: "Hiking", url: "explore.html" },
            { name: "Info", url: "info.html" },
            { name: "Nightlife", url: "events.html" },
            { name: "Beach Activities", url: "explore.html" },
            { name: "Snorkeling", url: "explore.html" },
            { name: "Scuba Diving", url: "explore.html" },
            { name: "Island Tours", url: "events.html" },
            { name: "Travel Tips", url: "info.html" },
            { name: "Weather Information", url: "info.html" },
            { name: "Local Events", url: "events.html" },
            { name: "Cultural Activities", url: "events.html" },
            { name: "Family Fun", url: "events.html" },
            { name: "Romantic Getaways", url: "stays.html" },
            { name: "Adventure Sports", url: "events.html" },
            { name: "Eco-Tours", url: "explore.html" },
            { name: "Water Sports", url: "events.html" },
            { name: "Golf Courses", url: "events.html" },
            { name: "Luxury Resorts", url: "stays.html" },
            { name: "Budget Stays", url: "stays.html" },
            { name: "Local Cuisine", url: "dining.html" },
            { name: "Travel Deals", url: "stays.html" },
            { name: "Rental Car", url: "transportation.html" },
            { name: "Travel Insurance", url: "info.html" },
            { name: "Passport and Visa", url: "info.html" },
            { name: "Health Precautions", url: "info.html" },
            { name: "Currency", url: "info.html" },
            { name: "Language", url: "info.html" },
            { name: "Weather", url: "info.html" },
            { name: "Sources", url: "sources.html" },
            { name: "Citations", url: "sources.html" },
            { name: "Beach Resorts", url: "stays.html" }
        ];

        const filteredResults = results.filter(result => result.name.toLowerCase().includes(query));

        if (filteredResults.length > 0) {
            searchResults.innerHTML = filteredResults.map(result => `<p><a href="${result.url}">${result.name}</a></p>`).join('');
        } else {
            searchResults.innerHTML = "<p>No results found.</p>";
        }
    };
});