<script>
  /** Set to `true` to select the tile */
  export let selected = false;

  /** Set to `true` to enable the light variant */
  export let light = false;

  /** Specify the title of the selectable tile */
  export let title = "title";

  /** Specify the value of the selectable tile */
  export let value = "value";

  /** Specify the tabindex */
  export let tabindex = "0";

  /** Specify the ARIA label for the selectable tile checkmark icon */
  export let iconDescription = "Tile checkmark";

  /** Set an id for the input element */
  export let id = "ccs-" + Math.random().toString(36);

  /**
   * Specify a name attribute for the input
   * @type {string}
   */
  export let name = "";

  /** Obtain a reference to the input HTML element */
  export let ref = null;

  import { getContext, onDestroy } from "svelte";
  import CheckmarkFilled16 from "carbon-icons-svelte/lib/CheckmarkFilled16";

  const { update, selectedValues, _light } = getContext("SelectableTileGroup");

  $: update({ value, selected });

  light = light || _light;

  $: selected = $selectedValues.indexOf(value) > -1;

  onDestroy(() => {
    update({ value, selected: false });
  });
</script>

<input
  bind:this="{ref}"
  type="checkbox"
  tabindex="{tabindex}"
  class:bx--tile-input="{true}"
  checked="{selected}"
  id="{id}"
  value="{value}"
  name="{name}"
  title="{title}"
  on:change
  on:change="{() => update({ value, selected: !selected })}"
  on:keydown
  on:keydown="{(e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      update({ value, selected: !selected });
    }
  }}"
/>
<label
  for="{id}"
  class:bx--tile="{true}"
  class:bx--tile--selectable="{true}"
  class:bx--tile--is-selected="{selected}"
  class:bx--tile--light="{light}"
  {...$$restProps}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
>
  <span class:bx--tile__checkmark="{true}">
    <CheckmarkFilled16
      aria-label="{iconDescription}"
      title="{iconDescription}"
    />
  </span>
  <span class:bx--tile-content="{true}">
    <slot />
  </span>
</label>
