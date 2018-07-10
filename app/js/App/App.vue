    <template lang="html">
    <div class="card bannersito"> 
        <h1>{{game}}</h1>
        <p>Using Webpack</p>
   </div>
</template>
<script>    
    export default {
       data(){
           return {
               game: 'Vue World'
           }
       }
    }
</script>
<style scoped lang="scss">
    //This Works :o
    //@import "./../../css/materialize/sass/materialize.scss";
    .bannersito{
        transition: box-shadow .25s;
        padding: 22px;          
        border-radius: 2px;
        background-color: #689f38;                
        color: white;
        text-align: center;
   }
</style>
