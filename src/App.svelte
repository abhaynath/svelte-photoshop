<script lang="ts">
  import LayerRow from "./components/layers/LayerRow.svelte";
  import Button from "@smui/button";
  import IconButton from "@smui/icon-button";
  let count = 0;
  let clicked = 0;
</script>

<div>
  <!-- <LayerRow /> -->
  <Button
    on:click={() => {
      count = count + 1;
    }}>Count = {count}</Button
  >
  <div style="display: flex; align-items: center;">
    <IconButton class="material-icons" on:click={() => clicked++}>build</IconButton>
  </div>
  <div style="display: flex; align-items: center;">
    <IconButton class="material-icons" on:click={() => clicked++} disabled>search</IconButton> (disabled)
  </div>
  <div style="display: flex; align-items: center;">
    <IconButton class="material-icons" on:click={() => clicked++} ripple={false}>add_shopping_cart</IconButton> (no ripple)
  </div>

  <pre class="status">Clicked: {clicked}</pre>
</div>

<style>
  div {
    /* background-color: gray; */
    /* color: white; */
  }
</style>
