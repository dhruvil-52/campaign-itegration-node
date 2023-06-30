let model = {}

model.integration = (data) => {
	return new Promise((resolve, reject) => {
		data.Success = true;
		console.log("data", data)
		resolve(data);
	})
}

module.exports = model