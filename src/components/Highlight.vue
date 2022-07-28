<script lang="ts" setup>
interface Props {
  code: string;
}

const props = defineProps<Props>();

const getHighlightedJson = computed(() => {
  let json = props.code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = "number";
      if (/^"/.test(match)) cls = /:$/.test(match) ? "key" : "string";
      else if (/true|false/.test(match)) cls = "boolean";
      else if (/null/.test(match)) cls = "null";
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
});
</script>

<template>
  <pre
    v-html="getHighlightedJson"
    class="w-full p-4 overflow-x-auto overflow-y-auto text-sm rounded-lg resize-none no-scrollbar bg-brand/40 h-96"
  />
</template>

<style>
.string {
  color: #98c379;
}
.number {
  color: #d19a66;
}
.boolean {
  color: #c678dd;
}
.null {
  color: #61afef;
}
.key {
  color: #e06c75;
}
</style>
