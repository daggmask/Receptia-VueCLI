<template>
       <section id="not-a-burger" style="@background-image:url(burger.image)">
        <div class="image">
        </div>
        <div class="text">
          <h2>{{burger.title}}</h2>
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
          <p>{{burger.text}}</p>
        </div>
      </section>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  computed:{
  burger(){
    return this.$store.state.burger
  }
}
}
</script>