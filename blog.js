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
    title: "🚀 My First Blog Post",
    date: "May 18, 2025",
    excerpt: "A quick intro to my web dev journey and this site.",
    link: "blog/post1.html"
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
