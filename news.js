document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '375b2959144f49048315800b1699a4ed';
    const apiUrl = `https://newsapi.org/v2/everything?q=stocks&apiKey=${apiKey}`;
    const newsSection = document.getElementById('news-section');
    const searchInput = document.getElementById('search');

    async function fetchNews(query = 'stocks') {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
            const data = await response.json();
            displayNews(data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    function displayNews(articles) {
        newsSection.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            articleElement.innerHTML = `
                <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
                <p>${article.description}</p>
                <p><small>Source: ${article.source.name}</small></p>
            `;
            newsSection.appendChild(articleElement);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        fetchNews(query);
    });

    fetchNews();
});