<template>
	<div>
		<Search></Search>
		<div class="container">
			<div class="mt-5 bg-light rounded item" @click="go(1)">
				<div class="p-5">
					<div class="row">
						<div class="col-md-1">
							<img src="img/watsons-logo.png" class="img img-responsive">
						</div>
						<div class="col-md-10">
							<div class="fs-3"><b>Sales Manager</b></div><br>
							<div class="fs-4 subtitle">Whatson Stores Sdn Bhd</div>
						</div>
					</div>
					<div class="row fs-5">
						<div class="col-md-6">
							<div class="col-md-12">
								<i class="fa fa-money" aria-hidden="true"></i> <span class="px-2">RM4,00- RM6,00</span>
							</div>
							<div class="col-md-12">
								<i class="fa fa-map-marker" aria-hidden="true"></i><span class="px-2">Kota Kinabalu</span>
							</div>
						</div>
						<div class="col-md-6">
							<div class="col-md-12">
								<i class="fa fa-clock-o" aria-hidden="true"></i><span class="px-2">Full Time</span>
							</div>
						</div>
					</div>
					<p class="pt-4 pb-3">
						is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
					</p>
				</div>
				<hr>
				<div class="row pb-3 fs-5">
					<div class="col-md-6 text-center">
						<button class="btn btn-link no-link text-black"><i class="fa fa-heart" aria-hidden="true"></i> Save</button>
					</div>
					<div class="col-md-6 text-center">
						<button class="btn btn-link no-link text-black"><i class="fa fa-suitcase" aria-hidden="true"></i> Apply</button>
					</div>
				</div>
			</div>
			<div class="mt-5 bg-light rounded item" @click="go(2)">
				<div class="p-5">
					<div class="row">
						<div class="col-md-1">
							<img src="img/watsons-logo.png" class="img img-responsive">
						</div>
						<div class="col-md-10">
							<div class="fs-3"><b>Sales Manager</b></div><br>
							<div class="fs-4 subtitle">Whatson Stores Sdn Bhd</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="col-md-12">
								<i class="fa fa-money" aria-hidden="true"></i> <span class="px-2">RM4,00- RM6,00</span>
							</div>
							<div class="col-md-12">
								<i class="fa fa-map-marker" aria-hidden="true"></i><span class="px-2">Kota Kinabalu</span>
							</div>
						</div>
						<div class="col-md-6">
							<div class="col-md-12">
								<i class="fa fa-clock-o" aria-hidden="true"></i><span class="px-2">Full Time</span>
							</div>
						</div>
					</div>
					<p class="pt-4 pb-3">
						is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
					</p>
				</div>
				<hr>
				<div class="row pb-3">
					<div class="col-md-6 text-center">
						<button class="btn btn-link no-link text-black"><i class="fa fa-heart" aria-hidden="true"></i> Save</button>
					</div>
					<div class="col-md-6 text-center">
						<button class="btn btn-link no-link text-black"><i class="fa fa-suitcase" aria-hidden="true"></i> Apply</button>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import Search from "../components/Search";
export default{
	name:"AllJob",
	components:{
		Search,
	},
	created() {
		this.$store.dispatch('getJob');
	},
	methods:{
		go(i){
			this.$router.push({
				path: '/job/'+i, 
			});
		}
	}
}

</script>