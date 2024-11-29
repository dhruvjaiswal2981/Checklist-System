const API_URL = "http://localhost:3000/";

async function loadResults() {
  try {
    const response = await fetch(API_URL);
    const results = await response.json();

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Checklist Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${results.map(
            (result) => `
              <tr>
                <td>${result.name}</td>
                <td>${result.status}</td>
              </tr>
            `
          ).join("")}
        </tbody>
      </table>
    `;
  } catch (error) {
    console.error("Error loading results:", error);
  }
}

window.onload = loadResults;
