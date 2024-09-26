<template>
  <div>
    <div
        class="createPost"
        style="display: flex; justify-content: center"
    >
      <button @click="createPost">Создать статью</button>
    </div>
    <div class="posts">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
          <p>{{ post.body }}</p>
          <div class="post-actions">
            <i class="fas fa-edit edit" @click="editPost(post.id)" title="Редактировать"></i>
            <i class="fas fa-trash delete" @click="deletePost(post.id)" title="Удалить"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

interface Post {
  id: number;
  title: string;
  body: string;
}

const router = useRouter()
const store = useStore()
</script>