<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  //if proivde is given in top level then inject works
  //inject works like props to receive prop from top/higer level component
  inject:['topics']
};
</script>