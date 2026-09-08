<script>
  import { page } from "$app/stores";
</script>

<nav>
  <a href="/" class:active={$page.url.pathname === "/"}>Iedereen</a>
  <a href="/docenten" class:active={$page.url.pathname === "/docenten"}>Docenten</a>
  <a href="/studenten" class:active={$page.url.pathname === "/studenten"}>Studenten</a>
</nav>

<style>
  nav {
    list-style: none;
    display: flex;
    gap: 1rem;

    a {
      color: black;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 99rem;
      border: 1px solid #4b5259;
      transition: 0.15s;

      &:hover {
        background-color: #4b5259;
        color: white;
      }
    }

    .active {
      background-color: #4b5259;
      color: white;
    }
  }
</style>
