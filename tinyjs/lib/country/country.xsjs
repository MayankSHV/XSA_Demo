function saveCountry(country) {

	var conn = $.hdb.getConnection();

	var output = JSON.stringify(country);

	var fnCreateCountry = conn.loadProcedure("tinyworld.tinydb::createCountry");

	var result = fnCreateCountry({
		IM_COUNTRY: country.name,
		IM_CONTINENT: country.partof
	});

	conn.commit();

	conn.close();

	if (result && result.EX_ERROR !== null) {
<<<<<<< HEAD
		return {body : result, status: $.net.http.BAD_REQUEST};
	} else {
		return {body : output, status: $.net.http.CREATED};
	}

}



// validate the inputs here!
var country = {

  name: $.request.parameters.get("name"),

  partof: $.request.parameters.get("continent")

};
var output = saveCountry(country);

$.response.contentType = "application/json";
$.response.setBody(output.body);

$.response.status = output.status;
=======
		return result.EX_ERROR;
	} else {
		return output;
	}

}

var country = {

	name: $.request.parameters.get("name"),

	partof: $.request.parameters.get("continent")

};

// validate the inputs here!

var output = saveCountry(country);

$.response.contentType = "application/json";
>>>>>>> refs/remotes/origin/master

$.response.setBody(output);