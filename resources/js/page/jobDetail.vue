<template>
	<div>
		<Search></Search>
		<div class="container" id="detail">
			<div class="card mb-4 mt-4 card-head"  >
				<img class="card-img-top imgBg" src="/img/watsons-banner.jpg" alt="Card image">
				<div class="card-body p-5">
					<div class="row">
						<div class="col-md-1">
							<img src="/img/watsons-logo.png" class="img img-responsive imgTitle">
						</div>
						<div class="col-md-10">
							<div class="fs-3"><b>Sales Manager</b></div><br>
							<div class="fs-4 subtitle">Whatson Stores Sdn Bhd</div>
						</div>
					</div>
					<div class="row fs-5">
						<div class="col-md-1"></div>
						<div class="col-md-5">
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
							<div class="col-md-12">
								<i class="fa fa-share-alt" aria-hidden="true"></i><span class="px-2">Retail</span>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<div class="row pb-3 fs-5">
						<div class="col-md-6 text-center">
							<button class="btn btn-link no-link text-black"><i class="fa fa-heart" aria-hidden="true"></i> Save</button>
						</div>
						<div class="col-md-6 text-center">
							<button class="btn btn-link no-link text-black"><i class="fa fa-suitcase" aria-hidden="true"></i> Apply</button>
						</div>
					</div>
				</div>
			</div>
			<div class="card mb-4" >
				<div class="card-header"><b class="fs-3">Requirement</b></div>
				<div class="card-body">
					<p>
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
					</p>
				</div>
			</div>
			<div class="card mb-4" >
				<div class="card-header"><b class="fs-3">Reponsibility</b></div>
				<div class="card-body">
					<p>
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Search from "../components/Search";
export default{
	name:"jobDetail",
	component:{
		Search,
	},
	methods:{
		go(i){
			this.$router.push({
				path: '/jobDetail', 
				params: {
					id: i, 
				}
			});
		}
	}
}
</script>