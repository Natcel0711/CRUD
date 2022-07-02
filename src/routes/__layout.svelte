<script>
  import "../app.css";
  import Nav from "../components/nav.svelte";
  import {supabase} from "../supabase.js";
  console.log(supabase);
</script>
<Nav/>
<main class="p-8 max-w-6xl mx-auto">
  <slot />
</main>