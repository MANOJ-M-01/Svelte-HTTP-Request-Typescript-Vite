<script lang="ts">
  import { Products } from "../store/ProductStore";
</script>

{#each $Products as product}
  {product.id}
  {product.name}
  {product.price}
  <br />
{/each}