<template>
    <div>
        <nav id="navbar" class="navbar navbar-expand-sm bg-danger navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="img/maukerja-logo.png" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link
                            class="nav-link"
                            data-toggle="collapse"
                            :to="{ name: 'alljob' }"
                            >
                            All Job
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Tools</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Link</a></li>
                            <li><a class="dropdown-item" href="#">Another link</a></li>
                            <li><a class="dropdown-item" href="#">A third link</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Help</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Link</a></li>
                            <li><a class="dropdown-item" href="#">Another link</a></li>
                            <li><a class="dropdown-item" href="#">A third link</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link
                        class="nav-link"
                        data-toggle="collapse"
                        :to="{ name: 'blog' }"
                        >
                        Blog
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div id="content">
    <router-view></router-view>
</div>
</div>                      
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
