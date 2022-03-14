<template>
	<div>
		<div class=" p-5 bg-light">
			<div class="container">
				<div class="row">
					<div class="col-md-3 mb-2">
						<input type="text" placeholder="Job title,Company" v-model="title" class="input-rounded">
					</div>
					<div class="col-md-3 mb-2">
						<input type="text" placeholder="Location" v-model="location" class="input-rounded">
						
					</div>
					<div class="col-md-3 mb-2">
						<input type="text" placeholder="Mini Salary (MYR)" v-model="slary" class="input-rounded">
						
					</div>
					<div class="col-md-2">
						<button class="btn btn-danger btn-rounded">Find Job</button>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:"Search",
	data () {
		return {
			title:"",
			location:"",
			slary:"",
		}
	},
}
</script>