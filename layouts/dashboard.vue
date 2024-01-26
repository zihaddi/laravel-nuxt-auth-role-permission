<template>
    <div>
        <!-- top navbar / header -->
        <div>
              <LayoutHeader/>
              <button class="btn btn-primary" @click="logout">logout</button>
        </div>

        <!-- side + main content -->
        <div>
            <!-- side portion -->
            <div>
                 This is sidenav
            </div>

            <!-- main portion   -->
            <div>
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
    export default {

        methods:{
           async logout() {
        let res = confirm('Are you sure you want to sign out?')
        try {
            if (res) {
                
                await useAuthStore().logout()
                console.log('logouting')
                localStorage.removeItem('token');
                this.$router.push('/auth/login')
                return
            }
        } catch (error) {
            console.log(error) 
        }
    }
        }
    }
</script>

<style scoped>

</style>