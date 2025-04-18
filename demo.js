document.addEventListener('DOMContentLoaded', function() {
    // Tab Navigation
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            
            // Deactivate all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            // Activate clicked tab and corresponding panel
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
    
    // Demo influencer data
    const influencers = [
        {
            id: 1,
            name: 'Sophia Chen',
            handle: '@eco.sophie',
            category: 'Sustainable Lifestyle',
            followers: '32.4K',
            engagement: '5.8%',
            posts: '428',
            tags: ['Sustainability', 'Vegan', 'Zero Waste'],
            matchScore: '94%',
            location: 'Portland, OR',
            audience: { female: 78, male: 22, age: '18-34' }
        },
        {
            id: 2,
            name: 'Marcus Johnson',
            handle: '@urban.fitness',
            category: 'Fitness & Wellness',
            followers: '87.1K',
            engagement: '4.2%',
            posts: '693',
            tags: ['Fitness', 'Nutrition', 'Mental Health'],
            matchScore: '89%',
            location: 'Chicago, IL',
            audience: { female: 45, male: 55, age: '25-40' }
        },
        {
            id: 3,
            name: 'Aisha Rahman',
            handle: '@aisha.creates',
            category: 'DIY & Crafts',
            followers: '12.8K',
            engagement: '7.9%',
            posts: '246',
            tags: ['DIY', 'Home Decor', 'Crafting'],
            matchScore: '87%',
            location: 'Atlanta, GA',
            audience: { female: 82, male: 18, age: '24-45' }
        },
        {
            id: 4,
            name: 'David Kim',
            handle: '@tech.david',
            category: 'Tech Reviews',
            followers: '156K',
            engagement: '3.8%',
            posts: '512',
            tags: ['Tech', 'Gadgets', 'Reviews'],
            matchScore: '85%',
            location: 'San Francisco, CA',
            audience: { female: 35, male: 65, age: '18-35' }
        },
        {
            id: 5,
            name: 'Elena Martinez',
            handle: '@travel.with.elena',
            category: 'Travel & Adventure',
            followers: '64.7K',
            engagement: '5.1%',
            posts: '378',
            tags: ['Travel', 'Photography', 'Culture'],
            matchScore: '82%',
            location: 'Miami, FL',
            audience: { female: 63, male: 37, age: '22-38' }
        },
        {
            id: 6,
            name: 'Jordan Taylor',
            handle: '@plant.based.j',
            category: 'Plant-Based Cooking',
            followers: '28.3K',
            engagement: '6.2%',
            posts: '291',
            tags: ['Vegan', 'Cooking', 'Recipes'],
            matchScore: '80%',
            location: 'Austin, TX',
            audience: { female: 68, male: 32, age: '25-45' }
        }
    ];
    
    // Generate influencer cards
    const influencerGrid = document.getElementById('influencer-grid');
    
    function renderInfluencers() {
        influencerGrid.innerHTML = '';
        
        influencers.forEach(influencer => {
            const card = document.createElement('div');
            card.className = 'influencer-card';
            card.innerHTML = `
                <div class="influencer-banner"></div>
                <div class="influencer-profile">
                    <div class="influencer-avatar">
                        <img src="https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 70) + 1}.jpg" alt="${influencer.name}">
                    </div>
                </div>
                <div class="influencer-details">
                    <div class="influencer-name">${influencer.name}</div>
                    <div class="influencer-category">${influencer.handle} · ${influencer.category}</div>
                    <div class="influencer-stats">
                        <div class="stat">
                            <div class="stat-value">${influencer.followers}</div>
                            <div class="stat-label">Followers</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${influencer.engagement}</div>
                            <div class="stat-label">Engagement</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${influencer.posts}</div>
                            <div class="stat-label">Posts</div>
                        </div>
                    </div>
                    <div class="influencer-tags">
                        ${influencer.tags.map(tag => `<div class="tag">${tag}</div>`).join('')}
                    </div>
                    <div class="match-score">
                        <div class="match-label">AI Match Score</div>
                        <div class="match-value">${influencer.matchScore}</div>
                    </div>
                </div>
            `;
            influencerGrid.appendChild(card);
            
            // Add click event to show detailed profile modal
            card.addEventListener('click', () => {
                alert(`Viewing detailed profile for ${influencer.name}\n\nLocation: ${influencer.location}\nAudience Demographics: ${influencer.audience.female}% female, ${influencer.audience.male}% male\nAge Range: ${influencer.audience.age}\n\nThis would show a full analytics dashboard in the complete app.`);
            });
        });
    }
    
    renderInfluencers();
    
    // Performance Chart
    if (document.getElementById('performance-chart')) {
        const ctx = document.getElementById('performance-chart').getContext('2d');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Impressions (thousands)',
                        data: [120, 190, 230, 290, 320, 450],
                        borderColor: '#3FA7A7',
                        backgroundColor: 'rgba(63, 167, 167, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Engagement Rate (%)',
                        data: [3.2, 3.8, 4.1, 4.3, 4.7, 4.9],
                        borderColor: '#2E4E4E',
                        backgroundColor: 'rgba(46, 78, 78, 0.05)',
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '6-Month Campaign Performance'
                    }
                }
            }
        });
    }
    
    // Search functionality simulation
    const searchBox = document.querySelector('.search-box');
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length > 2) {
            setTimeout(() => {
                // Simulate search delay for realism
                alert(`Searching for "${searchTerm}"...\n\nIn the full app, this would filter the influencer list based on your search.`);
            }, 500);
        }
    });
    
    // Filter simulation
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            // For demo purposes, we'll just show an alert
            setTimeout(() => {
                alert(`Filter applied: ${filter.textContent}\n\nIn the full app, this would show only influencers matching this criteria.`);
            }, 100);
        });
    });
    
    // Create campaign button
    const createCampaignBtn = document.getElementById('create-campaign');
    createCampaignBtn.addEventListener('click', () => {
        alert("Campaign Creation Wizard\n\n1. Set campaign goals\n2. Define target audience\n3. Select influencers\n4. Set budget\n5. Define deliverables\n6. Review and launch\n\nThis would open a step-by-step wizard in the full application.");
    });
});