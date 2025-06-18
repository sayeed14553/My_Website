// 🌗 Dark Mode Toggle
const themeToggle = document.getElementById('toggle-theme');
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  themeToggle.textContent = current === 'dark' ? '🌙' : '☀️';
});

// 📰 Blog Pagination
const posts = [
  {
    title: "Why Black People are Safe?",
    date: "May 19, 2025",
    excerpt: "About the effect of UV rays on our skin",
    link: "https://sci009hub.blogspot.com/#:~:text=Do%20you%20know,sun%27s%20strongest%20hours."
  },
  {
    title: "💡 Learning HTML & CSS",
    date: "May 19, 2025",
    excerpt: "My tips for beginners getting started with frontend.",
    link: "#"
  },
  {
    title: "📱 Building Responsive Layouts",
    date: "May 20, 2025",
    excerpt: "How I made my site mobile-friendly.",
    link: "#"
  }
];

let currentPage = 0;
const postsPerPage = 2;

function displayPosts() {
  const container = document.getElementById("blog-container");
  container.innerHTML = "";
  const start = currentPage * postsPerPage;
  const end = start + postsPerPage;
  const pagePosts = posts.slice(start, end);

  pagePosts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p><em>${post.date}</em></p>
      <p>${post.excerpt}</p>
      <a href="${post.link}">Read More →</a>
    `;
    container.appendChild(div);
  });
}

function changePage(direction) {
  const maxPage = Math.ceil(posts.length / postsPerPage) - 1;
  currentPage = Math.max(0, Math.min(currentPage + direction, maxPage));
  displayPosts();
}

displayPosts();
