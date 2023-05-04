import items from "./jobs.js";
const jobs = items.jobs;

jobs.forEach(job => {
  const jobItem = document.createElement('div');
  jobItem.classList.add('job-item');
  jobItem.innerHTML = `
        <h3>${job.title}</h3>
        <p>Salary: ${job.salary}</p>
        <p>City: ${job.city}</p>
      `;
  document.getElementById('search-results').appendChild(jobItem);
});

document.getElementById('search-btn').addEventListener('click', (event) => {
  event.preventDefault();
  const searchQuery = document.getElementById('search-input').value.toLowerCase();
  const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchQuery));

  document.getElementById('search-results').innerHTML = '';

  if (filteredJobs.length > 0) {
    filteredJobs.forEach(job => {
      const jobItem = document.createElement('div');
      jobItem.classList.add('job-item');
      jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p>Salary: ${job.salary}</p>
            <p>City: ${job.city}</p>
          `;
      document.getElementById('search-results').appendChild(jobItem);
    });
  } else {
    const noResults = document.createElement('div');
    noResults.textContent = 'No results found.';
    document.getElementById('search-results').appendChild(noResults);
  }
});





