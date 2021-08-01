function employeeCard(data) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">${data.role}</p>
    </div>
    <ul class="list-group list-group-flush">

      <li class="list-group-item">${data.id}</li>
      <li class="list-group-item">${data.email}</li>
    </ul>
  </div>`;
  }
  
  module.exports = employeeCard;
