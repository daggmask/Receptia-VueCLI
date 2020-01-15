<template>
<div>
       <section
       v-for="food in foods [$route.params.food]" 
       :key="food.title"
       :style="{backgroundImage: 'url(' + food.image + ')'}">
        <div class="image">
        </div>
        <div class="text">
          <h2>{{food.title}}</h2>
          <div class="icons">
            <div>
              <i class="fas fa-apple-alt"></i>
              <i class="fas fa-utensils"></i>
            </div>
            <div>
              <i class="fas fa-dollar-sign"></i>
            </div>
            <div>
              <i class="far fa-star"></i>
            </div>
            <i class="far fa-clock"></i>
          </div>
          <p>{{food.text}}</p>
        </div>
      </section>
      </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  computed:{
  foods(){
    return this.$store.state.foods
  }
}
}
</script>