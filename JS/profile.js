document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage
    
    // If the user is not logged in, redirect to the login page
    if (!user) {
      window.location.href = 'login.html'; // Redirect to login if no user data exists
    } else {
      // Populate the profile with user's data
      const profileInfo = document.getElementById('user-profile-info');
      profileInfo.innerHTML = `
        <h3>Name: ${user.name}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
      `;
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('user'); // Remove user data from localStorage
      window.location.href = 'Home.html'; // Redirect to the homepage
    });
  });