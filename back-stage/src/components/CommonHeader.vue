<template>
    <div>
        <header>
            <div class="lcontent">
                <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
                <h3>首页</h3>
            </div>
            <div class="rcontent">
                <el-dropdown trigger="click" size="mini">
                    <sapn>
                        <img class="user" :src="userImg" alt="user">
                    </sapn>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: "CommonHeader",
    data() {
        return {
            userImg: require('../assets/logo.png')
        }
    },
    methods:{
        handleMenu(){
            this.$store.commit('collapseMenu')
        }
    }
}
</script>

<style lang="less" scoped>
header{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.lcontent {
   display: flex;
   align-items: center;
   color: white;
   .el-button{
    margin-right: 20px;
   }
}
.rcontent{
    .user{
     width: 40px;
     height: 40px;
     border-radius: 50%;
}
}

</style>